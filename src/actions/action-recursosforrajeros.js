
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
        type: "CANTIDAD",
        payload:e.target.value
    }    
    
}

export function permitirVariaciones(e) {
	console.log("permitirVariaciones");
    return {
        type: "PERMITIDO",
        payload:e.target.checked
    }
}

