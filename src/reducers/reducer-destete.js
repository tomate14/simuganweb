import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropDownSelected : 0,
	Variaciones : [],
	//rindeVariaciones : [],
	nombreMobs : iniciarMobs(),
	valoresSimulacion : iniciarValoresSimulacion()
}

function iniciarMobs(){
	let Mobs = [];
	//let aux =  Simulacion.escenario.paddocks[0];
	for(let i = 0; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
		Mobs.push(Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i].$.mobId);
	}
	return Mobs;
}

function iniciarValoresSimulacion(){
	//let pasturas = Simulacion.escenario.paddocks[0].paddock[i];
	let arrayValoresDestete = [];
	for(let i = 0 ; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
		let desteteValue = Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i];
		let objectValue = {
			calfDestiny      : desteteValue.$.calfDestiny,
			calfDietBProtein : desteteValue.$.calfDietBProtein,
			calfDietDRProtein: desteteValue.$.calfDietDRProtein,
			calfDietDigest   : desteteValue.$.calfDietDigest,
			calfDietIntake   : desteteValue.$.calfDietIntake,
			enable           : desteteValue.$.enable,
			mobId            : desteteValue.$.mobId,
			umbralBcs        : desteteValue.$.umbralBcs
		}
        arrayValoresDestete.push(objectValue);
	}
	return arrayValoresDestete;
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
        for(let index = 0; index< state.nombreMobs.length; index++){
            let arrayAux = [];
            for(let i = 0; i < valor; i++){
                let objectValue = {
					calfDestiny      : state.valoresSimulacion[index].calfDestiny,
					calfDietBProtein : parseInt(state.valoresSimulacion[index].calfDietBProtein),
					calfDietDRProtein: parseInt(state.valoresSimulacion[index].calfDietDRProtein),
					calfDietDigest   : parseInt(state.valoresSimulacion[index].calfDietDigest),
					calfDietIntake   : parseInt(state.valoresSimulacion[index].calfDietIntake),
					enable           : state.valoresSimulacion[index].enable,
					mobId            : parseInt(state.valoresSimulacion[index].mobId),
					umbralBcs        : parseInt(state.valoresSimulacion[index].umbralBcs)
				}
                arrayAux.push(objectValue);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
}


export default function(state=initialState,action){
	console.log("REDUCER-DESTETE");
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_DESTETE" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_DESTETE" :
		   valor = parseInt(action.payload);
           if (isNaN(valor)){
               valor = state.cantVariaciones;
           }
           if(valor > 20){
              valor = 20;
           }
			return{...state,
					cantVariaciones : valor,
					Variaciones : ModificarArreglo(state,valor,state.Variaciones)
			}
		break;
		break;
		case "MODIFYDROPDOWN_DESTETE":
		return{...state,
			dropDownSelected : parseInt(action.payload)
			}
		break;
		case "UPDATE-VALUE-DESTETE":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
					...state,
					Variaciones : state.Variaciones.map(
	               	(content, i) => i == state.dropDownSelected ? state.Variaciones[state.dropDownSelected].map(
	                  	(content,j) => j == action.index ? parseInt(valor)
	                   	: content
	                   	)		                             

	               	: content
	               	)
				}
			break;

	}
	return state;
} 