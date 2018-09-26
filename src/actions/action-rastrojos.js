export function permitirVariaciones(e){
	console.log("permitirVariaciones-rastrojos");
	return{
		type : "PERMITIDO_RASTROJOS",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-rastrojos");
	return{
		type: "CANTIDAD_RASTROJOS",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	console.log("modificarDropdownSelected-rastrojos");
	return{
		type: "MODIFYDROPDOWN_RASTROJOS",
		payload: e.target.id
	}
}

export function modificarInputValueDigestibilidad(e){
	console.log("modificarInputValueDigestibilidad-rastrojos");
	return{
		type: "UPDATE-VALUE-DIGEST_RASTROJOS",
		index: e.target.id,
		value : e.target.value
	}
}


export function modificarInputValueRinde(e){
	console.log("modificarInputValueRinde-rastrojos");
	return{
		type: "UPDATE-VALUE-RINDE_RASTROJOS",
		index: e.target.id,
		value : e.target.value
	}
}