import React, { Component } from 'react';

import SingleInput from '../Generales/SingleInput'
import ContentOption from '../Generales/ContentOption'
import Picker from '../Generales/Picker'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup, Label} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-potreros.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Potreros extends Component {

	constructor(props){
		super(props);
		this.state = {
			cantidadVariaciones : 1
		}
	}

	render(){
		const potreros = this.props.potreros;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {potreros} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				<Form>
			        <FormGroup row>
			        	
			          	<Col sm="4">
				          	<Picker 
								id="Pasturas"
				                opciones         = {potreros.nombrePotreros}
						        dropDownSelected = {potreros.dropDownSelected}
						        funcSelected     = {this.props.modificarDropdownSelected}/>
						</Col>
						<Label for="Pasturas" sm={4}> Selección: {potreros.nombrePotreros[potreros.dropDownSelected]} </Label>
			          
			        </FormGroup>
			    </Form>
				<Row>
					
				   <Col>
				   		<p>Digestibilidad del Diferido[50-90]% </p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.potreros.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.potreros.cantVariaciones} 
				   					 seccionElegida = {this.props.potreros.dropDownSelected}/>
				   </Col>
				   <Col>
				   		<p>Rinde del Diferido [15-200] /ha</p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.potreros.rindeVariaciones}
				   					 cantVariaciones = {this.props.potreros.cantVariaciones} 
				   					 seccionElegida = {this.props.potreros.dropDownSelected}/>
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        potreros: state.potreros
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Potreros);

