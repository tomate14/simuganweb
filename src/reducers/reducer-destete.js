import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropDownSelected : 0,
	Variaciones : [],
	pagvariaciones:[],
	paginaActual:1,
	//rindeVariaciones : [],
	nombreMobs : iniciarMobs(),
	valoresSimulacion : iniciarValoresSimulacion(),
	textos: ["Umbral","Habilitar regla según el peso del ternero","calfDestiny","calfDietBProtein","calfDietIntake", "calfDietDigest", "calfDietDRProtein","umbralBcs","Habilitar regla según CC de la vaca"]
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
		let objectValue = [desteteValue.$.calfUmbralLw,
		                   desteteValue.$.enableCalf,
		                   desteteValue.$.calfDestiny,
		                   desteteValue.$.calfDietBProtein,
		                   desteteValue.$.calfDietIntake,
		                   desteteValue.$.calfDietDigest,
		                   desteteValue.$.calfDietDRProtein,
		                   desteteValue.$.umbralBcs,
		                   desteteValue.$.enable
		                   ]; 
		
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


            	let calfUmbralLw      = parseInt(state.valoresSimulacion[index][0]);

            	let isTrueSet         = (state.valoresSimulacion[index][1] == 'true');
				let enable            = isTrueSet;

				let enableCalf        = enable;
				let calfDestiny       = state.valoresSimulacion[index][2];
				let calfDietBProtein  = parseInt(state.valoresSimulacion[index][3]);
				let calfDietIntake    = parseInt(state.valoresSimulacion[index][4]);
				let calfDietDigest    = parseInt(state.valoresSimulacion[index][5]);
				let calfDietDRProtein = parseInt(state.valoresSimulacion[index][6]);
				let umbralBcs         = parseInt(state.valoresSimulacion[index][7]);

				isTrueSet             = (state.valoresSimulacion[index][8] == 'true');
				enable                = isTrueSet;
				let enableProp        = enable;

				
                let objectValue       = {Completion : [calfUmbralLw,enableCalf,calfDestiny,calfDietBProtein,calfDietIntake,calfDietDigest,calfDietDRProtein,umbralBcs,enableProp ] };
					
				
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
					pagvariaciones : ModificarArreglo(state,valor,state.pagvariaciones)
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
					pagvariaciones : state.pagvariaciones.map(
	               	(content, i) => i == state.dropDownSelected ? state.pagvariaciones[state.dropDownSelected].map(
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