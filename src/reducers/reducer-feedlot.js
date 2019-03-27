/*
  ChildFeedLot {
                completion : {
                        min,
                        max,
                        value,
                        DRProtein,
                        Digest,
                        Intake,
                        BProtein
                },
                fattening  : {
                        min,
                        max,
                        out,
                        DRProtein,
                        Digest,
                        Intake,
                        BProtein  
                }
  }

*/

function getEstado(state=null,valor=1){
  let arrayPasturas = [];
  if(state==null){
      //let pasturas = Simulacion.escenario.pastureType[0].pasture;
      let estado = {};
      estado.permitido=true;
      estado.cantVariaciones=0;
      estado.paginaActual=1;
      estado.pagvariaciones = [];
      estado.textoSalida  = ["Peso Minimo de ingreso", "Peso Maximo de venta", "Peso vivo de venta", "Proteina Bruta", "Digestibilidad de la dieta", "Consumo diario", "Proteina degradable"];
      estado.textoEngorde = ["Peso Minimo de ingreso", "Peso Maximo de venta", "Peso vivo de venta", "Proteina Bruta", "Digestibilidad de la dieta", "Consumo diario", "Proteina degradable"];
      return estado;
  }else{
      return ModificarArreglo(state,valor,state.pagvariaciones);
  }

}

function ModificarArreglo(state,valor,arreglo,tipo){
  let arrayAux = [];
  if(valor <= state.cantVariaciones){
    /*
      Si la cantidad es menor a la que tengo, elimino las variaciones sobrantes
      Para cada una de las pasturas, saco las variaciones sobrantes
    */
     for(let i = 0; i < arreglo.length;i++){
        for(let j=valor; j<arreglo[i].length;j){
            arreglo[i].splice(j,1);
        }
     }
     arrayAux = arreglo;
  }else{
    /*
      Si la cantidad es mayor a la que tengo, se reinician todos los valores
      Por cada pastura que tengo, genero las variaciones que requiera el usuario
    */
      arrayAux = iniciarArregloState(state,valor,tipo);
      for(let i = 0; i < arreglo.length;i++){
              arrayAux[i]= arreglo[i];
       }
    }
    return arrayAux;
  }

function iniciarArregloState(state,valor=1,tipo=""){
    
    //let arrayGeneral = [];
    let value  = 0;
    
    let arrayGeneral = [];
    if(valor > 0){
        /*
          No tengo pasturas, por lo que siempre se hace una sola vez el for
          pero queda preparado por las dudas

        */

        for(let index = 0; index< valor; index++){

            //ObjetoCompletion [min, max, value, DRProtein, Digest, Intake, BProtein]
            let ObjetoCompletion = [0,100,10,40,40,40,40]              
            
            // ObjetoFattening [min, max, value, DRProtein, Digest, Intake, BProtein]         
            let ObjetoFattening  = [0,100,10,40,40,40,40];

            let ChildFeedLot = {
                Completion : ObjetoCompletion,
                Fattening  : ObjetoFattening
            }
              
            arrayGeneral.push(ChildFeedLot);
        }   
    }    
    return arrayGeneral;
}
function modificarObjeto(action, objeto){
    let Objeto = objeto;
    Objeto[action.atributo] = parseFloat(action.valor);
    return Objeto;

}
/* 
    Generacion del estado de los recursos forrajeros
*/
export default function (state=getEstado(), action) {
  
     switch (action.type){
        case("PERMITIDO_FEEDLOT"):
            return {
                ...state,
                permitido : action.payload
            };
            break;
        case("CANTIDAD_FEEDLOT"):            
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
        case("PAGINA_FEEDLOT"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
            break;
        case("VALORSALIDA_FEEDLOT"):
            
            return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, i) => i == action.pagina ?
                                   {...content, 
                                    Completion : modificarObjeto(action, content.Completion)
                                 }                                   
                      : content
                )
            }
            break;
        case("VALORENGORDE_FEEDLOT"):
            
            return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, i) => i == action.pagina ?
                                   {...content, 
                                    Fattening : modificarObjeto(action, content.Fattening)
                                 }                                   
                      : content
                )
            }
            break;
            
    }
    return state;
}