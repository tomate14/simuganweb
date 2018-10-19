<<<<<<< HEAD
import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropDownSelected : 0,

	seleccionInputDrop: 0,
	pagvariaciones:[],
	paginaActual:1,
	//rindeVariaciones : [],
	nombreMobs : iniciarMobs(),
	nombresPicker:["Invernada","Cria"],
	valoresSimulacion : iniciarValoresSimulacion(),
	textos: ["Umbral","Habilitar regla según el peso del ternero","calfDestiny","calfDietBProtein","calfDietIntake", "calfDietDigest", "calfDietDRProtein","umbralBcs","Habilitar regla según CC de la vaca"]
}

function iniciarMobs(){
	let Mobs = [];
	//let aux =  Simulacion.escenario.paddocks[0];
	let aux = Simulacion.escenario.earlyWeaning;
	if(aux != ""){
		for(let i = 0; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
			Mobs.push(Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i].$.mobId);
		}
	}
	
	return Mobs;
}

function iniciarValoresSimulacion(){
	//let pasturas = Simulacion.escenario.paddocks[0].paddock[i];
	let arrayValoresDestete = [];
	let aux = Simulacion.escenario.earlyWeaning;
	if(aux != ""){
		for(let i = 0 ; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
			let desteteValue = Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i];
			let valor = 0;
			switch(desteteValue.$.calfDestiny){
				case "beef_finishing":
					valor = 0;
					break;
				case "cow_calf":
					valor = 1;
					break;
			}

			let objectValue = [desteteValue.$.calfUmbralLw,
							   desteteValue.$.enableCalf,
							   valor,
							   desteteValue.$.calfDietBProtein,
							   desteteValue.$.calfDietIntake,
							   desteteValue.$.calfDietDigest,
							   desteteValue.$.calfDietDRProtein,
							   desteteValue.$.umbralBcs,
							   desteteValue.$.enable
							   ]; 

			arrayValoresDestete.push(objectValue);
		}
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

				
                let objectValue       = {Destete : [calfUmbralLw,enableCalf,calfDestiny,calfDietBProtein,calfDietIntake,calfDietDigest,calfDietDRProtein,umbralBcs,enableProp ] };
					
				
                arrayAux.push(objectValue);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
}

function modificarObjeto(action, objeto){
    let Objeto = objeto;
    Objeto[action.index] = action.value;
    return Objeto;

}

function modificarRadio(action, objeto){
    let Objeto = objeto;
    Objeto[action.indextrue]  = true;
    Objeto[action.indexfalse] = false;
    return Objeto;

}

function modificarDropInput(action, objeto){
    let Objeto = objeto;
    Objeto[2]  = action.payload;
    return Objeto;

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

		case("PAGINA_DESTETE"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
            break;
		case "MODIFYDROPDOWN_DESTETE":
			return{...state,
				dropDownSelected : parseInt(action.payload)
				}
			break;
		case "MODIFYDROPDOWNINPUT_DESTETE":
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarDropInput(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;


		case "UPDATE-VALUE-DESTETE":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarObjeto(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;
		case "RADIO_DESTETE":
            
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarRadio(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;

	}
	return state;
=======
import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropDownSelected : 0,

	seleccionInputDrop: 0,
	pagvariaciones:[],
	paginaActual:1,
	//rindeVariaciones : [],
	nombreMobs : iniciarMobs(),
	nombresPicker:["Invernada","Cria"],
	valoresSimulacion : iniciarValoresSimulacion(),
	textos: ["Umbral","Habilitar regla según el peso del ternero","calfDestiny","calfDietBProtein","calfDietIntake", "calfDietDigest", "calfDietDRProtein","umbralBcs","Habilitar regla según CC de la vaca"]
}

function iniciarMobs(){
	let Mobs = [];
	//let aux =  Simulacion.escenario.paddocks[0];
	let aux = Simulacion.escenario.earlyWeaning;
	if(aux != ""){
		for(let i = 0; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
			Mobs.push(Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i].$.mobId);
		}
	}
	
	return Mobs;
}

function iniciarValoresSimulacion(){
	//let pasturas = Simulacion.escenario.paddocks[0].paddock[i];
	let arrayValoresDestete = [];
	let aux = Simulacion.escenario.earlyWeaning;
	if(aux != ""){
		for(let i = 0 ; i < Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length; i++){
			let desteteValue = Simulacion.escenario.earlyWeaning[0].earlyWeaningMob[i];
			let valor = 0;
			switch(desteteValue.$.calfDestiny){
				case "beef_finishing":
					valor = 0;
					break;
				case "cow_calf":
					valor = 1;
					break;
			}

			let objectValue = [desteteValue.$.calfUmbralLw,
							   desteteValue.$.enableCalf,
							   valor,
							   desteteValue.$.calfDietBProtein,
							   desteteValue.$.calfDietIntake,
							   desteteValue.$.calfDietDigest,
							   desteteValue.$.calfDietDRProtein,
							   desteteValue.$.umbralBcs,
							   desteteValue.$.enable
							   ]; 

			arrayValoresDestete.push(objectValue);
		}
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

				
                let objectValue       = {Destete : [calfUmbralLw,enableCalf,calfDestiny,calfDietBProtein,calfDietIntake,calfDietDigest,calfDietDRProtein,umbralBcs,enableProp ] };
					
				
                arrayAux.push(objectValue);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
}

function modificarObjeto(action, objeto){
    let Objeto = objeto;
    Objeto[action.index] = action.value;
    return Objeto;

}

function modificarRadio(action, objeto){
    let Objeto = objeto;
    Objeto[action.indextrue]  = true;
    Objeto[action.indexfalse] = false;
    return Objeto;

}

function modificarDropInput(action, objeto){
    let Objeto = objeto;
    Objeto[2]  = action.payload;
    return Objeto;

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

		case("PAGINA_DESTETE"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
            break;
		case "MODIFYDROPDOWN_DESTETE":
			return{...state,
				dropDownSelected : parseInt(action.payload)
				}
			break;
		case "MODIFYDROPDOWNINPUT_DESTETE":
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarDropInput(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;


		case "UPDATE-VALUE-DESTETE":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarObjeto(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;
		case "RADIO_DESTETE":
            
			return{
                ...state,
                pagvariaciones: state.pagvariaciones.map(
                        (content, k) => k == state.dropDownSelected ?
                                  state.pagvariaciones[state.dropDownSelected].map(
                                    (content, i) => i == (state.paginaActual-1) ?
                                    	{...content, 
		                                    Destete : modificarRadio(action, content.Destete)
		                                 }  : content
                                  )
                      : content
                )     

	        }
			break;

	}
	return state;
>>>>>>> 28b70f2f4193f8c1b3d3dbf722370c070440d378
} 