import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {  Row, Col } from 'reactstrap'

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	ponerValor(numero){
		if(numero == 0){
			return "";
		}else
			return numero
	}
	render(){
		
		return (	<div className="container-fluid">
						<Row className="RowCheckbox">
							<Col>
			                  	<input type="checkbox" className="checkbox" 
			                  	       onClick={this.props.funcPermitir} 
			                  	       defaultChecked = {this.props.state.permitido} />		
			                  	<h5 className="textLabel"> Permitir el uso de este parametro para variar</h5>
			                </Col>
						</Row>
						<Row className="RowCantidad">
							<Col>								
							    <input type="number" className="checkbox" id="cantVariation" 
							           onChange={this.props.funcVariaciones}
							           value={ this.ponerValor(this.props.state.cantVariaciones)} 
							           />							    
								<h5 className="textLabel"> Cantidad de variaciones a realizar</h5>
							</Col>
						</Row>
					</div>
			);
	}

}

export default ContentOption
