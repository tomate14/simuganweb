import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropdownSelected : 0,
	mobsNombre  : initMobs(),
  valoresSimulacion : cargarMobs(),
  arrayDestete :  [],
  arrayServicio : [],
  arrayPesoServicio : []
}


function cargarMobs(){
  let mobs = Simulacion.escenario.mobs[0].mob;
  console.log(mobs);
  return mobs;
}

function initMobs(){
 let mobs = [];
 for(let i = 0; i< Simulacion.escenario.mobs[0].mob.length;i++){
  mobs[i] = "Mob " + (i + 1);
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
  

function iniciarArregloState(state=initialState,valor=1){
    
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< state.mobsNombre.length; index++){
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
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_MOBS" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_MOBS" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
          arrayDestete : iniciarArregloState(state,valor),
          arrayServicio : iniciarArregloState(state,valor),
          arrayPesoServicio : iniciarArregloState(state,valor)
        }
		break;
		case "MODIFYDROPDOWN_MOBS":
		return{...state,
			dropdownSelected : parseInt(action.payload)
			}
		break;
    case "UPDATE-VALUE-DESTETE_MOBS" : 
    valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
      return{
      ...state,
      arrayDestete : state.arrayDestete.map(
               (content, i) => i == state.dropdownSelected ? state.arrayDestete[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

               : content
               )
		    }
    case "UPDATE-VALUE-SERVICIO_MOBS" : 
    valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
      return{
      ...state,
      arrayServicio : state.arrayServicio.map(
               (content, i) => i == state.dropdownSelected ? state.arrayServicio[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

               : content
               )
        }

    case "UPDATE-VALUE-PESOSERVICIO_MOBS" : 
    valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
      return{
      ...state,
      arrayPesoServicio : state.arrayPesoServicio.map(
               (content, i) => i == state.dropdownSelected ? state.arrayPesoServicio[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

               : content
               )
        }

	}
	return state;
} 