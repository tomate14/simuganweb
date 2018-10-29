import Simulacion from '../data/simulacioninicial.js';

const initialState = {
	permitido : false,
	cantVariaciones : 0,
	triggerVariaciones : [],
	leftoverVariaciones : [],
	valoresSimulacion : iniciarValoresSimulacion()
}


function iniciarValoresSimulacion(){
	let ensilaje = Simulacion.escenario.makeSilage[0];
	let objectValue = {
			digestValue : ensilaje.$.triggerMass,
			yieldValue : ensilaje.$.leftoverMass
	}
	return objectValue;
	}
	


function ModificarArreglo(state,valor,arreglo,tipo){
  let arrayAux = [];
  if(valor <= state.cantVariaciones){
  
      for(let j=valor; j<arreglo.length;j){
            arreglo.splice(j,1);
      }
     arrayAux = arreglo;
  }else{

    arrayAux = iniciarArregloState(state,valor,tipo);
    for(let i = 0; i < arreglo.length;i++){
            arrayAux[i]= arreglo[i];
    }
     
  }
  return arrayAux;
}
  

function iniciarArregloState(state=initialState,valor=1,tipo=""){
    
    let arrayGeneral = [];
    if(valor > 0){  
      for(let i = 0; i < valor; i++){
        let value  = 0;
        switch(tipo){
	        case "rinde":
	            value  = state.valoresSimulacion.yieldValue;
	        case "digestibilidad":
	            value  = state.valoresSimulacion.digestValue;
	      }
        arrayGeneral.push(value);
      }  
    }    
    return arrayGeneral;
}


export default function(state=initialState,action){
	let valor = 0;
	switch(action.type){
		case "PERMITIDO_ENSILAJE" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_ENSILAJE" :
			valor = parseInt(action.payload);
             if (isNaN(valor)){
                 valor = state.cantVariaciones;
             }
             if(valor > 20){
                valor = 20;
             }
			return{...state,
					cantVariaciones : valor,
					triggerVariaciones : ModificarArreglo(state,valor,state.triggerVariaciones,"digestibilidad"),
					leftoverVariaciones : ModificarArreglo(state,valor,state.leftoverVariaciones,"rinde")
			}
		break;
		case "UPDATE-VALUE-TRIGGER_ENSILAJE":
			 valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }
            
			return{
			...state,
			triggerVariaciones : state.triggerVariaciones.map(
               (content, i) => i == action.index ? parseInt(valor)                             
               : content
               )
			}
		break;
		case "UPDATE-VALUE-LEFTOVER_ENSILAJE":
			valor = parseInt(action.value);
             if (isNaN(valor)){
                 valor = 0;
             }

			return{
			...state,
			leftoverVariaciones : state.leftoverVariaciones.map(
               (content, i) => i == action.index ? parseInt(valor)                             
               : content
               )
			}
		break;
	}
	return state;
} 