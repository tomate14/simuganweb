export function modificarVariaciones(e) {    
    return {
        type: "CANTIDAD_FEEDLOT",
        payload:e.target.value
    }    
    
}


/*
    A que atributo del objeto de Fattening la voy a modificar el valor
*/
export function InputVariacionEngorde(pagina, atributo, valor) {    
    return {
        type: "VALORENGORDE_FEEDLOT",
        pagina:pagina,
        atributo:atributo,
        valor:parseInt(valor)
    }    
}

/*
    A que atributo del objeto de Completion la voy a modificar el valor
*/
export function InputVariacionSalida(pagina, atributo, valor) {    
    return {
        type: "VALORSALIDA_FEEDLOT",
        pagina:pagina,
        atributo:atributo,
        valor:parseInt(valor)
    }    
}

export function modificarPagina(pagina) {    
    return {
        type: "PAGINA_FEEDLOT",
        payload:pagina
    }    
    
}


export function permitirVariaciones(e) {
	console.log("permitirVariaciones");
    return {
        type: "PERMITIDO_FEEDLOT",
        payload:e.target.checked
    }
}