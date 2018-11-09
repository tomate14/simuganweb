import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : true,
	cantVariaciones : 0,
	dropdownSelected : 0,
	nobillosVariaciones : [],
	VaquillonaVariaciones : [],
	nombrePasturas : ["Unico Valor"],
	valoresSimulacion : iniciarValoresSimulacion()
}



function iniciarValoresSimulacion(){
	let arrayValoresPastura = [];
	
	let nobillo    = Simulacion.escenario.sellRule[0].$.lwValueFeme;
	let vaquillona = Simulacion.escenario.sellRule[0].$.lwValue;

	let objectValue = {
		nobilloValue : nobillo,
		vaquillonaValue : vaquillona
	}

  arrayValoresPastura.push(objectValue);

	return arrayValoresPastura;
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
  

function iniciarArregloState(state=initialState,valor=1,tipo=""){
    
    //let arrayGeneral = [];
    let value  = 0;
    switch(tipo){
      case "NOBILLO":
        value =  state.valoresSimulacion[0].nobilloValue
        break;
      case "VAQUILLONA":
        value = state.valoresSimulacion[0].vaquillonaValue
        break;
    }
    let arrayAux = [];
    if(valor > 0){
        /*
          No tengo pasturas, por lo que siempre se hace una sola vez el for
          pero queda preparado por las dudas

        */

        for(let index = 0; index< state.nombrePasturas.length; index++){
            
            for(let i = 0; i < valor; i++){     

                arrayAux.push(parseInt(value));
            }  
            //arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayAux;
}


export default function(state=initialState,action){
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_INVERNADA" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_INVERNADA" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
					nobillosVariaciones : ModificarArreglo(state,valor,state.nobillosVariaciones,"NOBILLO"),
					VaquillonaVariaciones : ModificarArreglo(state,valor,state.VaquillonaVariaciones,"VAQUILLONA")
			}
		break;
		case "MODIFYDROPDOWN_INVERNADA":
		return{...state,
			dropdownSelected : parseInt(action.payload)
			}
		break;
		case "UPDATE-VALUE-NOBILLO_INVERNADA":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
			...state,
			nobillosVariaciones : state.nobillosVariaciones.map(               
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

			}
		break;
		case "UPDATE-VALUE-VAQUILLONA_INVERNADA":
			valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }

			return{
			...state,
			VaquillonaVariaciones : state.VaquillonaVariaciones.map(               
                   (content,j) => j == action.index ? parseInt(action.value)
                   : content
                   )                             
			}
		break;
	}
	return state;
} 