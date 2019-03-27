import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : true,
	cantVariaciones : 0,
  pagVariaciones : [],
  paginaActual : 0,
  pastureValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].pastureAllow[0].$),
  grainValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].grainAllow[0].$),
  silageValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].silageAllow[0].$),
  stockPilledValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].stockPilledAllow[0].$),
  cropStubbleValues :inicializarArregloSimulacion(Simulacion.escenario.fattening[0].crop_stubbleAllow[0].$),
  corralValues : {protein : Simulacion.escenario.fattening[0].diet[0].$.feedlotBProtein,
                  intake : Simulacion.escenario.fattening[0].diet[0].$.feedlotIntake, 
                  digest : Simulacion.escenario.fattening[0].diet[0].$.feedlotDigest,
                  proteinDR : Simulacion.escenario.fattening[0].diet[0].$.feedlotDRProtein,
                  cc : Simulacion.escenario.fattening[0].csf[0].$.bcsValue,
                  pesoVivo : Simulacion.escenario.fattening[0].csf[0].$.lwValue,
                  medida : Simulacion.escenario.fattening[0].csf[0].$.type }

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

function inicializarArregloSimulacion(arreglo){
      let arrayValores = [];    
    for(let i = 0; i<12;i++){
      let ObjetoMes = {};
      let month = getMonth(i);
      ObjetoMes.month = month;
      let valorMes = parseFloat(arreglo[month]);
      ObjetoMes.value = valorMes;
      arrayValores.push(ObjetoMes);
    }
    return arrayValores;
}

