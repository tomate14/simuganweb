import Simulacion from '../data/simulacioninicial.js';

const initialState = {
  permitido : true,
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

function CrearObjetoMob(state,SubMobArray,index){
    //Todo lo que contiene una variacion de Mob
    let ObjetoMobs = {}
    ObjetoMobs.diferidosEnable = false;
    ObjetoMobs.rastrojoEnable = false;
    ObjetoMobs.paramGenerales = []; 
    ObjetoMobs.pastureAllow   = [];
    ObjetoMobs.silageAllow    = [];
    ObjetoMobs.grainAllow     = [];
    ObjetoMobs.cropAllow      = [];
    ObjetoMobs.stockAllow     = [];
    ObjetoMobs.submobs        = [];
    ObjetoMobs.weaningMobs    = {};
    ObjetoMobs.submobs        = SubMobArray;

    let servicio   =  parseFloat(Simulacion.escenario.mobs[0].mob[index].$.service);
    let reposicion =  parseFloat(Simulacion.escenario.mobs[0].mob[index].$.repositionPercent);
    let pesoMinimo =  parseFloat(Simulacion.escenario.mobs[0].mob[index].$.minInServiceWeight);

    ObjetoMobs.paramGenerales = [servicio,reposicion,pesoMinimo];

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

    //Genero una dimension mas para poder reutilizar el componente de los meses
    //Ej: [0].pastureAllow[12]
    let ArrayAux = [];
    ArrayAux.push(ObjetoMobs.pastureAllow);
    ObjetoMobs.pastureAllow = ArrayAux;

    ArrayAux = [];
    ArrayAux.push(ObjetoMobs.silageAllow);
    ObjetoMobs.silageAllow = ArrayAux;

    ArrayAux = [];
    ArrayAux.push(ObjetoMobs.grainAllow);
    ObjetoMobs.grainAllow = ArrayAux;

    ArrayAux = [];
    ArrayAux.push(ObjetoMobs.cropAllow);
    ObjetoMobs.cropAllow = ArrayAux;

    ArrayAux = [];
    ArrayAux.push(ObjetoMobs.stockAllow);
    ObjetoMobs.stockAllow = ArrayAux;

    let ObjetoVariacionWeaning = {}
    if(Simulacion.escenario.mobs[0].mob[index].weaning_mob != " "){
      ObjetoVariacionWeaning.cropStubbleEnable = true;
      ObjetoVariacionWeaning.stockPilledEnable = true;
      ObjetoVariacionWeaning.pastureAllow   = [];
      ObjetoVariacionWeaning.silageAllow    = [];
      ObjetoVariacionWeaning.grainAllow     = [];
      ObjetoVariacionWeaning.cropAllow      = [];
      ObjetoVariacionWeaning.stockAllow     = [];

      //Genero los objetos para las pasturas que van a estar dentro de weaning mob
      for(let y = 0; y < 12; y++){
        //Obtengo el mes en string que corresponde
        let monthWeaning = getMonth(y);

        let ObjetoMesPastureAllowWeaning = {};

        ObjetoMesPastureAllowWeaning.valor = parseFloat(state.valoresSimulacion[index].weaning_mob[0].pastureAllow[0].$[monthWeaning]); 
        ObjetoMesPastureAllowWeaning.mes   = monthWeaning;
        ObjetoVariacionWeaning.pastureAllow.push(ObjetoMesPastureAllowWeaning);

        let ObjetoMesSilageAllowWeaning = {};
        ObjetoMesSilageAllowWeaning.valor = parseFloat(state.valoresSimulacion[index].weaning_mob[0].silageAllow[0].$[monthWeaning]); 
        ObjetoMesSilageAllowWeaning.mes   = monthWeaning;
        ObjetoVariacionWeaning.silageAllow.push(ObjetoMesSilageAllowWeaning);

        let ObjetoMesGrainAllowWeaning = {};
        ObjetoMesGrainAllowWeaning.valor = parseFloat(state.valoresSimulacion[index].weaning_mob[0].grainAllow[0].$[monthWeaning]); 
        ObjetoMesGrainAllowWeaning.mes   = monthWeaning;
        ObjetoVariacionWeaning.grainAllow.push(ObjetoMesGrainAllowWeaning);

        let ObjetoMesCropAllowWeaning = {};
        ObjetoMesCropAllowWeaning.valor = parseFloat(state.valoresSimulacion[index].weaning_mob[0].crop_stubbleAllow[0].$[monthWeaning]); 
        ObjetoMesCropAllowWeaning.mes   = monthWeaning;
        ObjetoVariacionWeaning.cropAllow.push(ObjetoMesCropAllowWeaning);

        let ObjetoMesStockAllowWeaning = {};
        ObjetoMesStockAllowWeaning.valor = parseFloat(state.valoresSimulacion[index].weaning_mob[0].stockPilledAllow[0].$[monthWeaning]); 
        ObjetoMesStockAllowWeaning.mes   = monthWeaning;
        ObjetoVariacionWeaning.stockAllow.push(ObjetoMesStockAllowWeaning);


      } 

      ArrayAux = [];
      ArrayAux.push(ObjetoVariacionWeaning.pastureAllow);
      ObjetoVariacionWeaning.pastureAllow = ArrayAux;

      ArrayAux = [];
      ArrayAux.push(ObjetoVariacionWeaning.silageAllow);
      ObjetoVariacionWeaning.silageAllow = ArrayAux;

      ArrayAux = [];
      ArrayAux.push(ObjetoVariacionWeaning.grainAllow);
      ObjetoVariacionWeaning.grainAllow = ArrayAux;

      ArrayAux = [];
      ArrayAux.push(ObjetoVariacionWeaning.cropAllow);
      ObjetoVariacionWeaning.cropAllow = ArrayAux;

      ArrayAux = [];
      ArrayAux.push(ObjetoVariacionWeaning.stockAllow);
      ObjetoVariacionWeaning.stockAllow = ArrayAux;

      /*ObjetoVariacionWeaning.pastureAllow = ObjetoMobs.pastureAllow;
      ObjetoVariacionWeaning.silageAllow  = ObjetoMobs.silageAllow;
      ObjetoVariacionWeaning.grainAllow   = ObjetoMobs.grainAllow;
      ObjetoVariacionWeaning.cropAllow    = ObjetoMobs.cropAllow;
      ObjetoVariacionWeaning.stockAllow   = ObjetoMobs.stockAllow;*/
      //ObjetoVariacionWeaning.paddocks     = [];
      ObjetoMobs.weaningMobs         = ObjetoVariacionWeaning;

    }else{
      ObjetoMobs.weaningMobs         = null;
    }


    return ObjetoMobs;
}

function generarSubMobs(state,index){

  let SubMobArray = [];
  let ObjetoSubMob = {};
  //Genero los valores de los submobs
  for(let indexSubMobs = 0; indexSubMobs < state.valoresSimulacion[index].submobs[0].submob.length; indexSubMobs++){
    ObjetoSubMob = {};
    ObjetoSubMob.nombre = state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobName;
    ObjetoSubMob.variables = ["Meses de Destete","Cantidad de animales iniciales","Peso estandar máximo","Peso estandar medio","Peso estandar minimo","Cantidad de vaquillonas de un año","Cantidad de vaquillonas de dos años"]; 
    ObjetoSubMob.valores   = [ 
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.weaning),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.startCountAnimals),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMax),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMean),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].$.submobSwMin),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].weanerSubMob[0].vaquillonas1ano[0].$.amount),
                                parseFloat(state.valoresSimulacion[index].submobs[0].submob[indexSubMobs].weanerSubMob[0].vaquillonas2ano[0].$.amount) 
                              ]

    SubMobArray.push(ObjetoSubMob);              
  }
  return SubMobArray;
}


