
/*export const permitirVariaciones = (e) => {
    console.log("PERMITIR VARIACION");
    console.log(e);
    return {
        type: "PERMITIDO",
        payload:e.target.checked
    }
};*/


export function modificarVariaciones(e) {    
    return {
        type: "CANTIDAD_RECURSOSFORRAJEROS",
        payload:e.target.value
    }    
    
}



export function InputVariacionValor(id, pagina, valor) {    
    return {
        type: "VALORVARIACION_RECURSOSFORRAJEROS",
        posicion:id,
        pagina:pagina,
        valor:parseInt(valor)
    }    
    
}

export function modificarPagina(pagina) {    
    return {
        type: "PAGINA_RECURSOSFORRAJEROS",
        payload:pagina
    }    
    
}


export function permitirVariaciones(e) {
	console.log("permitirVariaciones");
    return {
        type: "PERMITIDO_RECURSOSFORRAJEROS",
        payload:e.target.checked
    }
}


