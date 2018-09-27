export function modificarVariaciones(e) {    
    return {
        type: "CANTIDAD_FEEDLOT",
        payload:e.target.value
    }    
    
}



/*export function InputVariacionValor(id, pagina, valor,seleccion) {    
    return {
        type: "VALORVARIACION_FEEDLOT",
        posicion:id,
        pagina:pagina,
        dropdownSeleccion:seleccion,
        valor:parseInt(valor)
    }    
    
}*/

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