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
    let valor    = parseInt(e.target.value);
    let payload  = e.target.id 
    return {
        type:"CONF-GENERALES_MOB",
        payload: payload,
        index: index,
        valor: valor

    }
}

export function modificarPasturaGeneral(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"PASTURAS-GENERALES_MOB",
        payload: "MesesGenerales",
        index: index,
        valor: value

    }
}

export function modificarGranoGeneral(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"GRANOS-GENERALES_MOB",
        payload: "MesesGenerales",
        index: index,
        valor: value

    }
}

export function modificarEnsilajeGeneral(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"ENSILAJE-GENERALES_MOB",
        payload: "MesesGenerales",
        index: index,
        valor: value

    }
}

export function modificarRastrojoGeneral(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 
    return {
        type:"RASTROJO-GENERALES_MOB",
        payload: "MesesGenerales",
        index: index,
        valor: value

    }
}

export function modificarDiferidoGeneral(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 
    return {
        type:"DIFERIDO-GENERALES_MOB",
        payload: "MesesGenerales",
        index: index,
        valor: value

    }
}

/*
    FUNCIONES DE WEANING
*/

export function modificarWeaningPastura(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"PASTURAS-WEANING_MOB",
        payload: "MesesWeaning",
        index: index,
        valor: value

    }
}

export function modificarWeaningGrano(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"GRANOS-WEANING_MOB",
        payload: "MesesWeaning",
        index: index,
        valor: value

    }
}

export function modificarWeaningEnsilaje(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 

    return {
        type:"ENSILAJE-WEANING_MOB",
        payload: "MesesWeaning",
        index: index,
        valor: value

    }
}

export function modificarWeaningRastrojo(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 
    return {
        type:"RASTROJO-WEANING_MOB",
        payload: "MesesWeaning",
        index: index,
        valor: value

    }
}

export function modificarWeaningDiferido(id,pagina,valor){
    //let index    = parseInt(e.target.name);
    let value    = valor;
    let index      = id 
    return {
        type:"DIFERIDO-WEANING_MOB",
        payload: "MesesWeaning",
        index: index,
        valor: value

    }
}

export function modificarSubMobs(e){
    //let index    = e.target.name;
    let indexSubMob = parseInt(e.target.id);
    let index = parseInt(e.target.name);
    let valor = parseInt(e.target.value);
    return {
        type:"SUBMOBS_MOB",
        payload: "SubMobs",
        valor: valor,
        index : index,
        indexSubMob : indexSubMob,

    }
}

export function permitirDiferidos(valor){
    return {
        type:"DIFERIDO-ENABLE_MOB",
        payload: "diferidosEnable",
        valor: valor

    }
    
}

export function permitirRastrojo(valor){
    return {
        type:"RASTROJO-ENABLE_MOB",
        payload: "rastrojoEnable",
        valor: valor

    }
}

export function permitirDiferidosWeaning(valor){ 
    return {
        type:"DIFERIDO-WEANING-ENABLE_MOB",
        payload: "diferidosWeaningEnable",
        valor: valor

    }

}

export function permitirRastrojoWeaning(valor){ 
    return {
        type:"RASTROJO-WEANING-ENABLE_MOB",
        payload: "rastrojoWeaningEnable",
        valor: valor

    }
}