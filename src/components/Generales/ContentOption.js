import React, {Component} from 'react'; 
import PropTypes from 'prop-types';

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	constructor(props){
		super(props);
		this.estaHabilitado = true;
	};

	render(){
		//Relleno los months de un vector de datos 
		return (
				<div>
					<div>
						<input type="checkbox" className="checkbox" id="cbox2" value="second_checkbox"  enable={this.estaHabilitado}/>
						<h5> Permitir el uso de este parametro para variar</h5>
					</div>
					<div>
						<input type="number" className="number" id="cantVariation" value="1"/>
						<h5> Cantidad de variaciones a realizar</h5>
					</div>
				</div>
			);
	}

}

export default ContentOption;