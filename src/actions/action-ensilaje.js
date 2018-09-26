export function permitirVariaciones(e){
	console.log("permitirVariaciones-ensilaje");
	return{
		type : "PERMITIDO_ENSILAJE",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-ensilaje");
	return{
		type: "CANTIDAD_ENSILAJE",
		payload: e.target.value
	}
}


export function modificarInputValueTrigger(e){
	console.log("modificarInputValueTrigger-ensilaje");
	return{
		type: "UPDATE-VALUE-TRIGGER_ENSILAJE",
		index: e.target.id,
		value : e.target.value
	}
}


export function modificarInputValueLeftover(e){
	console.log("modificarInputValueLeftover-ensilaje");
	return{
		type: "UPDATE-VALUE-LEFTOVER_ENSILAJE",
		index: e.target.id,
		value : e.target.value
	}
}