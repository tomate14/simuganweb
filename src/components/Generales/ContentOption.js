import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {  Row, Col } from 'reactstrap'
import { connect } from 'react-redux';

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	/*constructor(props){
		super(props);
		this.state = props.state;
		//this.func  = props.func1;
		this.funcPermitir    = props.funcPermitir;
		this.funcVariaciones = props.funcVariaciones;
		this.handlerChangeInput = this.handlerChangeInput.bind(this);
		
	};*/

	handlerChangeInput(e){
		this.setState({cantVariaciones : parseInt(e.target.value)});
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
							           onBlur={this.props.funcVariaciones} 
							           value={this.props.state.cantVariaciones}/>							    
								<h5 className="textLabel"> Cantidad de variaciones a realizar</h5>
							</Col>
						</Row>
					</div>
			);
	}

}

export default ContentOption
