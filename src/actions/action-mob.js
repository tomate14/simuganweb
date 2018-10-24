export function permitirVariaciones(e){
    console.log("permitirVariaciones-mob");
    return{
        type : "PERMITIDO_MOB",
        payload: e.target.checked
    }       
}

export function modificarVariaciones(e){
    console.log("modificarVariaciones-mob");
    return{
        type: "CANTIDAD_MOB",
        payload: e.target.value
    }
}

export function modificarDropdownSelected(e){
    console.log("modificarDropdownSelected-diferido");
    return{
        type: "MODIFYDROPDOWN_MOB",
        payload: e.target.id
    }
}

export function modificarPagina(pagina) {    
    return {
        type: "PAGINA_MOB",
        payload:pagina
    }    
    
}

export function modificarConfGenerales(e){
    let index    = parseInt(e.target.name);
    let valor = parseInt(e.target.value);
    return {
        type:"CONF-GENERALES_MOB",
        index: index,
        valor: valor

    }
}