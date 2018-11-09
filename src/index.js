import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

//Crear el store
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configStore';


//Estilos
import './index.css';

//Config Store
const store = configureStore();



render(
	<Provider store={store}>
		<Router> 
			<AppRoutes />
	   </Router>
	</Provider>, document.getElementById('root')); 

export default store;
