import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropdownSelected : 0,
	digestibilidadVariaciones : [],
	rindeVariaciones : [],
	nombrePasturas : iniciarPasturas(),
	valoresSimulacion : iniciarValoresSimulacion()
}

function iniciarPasturas(){
	let pasturas = Simulacion.escenario.stockPilledType[0].stockPilled;
	let arrayNombrePastura = [];
	for(let i = 0 ; i< pasturas.length; i++){
		let nombre = pasturas[i].$.name;
          arrayNombrePastura.push(nombre);
	}
	return arrayNombrePastura;
}

function iniciarValoresSimulacion(){
	let pasturas = Simulacion.escenario.stockPilledType[0].stockPilled;
	let arrayValoresPastura = [];
	for(let i = 0 ; i< pasturas.length; i++){
		let digestValue = pasturas[i].$.stockPilledDigest;
		let yieldValue = pasturas[i].$.yield;
		let objectValue = {
			digestValue : digestValue,
			yieldValue : yieldValue
			}
          arrayValoresPastura.push(objectValue);
		}
	return arrayValoresPastura;
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
        for(let index = 0; index< state.nombrePasturas.length; index++){
            let arrayAux = [];
            for(let i = 0; i < valor; i++){
                let value  = 0;
                arrayAux.push(value);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
}


export default function(state=initialState,action){
	console.log("REDUCER-DIFERIDO");
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_DIFERIDO" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_DIFERIDO" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
					digestibilidadVariaciones : ModificarArreglo(state,valor,state.digestibilidadVariaciones),
					rindeVariaciones : ModificarArreglo(state,valor,state.rindeVariaciones)
			}
		break;
		case "MODIFYDROPDOWN_DIFERIDO":
		return{...state,
			dropdownSelected : parseInt(action.payload)
			}
		break;
		case "UPDATE-VALUE-DIGEST_DIFERIDO":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
			...state,
			digestibilidadVariaciones : state.digestibilidadVariaciones.map(
               (content, i) => i == state.dropdownSelected ? state.digestibilidadVariaciones[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

               : content
               )
			}
		break;
		case "UPDATE-VALUE-RINDE_DIFERIDO":
			valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }

			return{
			...state,
			rindeVariaciones : state.rindeVariaciones.map(
               (content, i) => i == state.dropdownSelected ? state.rindeVariaciones[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(action.value)
                   : content
                   )                             

               : content
               )
			}
		break;
	}
	return state;
} 