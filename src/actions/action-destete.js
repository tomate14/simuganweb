export function permitirVariaciones(e){
    console.log("permitirVariaciones-destete");
    return{
        type : "PERMITIDO_DESTETE",
        payload: e.target.checked
    }       
}

export function modificarVariaciones(e){
    console.log("modificarVariaciones-diferido");
    return{
        type: "CANTIDAD_DESTETE",
        payload: e.target.value
    }
}

export function modificarDropdownSelected(e){
    console.log("modificarDropdownSelected-diferido");
    return{
        type: "MODIFYDROPDOWN_DESTETE",
        payload: e.target.id
    }
}

export function modificarInputValueDigestibilidad(e){
    console.log("modificarInputValueDigestibilidad-diferido");
    return{
        type: "UPDATE-VALUE-DESTETE",
        index: e.target.id,
        value : e.target.value
    }
}

