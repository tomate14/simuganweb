import React, {Component} from 'react'; 
import PropTypes from 'prop-types';

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	constructor(props){
		super(props);
		this.estaHabilitado = true;
		this.state = props.state;
		this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
	};

	handleOnChangeValue(e){
		this.setState({
			cantidadVariaciones  :e.target.value
		});
	}
	render(){
		//Relleno los months de un vector de datos 
		console.log(this.state.cantidadVariaciones);
		return (
				<div>
					<div>
						<input type="checkbox" className="checkbox" id="cbox2" value="second_checkbox"  enable={this.estaHabilitado}/>
						<h5> Permitir el uso de este parametro para variar</h5>
					</div>
					<div>
						<input type="number" className="checkbox" id="cantVariation" onChange={this.handleOnChangeValue} value={this.state.cantidadVariaciones}/>
						<h5> Cantidad de variaciones a realizar</h5>
					</div>
				</div>
			);
	}

}

export default ContentOption;