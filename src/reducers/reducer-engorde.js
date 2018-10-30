import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
  tipoEngorde : Simulacion.escenario.fattening[0].$.fattMethod,
  paginaActualPasture: 1,
  paginaActualGrain: 1,
  paginaActualSilage: 1,
  paginaActualRastrojo: 1,
  paginaActualDiferidos: 1,
  cropStubbleEnable : (Simulacion.escenario.fattening[0].$.enableCrop_stubble === 'true'),
  stockPilledEnable : (Simulacion.escenario.fattening[0].$.enableStockPilled === 'true'),
  arrayPastures : [],
  arraySilage : [],
  arrayGrain : [],
  arrayStockPilled : [],
  arrayCropStubble : [],
  pastureValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].pastureAllow[0].$),
  grainValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].grainAllow[0].$),
  silageValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].silageAllow[0].$),
  stockPilledValues : inicializarArregloSimulacion(Simulacion.escenario.fattening[0].stockPilledAllow[0].$),
  cropStubbleValues :inicializarArregloSimulacion(Simulacion.escenario.fattening[0].crop_stubbleAllow[0].$),
  arrayProtein : [],
  arrayIntake : [],
  arrayDigest : [],
  arrayDRProtein : [],
  arrayPesoVivo : [],
  arrayCC : [],
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
      let valorMes = parseInt(arreglo[month]);
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
    if(valor > 0){
        for(let index = 0; index< valor; index++){
            let arrayAux = [];
            for(let i = 0; i < 12; i++){
                let value  = 0;
                arrayAux.push(value);
            }  
            arrayGeneral.push(arrayAux);
        }   
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
          arrayPastures : modificarArreglo(state,valor,state.arrayPastures),
          arrayGrain : modificarArreglo(state,valor,state.arrayGrain),
          arraySilage : modificarArreglo(state,valor,state.arraySilage),
          arrayCropStubble : modificarArreglo(state,valor,state.arrayCropStubble),
          arrayStockPilled : modificarArreglo(state,valor,state.arrayStockPilled),
          arrayProtein : modificarArregloSimple(state,valor,state.arrayProtein),
          arrayIntake : modificarArregloSimple(state,valor,state.arrayIntake),
          arrayDigest : modificarArregloSimple(state,valor,state.arrayDigest),
          arrayDRProtein : modificarArregloSimple(state,valor,state.arrayDRProtein),
          arrayPesoVivo : modificarArregloSimple(state,valor,state.arrayPesoVivo),
          arrayCC : modificarArregloSimple(state,valor,state.arrayCC),
          paginaActualPasture: 1,
          paginaActualGrain: 1,
          paginaActualSilage: 1,
          paginaActualRastrojo: 1,
          paginaActualDiferidos: 1

					}
		break;
    case("PAGINA-PASTURE_ENGORDE"):
          let pagina = action.payload;
          return{
              ...state,
              paginaActualPasture : pagina
          }
            break;
    case("PAGINA-GRAIN_ENGORDE"):
          pagina = action.payload;
          return{
              ...state,
              paginaActualGrain : pagina
          }
            break;
    case("PAGINA-SILAGE_ENGORDE"):
          pagina = action.payload;
          return{
              ...state,
              paginaActualSilage : pagina
          }
            break;
    case("PAGINA-RASTROJO_ENGORDE"):
          pagina = action.payload;
          return{
              ...state,
              paginaActualRastrojo : pagina
          }
            break;
    case("PAGINA-DIFERIDOS_ENGORDE"):
          pagina = action.payload;
          return{
              ...state,
              paginaActualDiferidos : pagina
          }
            break;
    case "VALORVARIACION_PASTURE_ENGORDE":
    return {...state,
    arrayPastures: state.arrayPastures.map(
                                    (content, i) => i == action.pagina ?
                                        state.arrayPastures[action.pagina].map(
                                          (content,j) => j == action.posicion ? action.valor
                                                    : content
                                          )
                                  : content
                                  )
    }
    break;
    case "VALORVARIACION_GRAIN_ENGORDE":
        return {...state,
        arrayGrain: state.arrayGrain.map(
                                        (content, i) => i == action.pagina ?
                                            state.arrayGrain[action.pagina].map(
                                              (content,j) => j == action.posicion ? action.valor
                                                        : content
                                              )
                                      : content
                                      )
        }
        break;
    case "VALORVARIACION_SILAGE_ENGORDE":
        return {...state,
        arraySilage: state.arraySilage.map(
                                        (content, i) => i == action.pagina ?
                                            state.arraySilage[action.pagina].map(
                                              (content,j) => j == action.posicion ? action.valor
                                                        : content
                                              )
                                      : content
                                      )
        }
    case "VALORVARIACION_RASTROJO_ENGORDE":
        return {...state,
        arrayCropStubble: state.arrayCropStubble.map(
                                        (content, i) => i == action.pagina ?
                                            state.arrayCropStubble[action.pagina].map(
                                              (content,j) => j == action.posicion ? action.valor
                                                        : content
                                              )
                                      : content
                                      )
        }
        break;
    case "VALORVARIACION_DIFERIDOS_ENGORDE":
        return {...state,
        arrayStockPilled: state.arrayStockPilled.map(
                                        (content, i) => i == action.pagina ?
                                            state.arrayStockPilled[action.pagina].map(
                                              (content,j) => j == action.posicion ? action.valor
                                                        : content
                                              )
                                      : content
                                      )
        }
        break;
    case "UPDATE-VALUE-TRIGGER-PROTEIN_ENGORDE":
           valor = parseInt(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayProtein : state.arrayProtein.map(
                   (content, i) => i == action.index ? parseInt(valor)                             
                   : content
                   )
          }
        break;
     case "UPDATE-VALUE-TRIGGER-INTAKE_ENGORDE":
           valor = parseInt(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayIntake : state.arrayIntake.map(
                   (content, i) => i == action.index ? parseInt(valor)                             
                   : content
                   )
          }
        break;
     case "UPDATE-VALUE-TRIGGER-DIGEST_ENGORDE":
           valor = parseInt(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayDigest : state.arrayDigest.map(
                   (content, i) => i == action.index ? parseInt(valor)                             
                   : content
                   )
          }
        break;
       case "UPDATE-VALUE-TRIGGER-DRPROTEIN_ENGORDE":
           valor = parseInt(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayDRProtein : state.arrayDRProtein.map(
                   (content, i) => i == action.index ? parseInt(valor)                             
                   : content
                   )
          }
        break;
               case "UPDATE-VALUE-TRIGGER-PESOVIVO_ENGORDE":
           valor = parseInt(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayPesoVivo : state.arrayPesoVivo.map(
                   (content, i) => i == action.index ? parseInt(valor)                             
                   : content
                   )
          }
        break;
               case "UPDATE-VALUE-TRIGGER-CC_ENGORDE":
           valor = parseFloat(action.value);
                 if (isNaN(valor)){
                     valor = 0;
                 }
                
          return{
          ...state,
          arrayCC : state.arrayCC.map(
                   (content, i) => i == action.index ? parseFloat(valor)                             
                   : content
                   )
          }
        break;

	}
	return state;
} 