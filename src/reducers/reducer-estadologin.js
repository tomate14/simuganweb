const initialState = {
	logueado:true
}


export default function(state=initialState,action){
	switch(action.type){

		case "LOGOUT" : 
			return {...state,
					logueado : false
				}
		break;
	}
	return state;
} 