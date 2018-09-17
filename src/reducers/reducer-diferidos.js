const initialState = {
	permitido : false,
	cantVariaciones : 1
}

export default function(state=initialState,action){
	console.log("REDUCER-DIFERIDO");
	switch(action.type){
		case "PERMITIDO" : 
		return {...state,
				permitido : action.payload
		}
		break;
		case "CANTIDAD" :
			let valor = parseInt(action.payload);
			return{...state,
					cantVariaciones : valor
			}
		break;
		
	}
	return state;
} 