export function permitirVariaciones(e){
    console.log("permitirVariaciones-diferido");
    return{
        type : "PERMITIDO_POTREROS",
        payload: e.target.checked
    }       
}

export function modificarVariaciones(e){
    console.log("modificarVariaciones-diferido");
    return{
        type: "CANTIDAD_POTREROS",
        payload: e.target.value
    }
}

export function modificarDropdownSelected(e){
    console.log("modificarDropdownSelected-diferido");
    return{
        type: "MODIFYDROPDOWN_POTREROS",
        payload: e.target.id
    }
}

export function modificarInputValueDigestibilidad(e){
    console.log("modificarInputValueDigestibilidad-diferido");
    return{
        type: "UPDATE-VALUE-DIGEST_POTREROS",
        index: e.target.id,
        value : e.target.value
    }
}


export function modificarInputValueRinde(e){
    console.log("modificarInputValueRinde-diferido");
    return{
        type: "UPDATE-VALUE-RINDE_POTREROS",
        index: e.target.id,
        value : e.target.value
    }
}