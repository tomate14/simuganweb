import React, { Component } from 'react';

import SingleInput from '../Generales/SingleInput'
import ContentOption from '../Generales/ContentOption'
import Picker from '../Generales/Picker'
import Tabla from '../Generales/Tabla'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import {Button,Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup, Label} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-potreros.js';
import {generarSalidaRest} from '../../finalizar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


//Estilos
import './css/index.css'; 

class Potreros extends Component {

	constructor(props){
		super(props);
		this.state = {
			cantidadVariaciones : 1
		}
	}
	/*
	<Row>
					    	<Col sm={3}>
						   		
						    </Col>
						    <Col sm={6}>
						   		<Tabla 
							 			texto1 = {"Dias desde la siempre antes de realizar el primer pastoreo"}							 								 			
							 			valor1 = {this.props.potreros.valoresSimulacion[this.props.potreros.dropDownSelected].digestValue}
							 />	
						    </Col>
							 
							 <Col sm={3}>
						   		
						    </Col>
						</Row>
	*/
	generarContenido(potreros){
		if(potreros.permitido){
			if(potreros.cantVariaciones > 0){
				return (
					<div>					
						<Row>
							<br/>
						</Row>
						<Form>
					        <FormGroup row>					        	
					          	<Col sm="4" id="divPicker">
						          	<Picker 
										id="Potreros"
						                opciones         = {potreros.nombrePotreros}
								        dropDownSelected = {potreros.dropDownSelected}
								        funcSelected     = {this.props.modificarDropdownSelected}/>
								</Col>
								<Label for="Pasturas" sm={4}> <font size="5"><b>Selección:</b> {potreros.nombrePotreros[potreros.dropDownSelected]}</font> </Label>
					          
					        </FormGroup>
					    </Form>
					    <Row id = "simulationValues">
					    	<Col>
					    		<h5>Días desde la siembra antes de realizar el primer pastoreo [60-100] </h5>
						   		<h5><b>Carga simulación inicial: [{this.props.potreros.valoresSimulacion[this.props.potreros.dropDownSelected].digestValue}]</b></h5>
						   	</Col>
					    </Row>
						<Row>
						    <Col sm={12}>
						   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
						   					 arrayVariaciones = {this.props.potreros.digestibilidadVariaciones}
						   					 cantVariaciones = {this.props.potreros.cantVariaciones} 
						   					 seccionElegida = {this.props.potreros.dropDownSelected}
						   					 min = {60}
						   					 max = {100}
						   					 />
						    </Col>
						    

					   </Row>
					</div>
			);
			}
		}
		
	}
	render(){
		const potreros = this.props.potreros;
	
		return(

			<Container>
				<Row className="parameterTitle">
					<Col sm={6}>
						<div className="lineTitle"></div>
					</Col>
					<Col sm={6}>
						<h1 className="titulo">Has de cada potrero </h1>
					</Col>
				</Row>
				<Row>
					<Col><ContentOption state = {potreros} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				
			    {this.generarContenido(potreros)}

			    <Button color="primary" onClick={generarSalidaRest}>Finalizar</Button>
			  </Container>
		);
		
		
	}
}

function mapStateToProps(state){
    return {
        potreros: state.potreros
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Potreros);

