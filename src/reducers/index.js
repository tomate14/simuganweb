import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
import diferidos from './reducer-diferidos';
import potreros from './reducer-potreros';


 
const allReducers = combineReducers({
    recursosforrajeros: recursosforrajeros,
    diferidos : diferidos,
    potreros : potreros
});

export default allReducers;