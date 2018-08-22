import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes';

//Estilos
import './index.css';

render(<Router> 
			<AppRoutes />
	   </Router>, document.getElementById('root')); 