function iniciarArregloState(state=initialState,valor=1){
  
  let arrayGeneral = [];
  if(valor > 0){
      for(let index = 0; index< state.mobsNombre.length; index++){
          let arrayVariacion = [];
          let Objeto = {
  					pagvariaciones : [],
  					pagActual: 1,              
            cropStubbleEnable : (Simulacion.escenario.mobs[0].mob[index].$.enableCrop_stubble == "true"),
            stockPilledEnable : (Simulacion.escenario.mobs[0].mob[index].$.enableStockPilled == "true"),
  				}

          let ObjetoMob = {};
          for(let i = 0; i < valor; i++){ 
            ObjetoMob = {};
            ObjetoMob = CrearObjetoMob(state,generarSubMobs(state,index),index);
            arrayVariacion.push(ObjetoMob);                
          }  

          Objeto.pagvariaciones = arrayVariacion;
          arrayGeneral.push(Objeto);
      }   
  }    
  return arrayGeneral;
}

function modificarArreglo(action, mob,pagina){
    let array = [];
    let variaciones = mob;
    let ObjetoMes = {}
    switch(action.payload){
        //Modificar el objeto de la primera tab de mobs
        case "diferidosEnable":
            variaciones.pagvariaciones[pagina].diferidosEnable = action.valor;
            return variaciones.pagvariaciones;
        break;
        case "rastrojoEnable":
            variaciones.pagvariaciones[pagina].rastrojoEnable = action.valor;
            return variaciones.pagvariaciones;
        break;
        case "diferidosWeaningEnable":
            variaciones.pagvariaciones[pagina].weaningMobs.stockPilledEnable = action.valor;
            return variaciones.pagvariaciones;
        break;
        case "rastrojoWeaningEnable":
            variaciones.pagvariaciones[pagina].weaningMobs.cropStubbleEnable = action.valor;
            return variaciones.pagvariaciones;
        break;
        case "ConfGenerales":
            for (let i = 0; i< variaciones.pagvariaciones[pagina].paramGenerales.length; i++){
                if(i == action.index){
                  array.push(action.valor);
                }else{
                  array.push(variaciones.pagvariaciones[pagina].paramGenerales[i]);
                }
            }
          variaciones.pagvariaciones[pagina].paramGenerales = array;
          return variaciones.pagvariaciones;
          break;

        //Modificar los objetos pasture, crop, stock, grain y silage de las tabs principales  
        case "MesesGenerales":
            console.log("Modificando el objeto "+action.objeto+" de la pagina ["+pagina+"] ");
            ObjetoMes = {}
            for (let i = 0; i< variaciones.pagvariaciones[pagina][action.objeto][0].length; i++){
                if(i == action.index){
                  ObjetoMes.valor = action.valor;
                  ObjetoMes.mes   = getMonth(i);
                  array.push(ObjetoMes);
                }else{
                  array.push(variaciones.pagvariaciones[pagina][action.objeto][0][i]);
                }
            }
            variaciones.pagvariaciones[pagina][action.objeto][0] = array;
            return variaciones.pagvariaciones;
          break;
        case "MesesWeaning":
            ObjetoMes = {}
            for (let i = 0; i< variaciones.pagvariaciones[pagina].weaningMobs[action.objeto][0].length; i++){
                if(i == action.index){
                  ObjetoMes.valor = action.valor;
                  ObjetoMes.mes   = getMonth(i);
                  array.push(ObjetoMes);
                }else{
                  array.push(variaciones.pagvariaciones[pagina].weaningMobs[action.objeto][0][i]);
                }
            }
            variaciones.pagvariaciones[pagina].weaningMobs[action.objeto][0] = array;
            return variaciones.pagvariaciones;
          break;
        case "SubMobs":
            for (let i = 0; i< variaciones.pagvariaciones[pagina][action.objeto][action.indexSubMob].valores.length; i++){
                if(i == action.index){
                  array.push(action.valor);
                }else{
                  array.push(variaciones.pagvariaciones[pagina][action.objeto][action.indexSubMob].valores[i]);
                }
            }
            variaciones.pagvariaciones[pagina][action.objeto][action.indexSubMob].valores = array;
            return variaciones.pagvariaciones;
          break;
    }
    

}

