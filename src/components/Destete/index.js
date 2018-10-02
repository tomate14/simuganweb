import React, { Component } from 'react';

import SingleInput from '../Generales/SingleInput'
import ContentOption from '../Generales/ContentOption'
import Picker from '../Generales/Picker'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup, Label} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected} from '../../actions/action-destete.js';
import 'bootstrap/dist/css/bootstrap.min.css';


//Estilos
//import './css/index.css'; 

class Destete extends Component {

	constructor(props){
		super(props);
		this.state = {
			cantidadVariaciones : 1
		}
	}

	generarContenido(destete){
		if(destete.permitido){
			if(destete.cantVariaciones > 0){
				return (
					<div>					
						<Row>
							<br/>
						</Row>
						<Form>
					        <FormGroup row>					        	
					          	<Col sm="4" id="divPicker">
						          	<Picker 
										id="Mobs"
						                opciones         = {destete.nombreMobs}
								        dropDownSelected = {destete.dropDownSelected}
								        funcSelected     = {this.props.modificarDropdownSelected}/>
								</Col>
								<Label for="Mobs" sm={4}> <font size="5"><b>Selección:</b> {destete.nombreMobs[destete.dropDownSelected]}</font> </Label>
					          
					        </FormGroup>
					    </Form>
					    
					</div>
			);
			}
		}
		
	}
	render(){
		const destete = this.props.destete;
	
		return(

			<Container>
				<Row id="contentoption">
					<Col><ContentOption state = {destete} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				
			    {this.generarContenido(destete)}
			  </Container>
		);
		
		
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        destete: state.destete
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Destete);

