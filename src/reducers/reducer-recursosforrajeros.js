import Simulacion from '../data/simulacioninicial.js';
/*
  Obtengo el mes en base al numero de mes, para buscarlo en Simulacion 
  y obtener el valor de dicho mes
*/
function getMonth(numeroMes){
  switch(numeroMes){
    case 0:
        return "January";
        break;
    case 1:
        return "February";
        break;
    case 2:
        return "March";
        break;
    case 3:
        return "April";
        break;
    case 4:
        return "May";
        break;
    case 5:
        return "June";
        break;
    case 6:
        return "July";
        break;
    case 7:
        return "August";
        break;
    case 8:
        return "September";
        break;
    case 9:
        return "October";
        break;
    case 10:
        return "November";
        break;
    case 11:
        return "December";
        break;
  }
}
/*
  Genero los valores de la pastura seleccionada para mostrarlo en la tabla de meses(MonthTable)
*/
function generarValoresPasturaSeleccionada(dropdownSelected){
    let arrayValores = [];    
    for(let i = 0; i<12;i++){
      let ObjetoMes = {};
      let month = getMonth(i);
      ObjetoMes.month = month;
      let valorMes = parseInt(Simulacion.escenario.pastureType[0].pasture[dropdownSelected].pastureAccumRateMean[0].$[month]);
      ObjetoMes.value = valorMes;
      arrayValores.push(ObjetoMes);
    }
    return arrayValores;
}

/*
  Controla y genera la cantidad de variaciones por pastura.
  -- Si el usuario ingresa una cantidad menor a la ingresada previamente, se eliminan las
     variaciones que sobren
  -- Si el usuario ingresa una cantidad mayor a la ingresada previamente, se genera el arreglo nuevamente
     y se eliminan todos los valores que se hayan ingresado
*/
function iniciarArregloState(state,valor = 1,cantInputs=12){
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< valor; index++){
            let arrayAux = [];
            for(let i = 0; i < cantInputs; i++){
                let nombre = "mes"+i.toString();
                let value  = 0;
                let ObjetoMes = {}
                if(state==null){
                  ObjetoMes.valor = value;  
                }else{
                  let month = getMonth(i);
                  ObjetoMes.valor = parseInt(Simulacion.escenario.pastureType[0].pasture[state.dropDownSelected].pastureAccumRateMean[0].$[month]); 
                }               
                
                ObjetoMes.mes   = nombre;
                arrayAux.push(ObjetoMes);
            }  
           
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
};

function ModificarArreglo(state,valor){
  let arrayAux = [];
  if(valor <= state.cantVariaciones){
    /*
      Si la cantidad es menor a la que tengo, elimino las variaciones sobrantes
      Para cada una de las pasturas, saco las variaciones sobrantes
    */
     for(let i = 0; i < state.pagvariaciones.length;i++){
        for(let j=valor; j<state.pagvariaciones[i].length;j){
            state.pagvariaciones[i].splice(j,1);
        }
     }
  }else{
    /*
      Si la cantidad es mayor a la que tengo, se reinician todos los valores
      Por cada pastura que tengo, genero las variaciones que requiera el usuario
    */
    for(let i = 0; i < state.nombrePasturas.length;i++){
        let array = [];
        state.pagvariaciones[i] = iniciarArregloState(state,valor);        
    }
    
  }
  return state.pagvariaciones;

}
function getEstado(state=null,valor=1){
  let arrayPasturas = [];
  if(state==null){
      let pasturas = Simulacion.escenario.pastureType[0].pasture;
      let estado = {};
      estado.permitido=true;
      estado.cantVariaciones=0;
      estado.inputsPorVariacion=12;
      estado.paginaActual=1;
      estado.dropDownSelected=0;
      estado.pagvariaciones = [];
      estado.nombrePasturas = [];
      /* 
        Valores de la pastura seleccionada del dropDown para cargar la tabla de meses
      */

      estado.valoresMeses = generarValoresPasturaSeleccionada(estado.dropDownSelected);
      let cantPasturas = pasturas.length;      
      let arrayNombrePastura = [];
      for(let i = 0; i<cantPasturas; i++){
          arrayPasturas.push(iniciarArregloState(state));
          let nombrePastura = pasturas[i].$.desc + " - "+pasturas[i].$.name
          arrayNombrePastura.push(nombrePastura);
      }
      estado.pagvariaciones = arrayPasturas;
      estado.nombrePasturas = arrayNombrePastura;  
      return estado;
  }else{
      /*
        Si tengo un estado, solo genero el vector nuevamente
      */
      /*for(let i = 0; i<state.nombrePasturas.length; i++){
          arrayPasturas.push(iniciarArregloState(valor));
      }
      return arrayPasturas;*/
      return ModificarArreglo(state,valor);
  }

}


/* 
    Generacion del estado de los recursos forrajeros
*/
export default function (state=getEstado(), action) {
    console.log("REDUCER FORRAJERO");
     
     switch (action.type){
        case("PERMITIDO_RECURSOSFORRAJEROS"):
            console.log("Permitido"+action.payload);
            return {
                ...state,
                permitido : action.payload
            };
            break;
        case("CANTIDAD_RECURSOSFORRAJEROS"):            
            //Sin redondeo de decimales, siempre parte inferior
             let valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = 0;
             }
             if(valor > 20){
                valor = 20;
             }
             return {
                ...state,
                cantVariaciones : valor,
                pagvariaciones : getEstado(state,valor),
                paginaActual : 1
            };
            break;
        case("PAGINA_RECURSOSFORRAJEROS"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
            break;
        case("VALORVARIACION_RECURSOSFORRAJEROS"):

             if (isNaN(parseInt(action.valor))){
                 action.valor = 0;
             }
            return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == action.dropdownSeleccion ?
                                  state.pagvariaciones[action.dropdownSeleccion].map(
                                    (content, i) => i == action.pagina ?
                                        state.pagvariaciones[action.dropdownSeleccion][action.pagina].map(
                                          (content,j) => j == action.posicion ? {...content, valor: action.valor}
                                                    : content
                                          )
                                  : content
                                  )
                      : content
                )
                /*pagvariaciones: state.pagvariaciones.map(
                       (content, i) => i == action.pagina ? state.pagvariaciones[action.pagina].map(
                                                                   (content,j) => j == action.posicion ? {...content, valor: action.valor}
                                                                                          : content
                                                            )

             : content
             )*/

        }
        break;
        case("MODIFYDROPDOWN_RECURSOSFORRAJEROS"):
          return{
                ...state,
                dropDownSelected : action.payload,
                valoresMeses : generarValoresPasturaSeleccionada(action.payload),
                pagvariaciones : getEstado(state,state.cantVariaciones)
          }
          break;
    }
    return state;
}
