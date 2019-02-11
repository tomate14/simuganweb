import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-diferidos.js';


//bootstrap
import {Button,Popover,PopoverHeader,PopoverBody,Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//estilos
import './css/index.css'; 

import ContentOption from '../Generales/ContentOption'; 

class Diferido extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false,
			popoverOpen : false
	}
		
    //this.generarInputs = this.generarInputs.bind(this);
    //this.setDropdownSelected = this.setDropdownSelected.bind(this);
  } 


  generarPasturas(){
  	var pasturas = ["Sorgo","pastura 2", "pastura 3"];
  	var rows = [];
  	for(var i = 0;i < pasturas.length;i++){
  		rows[i] = pasturas[i];
  	}
  	return pasturas;
  }



  setDropdownSelected(){
  	//este arreglo se debe cargar desde el xml parseado
  	  	var pasturas = ['Sorgo','pastura 2', 'pastura 3'];
 		let aux =pasturas[this.props.diferidos.dropdownSelected] 
  	return aux;
  }

  generarPantalla(diferidos){
  	if((diferidos.permitido)&&(diferidos.cantVariaciones>0)){
  		return(<Container>
					<Form>
						        <FormGroup row>
						        	
						          	<Col id= "divPicker" sm="4">
							          	<Picker 
											id="Diferidos"
							                opciones         = {this.props.diferidos.nombrePasturas}
									        dropDownSelected = {this.props.diferidos.dropdownSelected}
									        funcSelected     = {this.props.modificarDropdownSelected}/>
									</Col>
									<Label for="Pasturas" sm={4}><font size = "5"><b> Selección: </b> {this.props.diferidos.nombrePasturas[this.props.diferidos.dropdownSelected]}</font> </Label>
						        </FormGroup>
						    </Form>

				<Row>
					<Col id="simulationValues">
						<h5>Digestibilidad del Diferido[50-90]% </h5>
				   		<h5><b>Carga simulación inicial: [{this.props.diferidos.valoresSimulacion[this.props.diferidos.dropdownSelected].digestValue}]</b></h5>
					</Col>
					<Col id = "simulationValues">
						<h5>Rinde del Diferido [15-200] /ha</h5>
				   		<h5><b>Carga simulación inicial: [{this.props.diferidos.valoresSimulacion[this.props.diferidos.dropdownSelected].yieldValue}]</b></h5>
					</Col>
				</Row>
				<Row>
				   <Col>
				   		
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.diferidos.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}
				   					 min = {50}
				   					 max = {90}
				   					 />
				   </Col>
				   <Col>
				   		
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.diferidos.rindeVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}
				   					 min = {15}
				   					 max = {200}
				   					 />
				   </Col>
			   </Row>
			  </Container>);
  		}
	}
  
	render(){
		const diferidos = this.props.diferidos;
		return(
			<div>
				<Row className="parameterTitle">
					<Col sm={6}>
						<div className="lineTitle"></div>
					</Col>
					<Col sm={6}>
					<h1 className="titulo">Digestibilidad y Rinde de cada Diferido</h1>
					</Col>
				</Row>
				<Row>
					<Col><ContentOption state = {diferidos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				{this.generarPantalla(diferidos)}
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        diferidos: state.diferidos
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Diferido);