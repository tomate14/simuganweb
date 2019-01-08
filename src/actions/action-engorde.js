export function permitirVariaciones(e){
	return{
		type : "PERMITIDO_ENGORDE",
		payload: e.target.checked
	}		
}

export function modificarVariaciones(e){
	return{
		type: "CANTIDAD_ENGORDE",
		payload: e.target.value
	}
}

export function modificarPagina(pagina) {    
    return {
        type: "PAGINA_ENGORDE",
        payload:pagina
    }  
} 

export function InputCheckDiferido(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-CHECK-DIFERIDO_ENGORDE",
        valor : valor
    }
}

export function InputCheckRastrojo(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-CHECK-RASTROJO_ENGORDE",
        valor : valor
    }
}

export function InputCheckCuts(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-CHECK-CUTS_ENGORDE",
        valor : valor
    }
}

export function InputCheckVacias(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-CHECK-VACIAS_ENGORDE",
        valor : valor
    }
}

export function InputCheckGeneral(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-CHECK-GENERAL_ENGORDE",
        valor : valor
    }
}

export function InputRadioEngorde(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-TIPO_ENGORDE", 
        valor : valor
    }
}

export function InputSelectValueFeedlot(valor){
    return{
        type : "UPDATE-VALUE-TRIGGER-FEEDLOT-TYPE_ENGORDE",
        valor : valor
    }
}


export function InputVariacionPastureValor(id, pagina ,valor) {    
    return {
        type: "VALORVARIACION_PASTURE_ENGORDE",
        posicion:id,
        valor:parseInt(valor)
    }    
}


export function InputVariacionGrainValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_GRAIN_ENGORDE",
        posicion:id,
        valor:parseInt(valor)
    }    
}

export function InputVariacionSilageValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_SILAGE_ENGORDE",
        posicion:id,
        valor:parseInt(valor)
    }    
}

export function InputVariacionRastrojoValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_RASTROJO_ENGORDE",
        posicion:id,
        valor:parseInt(valor)
    }    
}

export function InputVariacionDiferidosValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_DIFERIDOS_ENGORDE",
        posicion:id,
        valor:parseInt(valor)
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

export function ModificarInputValueTriggerPesoVivo(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-PESOVIVO_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}

export function ModificarInputValueTriggerCC(e){
	return{
		type: "UPDATE-VALUE-TRIGGER-CC_ENGORDE",
		index: e.target.id,
		value : e.target.value
	}
}