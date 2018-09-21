const initialState = {
	permitido : false,
	cantVariaciones : 0,
	dropdownSelected : 0,
	cantidadPasturas : 3,
	digestibilidadVariaciones : [],
	rindeVariaciones : [],
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
	console.log("REDUCER-DIFERIDO");
	switch(action.type){
		case "PERMITIDO_DIFERIDO" : 
		return {...state,
				permitido : action.payload
			}
		break;
		case "CANTIDAD_DIFERIDO" :
			let valor = parseInt(action.payload);
			return{...state,
					cantVariaciones : valor,
					digestibilidadVariaciones : iniciarArregloState(state,valor),
					rindeVariaciones : iniciarArregloState(state,valor)
			}
		break;
		case "MODIFYDROPDOWN_DIFERIDO":
		return{...state,
			dropdownSelected : action.payload
			}
		break;
		case "UPDATE-VALUE-DIGEST_DIFERIDO":
			return{
			...state,
			digestibilidadVariaciones : state.digestibilidadVariaciones.map(
               (content, i) => i == state.dropdownSelected ? state.digestibilidadVariaciones[state.dropdownSelected].map(
                   (content,j) => j == action.index ? parseInt(action.value)
                   : content
                   )                             

               : content
               )
			}
		break;
		case "UPDATE-VALUE-RINDE_DIFERIDO":
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