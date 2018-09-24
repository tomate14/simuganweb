import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-diferidos.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 

class Diferido extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false
	}
		
    this.toggle = this.toggle.bind(this);
    //this.generarInputs = this.generarInputs.bind(this);
    //this.setDropdownSelected = this.setDropdownSelected.bind(this);
  } 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
  

	render(){
		const diferidos = this.props.diferidos;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {diferidos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				
					<Form>
						        <FormGroup row>
						        	
						          	<Col sm="4">
							          	<Picker 
											id="Pasturas"
							                opciones         = {this.props.diferidos.nombrePasturas}
									        dropDownSelected = {this.props.diferidos.dropdownSelected}
									        funcSelected     = {this.props.modificarDropdownSelected}/>
									</Col>
									<Label for="Pasturas" sm={4}> Selección: {this.props.diferidos.nombrePasturas[this.props.diferidos.dropdownSelected]} </Label>
						        </FormGroup>
						    </Form>
				<Row>
					 <Table>
					 	<thead>
				          <tr>
				            <th colSpan = "2" scope = "colgroup">Valores de Simulación</th>
				          </tr>
				          <tr>
				            <th>Digestibilidad</th>
				            <th>Rendimiento</th>
				          </tr>
				        </thead>
				        <tbody>
				          <tr>
				            <td>{this.props.diferidos.valoresSimulacion[this.props.diferidos.dropdownSelected].digestValue}</td>
				            <td>{this.props.diferidos.valoresSimulacion[this.props.diferidos.dropdownSelected].yieldValue}</td>
				          </tr>
				        </tbody>
				      </Table>
				</Row>
				<Row>
				   <Col>
				   		<p>Digestibilidad del Diferido[50-90]% </p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.diferidos.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}/>
				   </Col>
				   <Col>
				   		<p>Rinde del Diferido [15-200] /ha</p>
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.diferidos.rindeVariaciones}
				   					 cantVariaciones = {this.props.diferidos.cantVariaciones} 
				   					 seccionElegida = {this.props.diferidos.dropdownSelected}/>
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        diferidos: state.diferidos
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Diferido);