export function permitirVariaciones(e){
	return{
		type : "PERMITIDO_INVERNADA",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	return{
		type: "CANTIDAD_INVERNADA",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	return{
		type: "MODIFYDROPDOWN_INVERNADA",
		payload: e.target.id
	}
}

export function modificarInputValueVacasEngorde(e){
	return{
		type: "UPDATE-VALUE-NOBILLO_INVERNADA",
		index: e.target.id,
		value : e.target.value
	}
}


export function modificarInputValueVaquillona(e){
	return{
		type: "UPDATE-VALUE-VAQUILLONA_INVERNADA",
		index: e.target.id,
		value : e.target.value
	}
}