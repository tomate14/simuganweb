const initialState = {
	permitido : false,
	cantVariaciones : 1
}

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
					cantVariaciones : valor
			}
		break;
		
	}
	return state;
} 