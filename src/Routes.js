import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes de Rutas
import App                from './components/App'
import Diferido           from './components/Diferido'
import Ensilaje           from './components/Ensilaje'
import Feedlot            from './components/Feedlot'
import Invernada          from './components/Invernada'
import Potreros           from './components/Potreros'
import Rastrojo           from './components/Rastrojo'
import RecursosForrajeros from './components/RecursosForrajeros'
import Mobs				  from './components/Mobs'



const AppRoutes = () => 
	<App>
		<Switch>
			<Route path="/Diferido"           component={Diferido} />
			<Route path="/Ensilaje"           component={Ensilaje} />
			<Route path="/Feedlot"            component={Feedlot} />
			<Route path="/Invernada"          component={Invernada} />
			<Route path="/Potreros"           component={Potreros} />
			<Route path="/Rastrojo"           component={Rastrojo} />
			<Route path="/RecursosForrajeros" component={RecursosForrajeros} />
			<Route path="/mobs"				  component={Mobs} />

		</Switch>

	</App>;

export default AppRoutes;