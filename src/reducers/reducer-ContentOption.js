

const initialState = {
    recursosforrajeros:{
        permitido:true,
        cantVariaciones:10,
        pagvariaciones:[]
    }
};

export default function reducer(state = initialState, action = {}) {
    console.log("reducer ContentOptions"+action.type);
    switch (action.type) {
        case "cantidad":
            console.log(state.recursosforrajeros);
            return {
                ...state,
                cantVariaciones : state.cantVariaciones
            };
        default:
            return state
    }
}