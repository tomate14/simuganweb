import Simulacion from '../data/simulacioninicial.js';

const initialState = {
  cantMobs : 0,
	arrayDestete : [],
  arrayServicio : [],
  arrayPesoServicio : []
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
  

function iniciarArregloState(cantMobs,valor=1){
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< cantMobs; index++){
            let arrayAux = [];
            for(let i = 0; i < valor ; i++){ // el for va hasta la cantidad de parametros
                let value = 0;
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
    case "CANTIDAD_MOBS" :
    console.log("entre a servicio Destete cantidad!!!!")
      valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
      return{...state,
            arrayDestete : iniciarArregloState(state.cantMobs,valor),
            arrayServicio : iniciarArregloState(state.cantMobs,valor),
            arrayPesoServicio : iniciarArregloState(state.cantMobs,valor)
        }
		case "UPDATE-VALUE-DESTETE_SERVICIODESTETE" : 
		valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
      return{
      ...state,
      arrayDestete : state.arrayDestete.map(
               (content, i) => i == action.dropdownSelected ? state.arrayDestete[action.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(valor)
                   : content
                   )                             

               : content
               )
      }
	}
	return state;
} 