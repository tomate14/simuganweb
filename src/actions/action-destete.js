
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

export function modificarDropdownInput(e){
    console.log("modificarDropdownSelected-diferido");
    return{
        type: "MODIFYDROPDOWNINPUT_DESTETE",
        payload: e.target.id
    }
}

export function modificarInputValueDestete(e){
    console.log("modificarInputValueDigestibilidad-diferido");
    return{
        type: "UPDATE-VALUE-DESTETE",
        //Lugar del arreglo a modificar
        index: parseInt(e.target.id),
        value : parseInt(e.target.value)
    }
}

export function modificarPagina(pagina) {    
    return {
        type: "PAGINA_DESTETE",
        payload:pagina
    }    
    
}

export function modificarRadioSeleccion(idRadioTrue,idRadioFalse ) {    
    return {
        type: "RADIO_DESTETE",
        indextrue:idRadioTrue,
        indexfalse:idRadioFalse

    }    
    
}

