export function permitirVariaciones(e){
	console.log("permitirVariaciones-engorde");
	return{
		type : "PERMITIDO_ENGORDE",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	console.log("modificarVariaciones-engorde");
	return{
		type: "CANTIDAD_ENGORDE",
		payload: e.target.value
	}
}


export function InputVariacionPastureValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_PASTURE_ENGORDE",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
}


export function InputVariacionGrainValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_GRAIN_ENGORDE",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
}

export function InputVariacionSilageValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_SILAGE_ENGORDE",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
}

export function InputVariacionRastrojoValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_RASTROJO_ENGORDE",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
}

export function InputVariacionDiferidosValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_DIFERIDOS_ENGORDE",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
}

export function ModificarPagina(pagina) {    
    return {
        type: "PAGINA_ENGORDE",
        payload:pagina
    }    
    
}

export function ModificarInputValueTriggerProtein(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-PROTEIN_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}

export function ModificarInputValueTriggerIntake(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-INTAKE_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}
export function ModificarInputValueTriggerDigest(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-DIGEST_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}
export function ModificarInputValueTriggerDRProtein(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-DRPROTEIN_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}