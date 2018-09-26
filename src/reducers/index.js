import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
import diferidos from './reducer-diferidos';
import potreros from './reducer-potreros';
import invernada from './reducer-invernada';


 
const allReducers = combineReducers({
    recursosforrajeros: recursosforrajeros,
    diferidos : diferidos,
    potreros : potreros,
    invernada : invernada
});

export default allReducers;