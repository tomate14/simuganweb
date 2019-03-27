
export function permitirVariaciones(e){
    return{
        type : "PERMITIDO_DESTETE",
        payload: e.target.checked
    }       
}

export function modificarVariaciones(e){
    return{
        type: "CANTIDAD_DESTETE",
        payload: e.target.value
    }
}

export function modificarDropdownSelected(e){
    return{
        type: "MODIFYDROPDOWN_DESTETE",
        payload: e.target.id
    }
}

export function modificarDropdownInput(e){
    return{
        type: "MODIFYDROPDOWNINPUT_DESTETE",
        payload: e.target.id
    }
}

export function modificarInputValueDestete(e){
    return{
        type: "UPDATE-VALUE-DESTETE",
        //Lugar del arreglo a modificar
        index: parseInt(e.target.id),
        value : parseFloat(e.target.value)
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

