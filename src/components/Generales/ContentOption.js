import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {  Row, Col } from 'reactstrap'

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	constructor(props){
		super(props);
		this.estaHabilitado = 'true';
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
		return (	<div className="container-fluid">
						<Row className="RowCheckbox">
							<Col>		                
			                  	<input type="checkbox" className="checkbox" enable={this.estaHabilitado}/>		
			                  	<h5 className="textLabel"> Permitir el uso de este parametro para variar</h5>
			                </Col>
						</Row>
						<Row className="RowCantidad">
							<Col>
								<input type="number" className="checkbox" id="cantVariation" onChange={this.handleOnChangeValue} value={this.state.cantidadVariaciones}/>
								<h5 className="textLabel"> Cantidad de variaciones a realizar</h5>
							</Col>
						</Row>
					</div>
			);
	}

}

export default ContentOption;