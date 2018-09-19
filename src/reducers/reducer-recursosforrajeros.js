const initState = {
    permitido:false,
    cantVariaciones:1,
    inputsPorVariacion:12,
    paginaActual:1,
    pagvariaciones:[]
};

function iniciarArregloState(state=initState,valor=1){
    
    let arrayGeneral = [];
    if(valor > 0){
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
           
            arrayGeneral.push(arrayAux);
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
        case("PERMITIDO_RECURSOSFORRAJEROS"):
            console.log("Permitido"+action.payload);
            return {
                ...state,
                permitido : action.payload
            };
            break;
        case("CANTIDAD_RECURSOSFORRAJEROS"):            
            let valor = parseInt(action.payload);
            //Sin redondeo de decimales, siempre parte inferior
             return {
                ...state,
                cantVariaciones : valor,
                pagvariaciones : iniciarArregloState(state,valor),
                paginaActual : 1
            };
            break;
        case("PAGINA_RECURSOSFORRAJEROS"):
            let pagina = action.payload;
            return{
                ...state,
                paginaActual : pagina
            }
            break;
        case("VALORVARIACION_RECURSOSFORRAJEROS"):
            
        return{
            ...state,
            pagvariaciones: state.pagvariaciones.map(
             (content, i) => i == action.pagina ? state.pagvariaciones[action.pagina].map(
                 (content,j) => j == action.posicion ? {...content, valor: action.valor}
                 : content
                 )                             

             : content
             )
        }
    }
    return state;
}
