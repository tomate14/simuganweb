const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropDownSelected : 0,
	cantidadPasturas : 3,
	digestibilidadVariaciones : [],
	rindeVariaciones : [],
	nombrePotreros:["Vaca", "Caballo", "Cerdo"]
}

function iniciarArregloState(state=initialState,valor=1){
    
    let arrayGeneral = [];
    if(valor > 0){
        for(let index = 0; index< state.cantidadPasturas; index++){
            let arrayAux = [];
            for(let i = 0; i < valor; i++){
                let value  = 0;
                arrayAux.push(value);
            }  
            arrayGeneral.push(arrayAux);
        }   
    }    
    return arrayGeneral;
};


export default function(state=initialState,action){
	switch(action.type){
		case "PERMITIDO_POTREROS" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_POTREROS" :
			let valor = parseInt(action.payload);
			return{...state,
					cantVariaciones : valor,
					digestibilidadVariaciones : iniciarArregloState(state,valor),
					rindeVariaciones : iniciarArregloState(state,valor)
			}
		break;
		case "MODIFYDROPDOWN_POTREROS":
		return{...state,
			dropDownSelected : action.payload
			}
		break;
		case "UPDATE-VALUE-POTREROS":
			return{
			...state,
			digestibilidadVariaciones : state.digestibilidadVariaciones.map(
               (content, i) => i == state.dropDownSelected ? state.digestibilidadVariaciones[state.dropDownSelected].map(
                   (content,j) => j == action.index ? parseInt(action.value)
                   : content
                   )                             

               : content
               )
			}
		break;
		case "UPDATE-VALUE-RINDE_POTREROS":
			return{
			...state,
			rindeVariaciones : state.rindeVariaciones.map(
               (content, i) => i == state.dropDownSelected ? state.rindeVariaciones[state.dropDownSelected].map(
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