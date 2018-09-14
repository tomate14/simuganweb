const initState = {
    permitido:false,
    cantVariaciones:1,
    inputsPorVariacion:12,
    paginaActual:1,
    pagvariaciones:[]
};

function iniciarArregloState(state=initState,valor=1){
    
    let arrayGeneral = [];
    if(valor != 0){
        for(let index = 0; index< valor; index++){
            let arrayAux = [];
            for(let i = 0; i < state.inputsPorVariacion; i++){
                let nombre = "mes"+i.toString();
                let value  = 0;
                let ObjetoMes = {}
                ObjetoMes.valor = value;
                ObjetoMes.mes   = nombre;
                arrayAux.push(ObjetoMes);
            }  
            let ObjetoArray = {}
            ObjetoArray.variacion   = index;
            ObjetoArray.variaciones   = arrayAux;  
            arrayGeneral.push(ObjetoArray);
        }   
    }    
    return arrayGeneral;
};
/* 
    Generacion del estado de los recursos forrajeros
*/
export default function (state=initState, action) {
    console.log("REDUCER FORRAJERO");
     switch (action.type){
        case("PERMITIDO"):
            console.log("Permitido"+action.payload);
            return {
                ...state,
                permitido : action.payload
            };
            break;
        case("CANTIDAD"):            
            let valor = parseInt(action.payload);
            //Sin redondeo de decimales, siempre parte inferior
             return {
                ...state,
                cantVariaciones : valor,
                pagvariaciones : iniciarArregloState(state,valor),
                paginaActual : 1
            };
            break;
        case("PAGINA"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
     }
    return state;
}
/*


export default function (state =initState, action) {
    console.log("cant variaciones del reducer forrajero: ");

    switch (action.type) {
        case "CANTVARIACIONES":
            console.log("cant variaciones del reducer forrajero: "+state.pagvariaciones);
            return {
                ...state,
                cantVariaciones : state.cantVariaciones,
                pagvariaciones: iniciarArregloState(state.cantVariaciones)
            };
        case "PERMITIDO":
            console.log("permitido del reducer forrajero: "+state.pagvariaciones);
            switch(action.payload){
                case "true":
                    return {
                        ...state,
                        permitido : "true"
                    }
                    break;
                case "false":
                    return {
                        ...state,
                        permitido : "false"
                    }
                    break;
            }
            
        default:
            return state
    }
}*/