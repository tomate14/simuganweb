import React, { Component } from 'react';

//Componentes Generales
import SingleInput from '../Generales/SingleInput'
import ContentOption from '../Generales/ContentOption'
import Picker from '../Generales/Picker'
import ChildDestete from  './ChildDestete'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup, Label, Button} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected, modificarPagina,modificarInputValueDestete,modificarRadioSeleccion,modificarDropdownInput} from '../../actions/action-destete.js';

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
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
	}

	handleClickUp(){
		if(this.props.destete.paginaActual < this.props.destete.cantVariaciones){
			this.props.modificarPagina(this.props.destete.paginaActual+1);	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(){
		if(this.props.destete.paginaActual > 1){
			this.props.modificarPagina(this.props.destete.paginaActual-1);	
		}
	}



	generarContenido(destete){
		if(destete.permitido){
			if(destete.cantVariaciones > 0){
				return (
					<Container>					
						<Row xs={12}>
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
						    	<ChildDestete vector={destete.pagvariaciones[destete.dropDownSelected][destete.paginaActual-1].Destete} 
					                textos          = {destete.textos}
					                opciones        = {destete.nombresPicker}
					                seleccionDrop   = {destete.pagvariaciones[destete.dropDownSelected][destete.paginaActual-1].Destete[2]}
					                funcDropSelect  = {this.props.modificarDropdownInput}
					                funcInput       = {this.props.modificarInputValueDestete}
					                funcRadio       = {this.props.modificarRadioSeleccion}
					                pagina          = {destete.paginaActual}
					                titulo          = " "/>
						    </Col>
						
					        <Col md={2}/>
						</Row>
					</Container>
			);
			}
		}
		
	}
	render(){
		const destete = this.props.destete;
	
		return(

			<div>
					<div>
						<Row className="parameterTitle">
							<Col sm={6}>
								<div className="lineTitle"></div>
							</Col>
							<Col sm={6}>
								<h1 className="titulo">Configuración de destete precoz</h1>
							</Col>
						</Row>
						<Row>
							 <ContentOption state = {destete} 
											funcPermitir = {this.props.permitirVariaciones}
											funcVariaciones = {this.props.modificarVariaciones}/>
						</Row>
					</div>
	 
			    {this.generarContenido(destete)}
			  </div>
		);
		
		
	}
}

function mapStateToProps(state){
    return {
        destete: state.destete
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones        : permitirVariaciones,
    	                       modificarVariaciones       : modificarVariaciones,
    	                       modificarDropdownSelected  : modificarDropdownSelected,
    	                       modificarPagina            : modificarPagina,
    	                       modificarInputValueDestete : modificarInputValueDestete,
    	                       modificarRadioSeleccion    : modificarRadioSeleccion,
    	                       modificarDropdownInput     : modificarDropdownInput}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Destete);

