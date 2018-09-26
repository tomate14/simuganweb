export function permitirVariaciones(e){
	console.log("permitirVariaciones-diferido");
	return{
		type : "PERMITIDO_INVERNADA",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-diferido");
	return{
		type: "CANTIDAD_INVERNADA",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	console.log("modificarDropdownSelected-diferido");
	return{
		type: "MODIFYDROPDOWN_INVERNADA",
		payload: e.target.id
	}
}

export function modificarInputValueVacasEngorde(e){
	console.log("modificarInputValueVacasEngorde-diferido");
	return{
		type: "UPDATE-VALUE-NOBILLO_INVERNADA",
		index: e.target.id,
		value : e.target.value
	}
}


export function modificarInputValueVaquillona(e){
	console.log("modificarInputValueVaquillona-invernada");
	return{
		type: "UPDATE-VALUE-VAQUILLONA_INVERNADA",
		index: e.target.id,
		value : e.target.value
	}
}