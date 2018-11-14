import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : true,
	cantVariaciones : 0,
	dropdownSelected : 0,
	digestibilidadVariaciones : [],
	rindeVariaciones : [],
	nombreRastrojos : iniciarRastrojos(),
	valoresSimulacion : iniciarValoresSimulacion()
}

function iniciarRastrojos(){
	let rastrojos = Simulacion.escenario.crop_stubbles[0].crop_stubble;
	let arrayNombreRatrojos = [];
	for(let i = 0 ; i< rastrojos.length; i++){
		let nombre = rastrojos[i].$.name + " - " +rastrojos[i].$.tipocultivo;
          arrayNombreRatrojos.push(nombre);
	}
	return arrayNombreRatrojos;
}

function iniciarValoresSimulacion(){
	let rastrojos = Simulacion.escenario.crop_stubbles[0].crop_stubble;
	let arrayValoresRastrojos = [];
	for(let i = 0 ; i< rastrojos.length; i++){
		let digestValue = parseInt(rastrojos[i].$.crop_stubbleDigest);
		let yieldValue  = parseInt(rastrojos[i].$.yield);
		let objectValue = {
			digestValue : digestValue,
			yieldValue  : yieldValue
			}
          arrayValoresRastrojos.push(objectValue);
		}
	return arrayValoresRastrojos;
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
        for(let j=0; j<arreglo[i].length;j++){
            arrayAux[i][j]= arreglo[i][j];
        }
     }
    }
    return arrayAux;
  }
  

function iniciarArregloState(state=initialState,valor=1,tipo =""){
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< state.nombreRastrojos.length; index++){
            let arrayAux = [];
            for(let i = 0; i < valor; i++){
                let value = 0;
                switch(tipo){
                  case "rinde":
                      value  = state.valoresSimulacion[index].yieldValue;
                  case "digestibilidad":
                      value  = state.valoresSimulacion[index].digestValue;
                }
              arrayAux.push(value);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
}


export default function(state=initialState,action){
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_RASTROJOS" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_RASTROJOS" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
					digestibilidadVariaciones : ModificarArreglo(state,valor,state.digestibilidadVariaciones,"digestibilidad"),
					rindeVariaciones : ModificarArreglo(state,valor,state.rindeVariaciones,"rinde")
			}
		break;
		case "MODIFYDROPDOWN_RASTROJOS":
  		return{...state,
  			dropdownSelected : parseInt(action.payload)
  			}
  		break;
		case "UPDATE-VALUE-DIGEST_RASTROJOS":
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
		case "UPDATE-VALUE-RINDE_RASTROJOS":
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