export default function(state=initialState,action){
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

    case "CONF-GENERALES_MOB":
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "PASTURAS-GENERALES_MOB":     
      action.objeto  = "pastureAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "GRANOS-GENERALES_MOB":      
      action.objeto  = "grainAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "ENSILAJE-GENERALES_MOB":
      action.objeto  = "silageAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "RASTROJO-GENERALES_MOB":
      action.objeto  = "cropAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "DIFERIDO-GENERALES_MOB":
      action.objeto  = "stockAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    /*
      FUNCIONES DE WEANING
    */
    case "PASTURAS-WEANING_MOB":     
      action.objeto  = "pastureAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "GRANOS-WEANING_MOB":      
      action.objeto  = "grainAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "ENSILAJE-WEANING_MOB":
      action.objeto  = "silageAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "RASTROJO-WEANING_MOB":
      action.objeto  = "cropAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "DIFERIDO-WEANING_MOB":
      action.objeto  = "stockAllow";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
      break;
    case "SUBMOBS_MOB":
      action.objeto  = "submobs";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
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
    case("DIFERIDO-ENABLE_MOB"):
      action.objeto  = "diferidosEnable";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
    break;
    case ("RASTROJO-ENABLE_MOB"):
      action.objeto  = "rastrojoEnable";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
    break;

    case ("DIFERIDO-WEANING-ENABLE_MOB"):
      action.objeto  = "diferidosWeaningEnable";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }

    break;
    case ("RASTROJO-WEANING-ENABLE_MOB"):
      action.objeto  = "rastrojoWeaningEnable";
      return{...state,
        arrayMobs : state.arrayMobs.map(
                        (content, i) => state.dropDownSelected == i ?                  
                               {...content, 
                                  pagvariaciones: modificarArreglo(action,content,content.pagActual-1)
                               }                        
                        : content
                )
        }
    break;
	}
	return state;
} 