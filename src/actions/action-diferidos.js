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

export function modificarInputValueDigestibilidad(e){
	console.log("modificarInputValueDigestibilidad-diferido");
	//let index = e.target.id.split("-");
	return{
		type: "UPDATE-VALUE-DIGEST_DIFERIDO",
		index: e.target.id,
		value : parseFloat(e.target.value)
	}
}


export function modificarInputValueRinde(e){
	console.log("modificarInputValueRinde-diferido");
	return{
		type: "UPDATE-VALUE-RINDE_DIFERIDO",
		index: e.target.id,
		value : parseInt(e.target.value)
	}
}