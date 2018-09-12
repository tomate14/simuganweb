import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
 
const allReducers = combineReducers({
    recursosforrajeros: recursosforrajeros
});

export default allReducers;