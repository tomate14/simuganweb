export function permitirVariaciones(e){
	console.log("permitirVariaciones-diferido");
	return{
		type : "PERMITIDO",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-diferido");
	return{
		type: "CANTIDAD",
		payload: e.target.value
	}
}