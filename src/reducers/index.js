import {combineReducers} from 'redux';
import recursosforrajeros from './reducer-recursosforrajeros';
import diferidos from './reducer-diferidos';
import potreros from './reducer-potreros';
import invernada from './reducer-invernada';
import rastrojos from './reducer-rastrojos';
import ensilaje from './reducer-ensilaje';
import feedlot from './reducer-feedlot';
import mobs from './reducer-mobs';



 
const allReducers = combineReducers({
    recursosforrajeros : recursosforrajeros,
    diferidos          : diferidos,
    potreros           : potreros,
    invernada          : invernada,
    rastrojos          : rastrojos, 
    ensilaje           : ensilaje,
    feedlot            : feedlot,
    mobs               : mobs
});

export default allReducers;