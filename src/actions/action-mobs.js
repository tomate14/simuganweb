export function permitirVariaciones(e){
	console.log("permitirVariaciones-diferido");
	return{
		type : "PERMITIDO_MOBS",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-diferido");
	return{
		type: "CANTIDAD_MOBS",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	console.log("modificarDropdownSelected-diferido");
	return{
		type: "MODIFYDROPDOWN_MOBS",
		payload: e.target.id
	}
}

export function modificarInputValueDestete(e){
	console.log("modificarInputValueDestete-mobs");
	return{
		type: "UPDATE-VALUE-DESTETE_MOBS",
		index: e.target.id,
		value : e.target.value,
		dropdownSelected : e.target.dropdownSelected
	}
}

export function modificarInputValueServicio(e){
	console.log("modificarInputValueServicio-mobs");
	return{
		type: "UPDATE-VALUE-SERVICIO_MOBS",
		index: e.target.id,
		value : e.target.value,
		dropdownSelected : e.target.dropdownSelected
	}
}

export function modificarInputValuePesoServicio(e){
	console.log("modificarInputValuePesoServicio-mobs");
	return{
		type: "UPDATE-VALUE-PESOSERVICIO_MOBS",
		index: e.target.id,
		value : e.target.value,
		dropdownSelected : e.target.dropdownSelected
	}
}

