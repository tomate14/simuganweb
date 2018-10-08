import React, { Component } from 'react';

//Componentes Generales
import SingleInput from '../Generales/SingleInput'
import ContentOption from '../Generales/ContentOption'
import Picker from '../Generales/Picker'
import ChildDestete from  './ChildDestete'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup, Label, Button} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected} from '../../actions/action-destete.js';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';

//Imagenes
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


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
					    <Row xs={12}>
							<Col md={4}/>
							<Col xs={1} className="divFlechas">					
								<Button outline color="secondary" onClick={this.handleClickDown}>
									<FaAngleLeft />
								</Button>{' '}
								
							</Col>
							<Col xs={2}>
								<p className="labelPagina"><b><i><font size="3">Pagina: {destete.paginaActual}</font></i></b></p>
							</Col>
							<Col xs={1}className="divFlechas">
								<Button outline color="secondary" onClick={this.handleClickUp}>
									<FaAngleRight />
								</Button>{' '}
								
							</Col>
							<Col md={4}/>
						</Row>
							
						<Row md={12}>
						    <Col md={2}/>
						    <Col md={8}>
						    	<ChildDestete vector={destete.pagvariaciones[destete.dropDownSelected][destete.paginaActual-1].Completion} 
					                textos = {destete.textos} 
					                pagina    = {destete.paginaActual}
					                titulo="Salida/Venta"/>
						    </Col>
						
					        <Col md={2}/>
						</Row>
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
