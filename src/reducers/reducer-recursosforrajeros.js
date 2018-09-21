import Simulacion from '../data/simulacioninicial.js';

function iniciarArregloState(valor = 1,cantInputs=12){
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< valor; index++){
            let arrayAux = [];
            for(let i = 0; i < cantInputs; i++){
                let nombre = "mes"+i.toString();
                let value  = 0;
                let ObjetoMes = {}
                ObjetoMes.valor = value;
                ObjetoMes.mes   = nombre;
                arrayAux.push(ObjetoMes);
            }  
           
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
};

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
      let cantPasturas = pasturas.length;      
      let arrayNombrePastura = [];
      for(let i = 0; i<cantPasturas; i++){
          arrayPasturas.push(iniciarArregloState());
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
      for(let i = 0; i<state.nombrePasturas.length; i++){
          arrayPasturas.push(iniciarArregloState(valor));
      }
      return arrayPasturas;
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
                dropDownSelected : action.payload
          }
          break;
    }
    return state;
}
