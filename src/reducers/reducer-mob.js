import Simulacion from '../data/simulacioninicial.js';

const initialState = {
  permitido : false,
  cantVariaciones : 0,
  dropDownSelected : 0,
  //Configuracion que se va a cargar
  arrayMobs:[],
  //Valores por defecto con los que se carga la ventana
  valoresSimulacion : cargarMobs(),
  //Nombre de los Mobs que vamos a tener para cargar
  mobsNombre: initMobs()

}

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

function cargarMobs(){
  let mobs = Simulacion.escenario.mobs[0].mob;
  console.log(mobs);
  return mobs;
}

function initMobs(){
 let mobs = [];
 let debug = Simulacion.escenario.mobs[0];
 for(let i = 0; i< Simulacion.escenario.mobs[0].mob.length;i++){
  mobs[i] =  Simulacion.escenario.mobs[0].mob[i].$.name;
 }
 return mobs;
}


function modificarObjeto(action, content){
  let aux2 = 2;
}

function ModificarArreglo(state,valor,arreglo){
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
    arrayAux = iniciarArregloState(state,valor);
    for(let i = 0; i < arreglo.length;i++){
        for(let j=0; j<arreglo[i].length;j++){
            arrayAux[i][j]= arreglo[i][j];
        }
     }
    }
    return arrayAux;
  }

  function iniciarArregloState(state=initialState,valor=1){
    
    let arrayGeneral = [];


    if(valor > 0){
        for(let index = 0; index< state.mobsNombre.length; index++){
            
            let arrayVariacion = [];
            let SubMobArray = [];
            let ObjetoSubMob = {};
            let Objeto = {
    					pagvariaciones : [],
    					pagActual: 1
    				}

            //Genero los valores de los submobs
            for(let indexSubMobs = 0; indexSubMobs < state.valoresSimulacion[index].submobs[0].submob.length; indexSubMobs++){
              ObjetoSubMob = {};
              ObjetoSubMob.variables = ["weaning","startCountAnimals","submobSwMax","submobSwMean","submobSwMin","vaquillona1ano","vaquillona2ano"]; 
              ObjetoSubMob.valores   = [ 
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.weaning),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.startCountAnimals),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMax),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMean),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMin),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].weanerSubMob[0].vaquillonas1ano[0].$.amount),
                                          parseInt(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].weanerSubMob[0].vaquillonas2ano[0].$.amount) 
                                        ]

              SubMobArray.push(ObjetoSubMob);              
            }
        		
            for(let i = 0; i < valor; i++){	

                //Todo lo que contiene una variacion de Mob
        				let ObjetoMobs = {}
                ObjetoMobs.pastureAllow = [];
                ObjetoMobs.silageAllow  = [];
                ObjetoMobs.grainAllow   = [];
                ObjetoMobs.cropAllow    = [];
                ObjetoMobs.stockAllow   = [];
                ObjetoMobs.submobs      = [];
                ObjetoMobs.weaningMobs  = {};
                ObjetoMobs.submobs      = SubMobArray;

                //Genero los valores por defecto de los meses de cada Mobs
        				for(let y = 0; y < 12; y++){
                  //Obtengo el mes en string que corresponde
                  let month = getMonth(y);

                  let ObjetoMesPastureAllow = {};
        					ObjetoMesPastureAllow.valor = parseFloat(state.valoresSimulacion[index].pastureAllow[0].$[month]); 
                  ObjetoMesPastureAllow.mes   = month;
                  ObjetoMobs.pastureAllow.push(ObjetoMesPastureAllow);

                  let ObjetoMesSilageAllow = {};
                  ObjetoMesSilageAllow.valor = parseFloat(state.valoresSimulacion[index].silageAllow[0].$[month]); 
                  ObjetoMesSilageAllow.mes   = month;
        					ObjetoMobs.silageAllow.push(ObjetoMesSilageAllow);

                  let ObjetoMesGrainAllow = {};
                  ObjetoMesGrainAllow.valor = parseFloat(state.valoresSimulacion[index].grainAllow[0].$[month]); 
                  ObjetoMesGrainAllow.mes   = month;
        					ObjetoMobs.grainAllow.push(ObjetoMesGrainAllow);

                  let ObjetoMesCropAllow = {};
                  ObjetoMesCropAllow.valor = parseFloat(state.valoresSimulacion[index].crop_stubbleAllow[0].$[month]); 
                  ObjetoMesCropAllow.mes   = month;
        					ObjetoMobs.cropAllow.push(ObjetoMesCropAllow);

                  let ObjetoMesStockAllow = {};
                  ObjetoMesStockAllow.valor = parseFloat(state.valoresSimulacion[index].stockPilledAllow[0].$[month]); 
                  ObjetoMesStockAllow.mes   = month;
        					ObjetoMobs.stockAllow.push(ObjetoMesStockAllow);

        				}

        			  let ObjetoVariacionWeaning = {}

        				ObjetoVariacionWeaning.pastureAllow = ObjetoMobs.pastureAllow;
        				ObjetoVariacionWeaning.silageAllow  = ObjetoMobs.silageAllow;
        				ObjetoVariacionWeaning.grainAllow   = ObjetoMobs.grainAllow;
        				ObjetoVariacionWeaning.cropAllow    = ObjetoMobs.cropAllow;
        				ObjetoVariacionWeaning.stockAllow   = ObjetoMobs.stockAllow;
                ObjetoVariacionWeaning.paddocks     = [];
        				ObjetoMobs.weaningMobs         = ObjetoVariacionWeaning;
        				ObjetoMobs.paddocks            = [];
        				
        				
                arrayVariacion.push(ObjetoMobs);
                
            }  

            Objeto.pagvariaciones = arrayVariacion;
            arrayGeneral.push(Objeto);
        }   
    }    
    return arrayGeneral;
}

export default function(state=initialState,action){
	console.log("REDUCER-MOB");
  let valor = 0;
  switch(action.type){
		case "PERMITIDO_MOB" : 
			return {...state,
					permitido : action.payload
				}
		break;

		case "CANTIDAD_MOB" :
		   valor = parseInt(action.payload);
           if (isNaN(valor)){
               valor = state.cantVariaciones;
           }
           if(valor > 20){
              valor = 20;
           }
			return{...state,
					cantVariaciones : valor,
					arrayMobs : ModificarArreglo(state,valor,state.arrayMobs)
			}
		break;

    case "MODIFYDROPDOWN_MOB":
    return{...state,
      dropDownSelected : parseInt(action.payload)
      }
    break;

    case("PAGINA_MOB"):
            let pagina = action.payload;
            return{
                ...state,
                arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?
                                   {...content, 
                                    pagActual : pagina
                                 }                                   
                      : content
                )
            }
            break;
	}
	return state;
} 