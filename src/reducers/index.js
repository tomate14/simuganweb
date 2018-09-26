import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
import diferidos from './reducer-diferidos';
import potreros from './reducer-potreros';
import invernada from './reducer-invernada';
import rastrojos from './reducer-rastrojos';
import ensilaje from './reducer-ensilaje';



 
const allReducers = combineReducers({
    recursosforrajeros: recursosforrajeros,
    diferidos : diferidos,
    potreros : potreros,
    invernada : invernada,
    rastrojos : rastrojos, 
    ensilaje : ensilaje
});

export default allReducers;