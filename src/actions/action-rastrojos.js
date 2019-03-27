
export function permitirVariaciones(e){
    return{
        type : "PERMITIDO_RASTROJOS",
        payload: e.target.checked
    }       
}

export function modificarVariaciones(e){
	return{
		type: "CANTIDAD_RASTROJOS",
		payload: e.target.value
	}
}

export function modificarDropdownSelected(e){
	return{
		type: "MODIFYDROPDOWN_RASTROJOS",
		payload: e.target.id
	}
}

export function modificarInputValueDigestibilidad(e){
	return{
		type: "UPDATE-VALUE-DIGEST_RASTROJOS",
		index: e.target.id,
		value : e.target.value
	}
}


export function modificarInputValueRinde(e){
	return{
		type: "UPDATE-VALUE-RINDE_RASTROJOS",
		index: e.target.id,
		value : e.target.value
	}
}