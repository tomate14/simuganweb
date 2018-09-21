import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
import diferidos from './reducer-diferidos';

//Cargamos el xml general
// import simulacioninicial from './reducer-simulacioninicial';
 
const allReducers = combineReducers({
    recursosforrajeros: recursosforrajeros,
    diferidos : diferidos//,
    //simulacioninicial : simulacioninicial
});

export default allReducers;