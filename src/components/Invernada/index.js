import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import SingleInputArray from '../Generales/SingleInputArray';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueVacasEngorde,modificarInputValueVaquillona} from '../../actions/action-invernada.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 

class Invernada extends Component {

	generarVariaciones(invernada){
		if(invernada.permitido){
			if(invernada.cantVariaciones > 0){
				return(
					<Container>
					<Row>
					<Col id = "simulationValues">
						<h5>Valor peso de venta Vaquillona [150-650] kg</h5>
					   	<h5><b>Carga simulacin inicial: [{this.props.invernada.valoresSimulacion[0].vaquillonaValue}]</b></h5>	
					</Col>
					<Col id = "simulationValues">
						<h5>Valor peso de venta Nobillo[150-650]% </h5>
					   	<h5><b>Carga simulacin inicial: [{this.props.invernada.valoresSimulacion[0].nobilloValue}]</b></h5>
					</Col>
					</Row>
					<Row>
					   <Col>	
					   		<SingleInputArray funcModificar = {this.props.modificarInputValueVaquillona}
					   					      arrayVariaciones = {this.props.invernada.VaquillonaVariaciones}
					   					      cantVariaciones = {this.props.invernada.cantVariaciones}
					   					      titulo = "VaqInvernada"
					   					      min = {150}
					   					      max = {650}
					   					      />
					   </Col>
					   <Col>				   		
					   		<SingleInputArray funcModificar = {this.props.modificarInputValueVacasEngorde}
					   					      arrayVariaciones = {this.props.invernada.nobillosVariaciones}
					   					      cantVariaciones = {this.props.invernada.cantVariaciones}
					   					      titulo = "NobilloInvernada"
					   					      min = {150}
					   					      max = {650}
					   					      />
					   </Col>
				   </Row>
				   </Container>
				);
			}
		};
	}
	render(){
		const invernada = this.props.invernada;
		return(
			<div>
					<Row className="parameterTitle">
						<Col sm={6}>
							<div className="lineTitle"></div>
						</Col>
						<Col sm={6}>
						<h1 className="titulo">Venta de Invernada</h1>
						</Col>
					</Row>
					<Row>
						<Col><ContentOption state = {invernada} 
											funcPermitir = {this.props.permitirVariaciones}
											funcVariaciones = {this.props.modificarVariaciones}/></Col>
					</Row> 
					{this.generarVariaciones(invernada)}
		    </div>

		);
	}
}

function mapStateToProps(state){
    return {
        invernada: state.invernada
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueVacasEngorde:modificarInputValueVacasEngorde,modificarInputValueVaquillona : modificarInputValueVaquillona}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Invernada);