function modificarArreglo(state,valor,arreglo){
  let arrayAux = [];
  if(valor <= state.cantVariaciones){
    /*
      Si la cantidad es menor a la que tengo, elimino las variaciones sobrantes
      Para cada una de las pasturas, saco las variaciones sobrantes
    */
     for(let i = 0; i < arreglo.length;i++){
        for(let j=valor; j<arreglo.length;j){
            arreglo.splice(j,1);
        }
     }/*     for(let i = 0; i < valor; i++){
        arrayAux.push([]);
      for(let j = 0; j< 12; j++){
        arrayAux[i].push(arreglo[i][j]);
      }
     } */
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
/*    if(valor > 0){
        for(let index = 0; index< valor; index++){
            let arrayAux = [];
            for(let i = 0; i < 12; i++){
                let value  = 0;
                arrayAux.push(value);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    */
    for(let i = 0; i< valor; i++){
      let tipoEngorde = "pasto";
      let pasture = [];
      let silage = [];
      let grain = [];
      let diferido = [];
      let rastrojo = [];
      let protein = state.corralValues.protein;
      let intake = state.corralValues.intake;
      let digest = state.corralValues.digest;
      let DRPRotein = state.corralValues.proteinDR;
      let pesoVivo = state.corralValues.pesoVivo;
      let cc = state.corralValues.cc;
      let feedlotType = "lw";
      for(let j= 0;j < 12;j++){
          pasture.push(state.pastureValues[j].value);
          silage.push(state.silageValues[j].value);
          grain.push(state.grainValues[j].value);
          diferido.push(state.stockPilledValues[j].value);
          rastrojo.push(state.cropStubbleValues[j].value);
      }
      let objectValue = { tipoEngorde : tipoEngorde,
                          generalEnable : false,
                          cutsEnable : false,
                          vaciasEnable : false,
                          diferidoEnable : false,
                          rastrojoEnable : false,
                          pasture : pasture,
                          silage : silage,
                          grain : grain,
                          diferido : diferido,
                          rastrojo : rastrojo,
                          feedlotType : feedlotType,
                          protein : protein,
                          intake : intake,
                          digest : digest,
                          DRPRotein : DRPRotein,
                          pesoVivo : pesoVivo,
                          cc : cc
                          };
        arrayGeneral.push(objectValue);
    }
    return arrayGeneral;
}

function modificarArregloSimple(state,valor,arreglo){
  let arrayAux = [];
  if(valor <= state.cantVariaciones){
    /*
      Si la cantidad es menor a la que tengo, elimino las variaciones sobrantes
      Para cada una de las pasturas, saco las variaciones sobrantes
    */
          for(let j=valor; j<arreglo.length;j){
            arreglo.splice(j,1);
      }
     arrayAux = arreglo;
  }else{
    /*
      Si la cantidad es mayor a la que tengo, se reinician todos los valores
      Por cada pastura que tengo, genero las variaciones que requiera el usuario
    */
    arrayAux = iniciarArregloSimpleState(valor);
    for(let i = 0; i < arreglo.length;i++){
            arrayAux[i]= arreglo[i];
        }
    }
    return arrayAux;
  }


function iniciarArregloSimpleState(valor=1){
  let arrayGeneral = [];
  if(valor > 0){
    for(let index = 0; index < valor; index++){
      let value = 0;
      arrayGeneral.push(value);
    }
  }
  return arrayGeneral;
}


export default function(state=initialState,action){
	let valor = 0;
  let pagina = 0;
	switch(action.type){
		case "PERMITIDO_ENGORDE" : 
		return {...state,
				permitido : action.payload
			}
		break;
    case "PAGINA_ENGORDE":
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
		case "CANTIDAD_ENGORDE" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
          pagVariaciones : iniciarArregloState(state,valor)

					}
		break;
        case "UPDATE-VALUE-TRIGGER-TIPO_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        tipoEngorde : action.valor}
                                  : content
                                  )
    }
    break;
    case "VALORVARIACION_PASTURE_ENGORDE":
    console.log(action.posicion + " " + action.valor)
    return {...state,
    pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ?{ ...content,
                                        pasture : state.pagVariaciones[i].pasture.map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )}
                                  : content
                                  )
    }
    break;
    case "VALORVARIACION_GRAIN_ENGORDE":
         return {...state,
    pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? {...content,
                                        grain :state.pagVariaciones[i].grain.map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )}
                                  : content
                                  )
    }
        break;
    case "VALORVARIACION_SILAGE_ENGORDE":
        return {...state,
    pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? {...content,
                                        silage :state.pagVariaciones[i].silage.map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )}
                                  : content
                                  )
    }
    case "VALORVARIACION_RASTROJO_ENGORDE":
        return {...state,
    pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? {...content,
                                        rastrojo :state.pagVariaciones[i].rastrojo.map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )}
                                  : content
                                  )
    }
        break;
    case "VALORVARIACION_DIFERIDOS_ENGORDE":
         return {...state,
    pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? {...content,
                                        diferido :state.pagVariaciones[i].diferido.map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )}
                                  : content
                                  )
    }
        break;
    case "UPDATE-VALUE-TRIGGER-CHECK-DIFERIDO_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        diferidoEnable : action.valor}
                                  : content
                                  )
    }
    break;
    case "UPDATE-VALUE-TRIGGER-CHECK-RASTROJO_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        rastrojoEnable : action.valor}
                                  : content
                                  )
    }
    break;
    case "UPDATE-VALUE-TRIGGER-CHECK-CUTS_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        cutsEnable : action.valor}
                                  : content
                                  )
    }
    break;
    case "UPDATE-VALUE-TRIGGER-CHECK-VACIAS_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        vaciasEnable : action.valor}
                                  : content
                                  )
    }
    break;
    case "UPDATE-VALUE-TRIGGER-CHECK-GENERAL_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        generalEnable : action.valor}
                                  : content
                                  )
    }
    break;
    case "UPDATE-VALUE-TRIGGER-FEEDLOT-TYPE_ENGORDE":                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        feedlotType : action.valor}
                                  : content
                                  )
    }
    break;

    case "UPDATE-VALUE-TRIGGER-PROTEIN_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
         return {...state,
        pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        protein : valor}
                                  : content
                                  )
    }
      break;
     case "UPDATE-VALUE-TRIGGER-INTAKE_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return {...state,
          pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        intake : valor}
                                  : content
                                  )
    }
        break;
     case "UPDATE-VALUE-TRIGGER-DIGEST_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return {...state,
          pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        digest : valor}
                                  : content
                                  )
    }
        break;
       case "UPDATE-VALUE-TRIGGER-DRPROTEIN_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
         return {...state,
          pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        DRPRotein : valor}
                                  : content
                                  )
    }          
        break;
               case "UPDATE-VALUE-TRIGGER-PESOVIVO_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return {...state,
          pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        pesoVivo : valor}
                                  : content
                                  )
    }          
        break;
               case "UPDATE-VALUE-TRIGGER-CC_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
         return {...state,
          pagVariaciones: state.pagVariaciones.map(
                                    (content, i) => i == state.paginaActual ? 
                                        {...content,
                                        cc : valor}
                                  : content
                                  )
    }          
        break;

	}
	return state;
} 