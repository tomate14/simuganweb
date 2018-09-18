export function permitirVariaciones(e){
	console.log("permitirVariaciones-diferido");
	return{
		type : "PERMITIDO_DIFERIDO",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-diferido");
	return{
		type: "CANTIDAD_DIFERIDO",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	console.log("modificarDropdownSelected-diferido");
	return{
		type: "MODIFYDROPDOWN_DIFERIDO",
		payload: e.target.id
	}
}