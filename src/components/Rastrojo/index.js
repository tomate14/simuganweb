import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-rastrojos.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 



class Rastrojo extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false
	}
		
    this.toggle = this.toggle.bind(this);
  } 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generarPantalla(rastrojos){
  	if((rastrojos.permitido)&&(rastrojos.cantVariaciones>0)){
  		return(<Container>
					<Form>
						        <FormGroup row>
						        	
						          	<Col id = "divPicker" sm="4">
							          	<Picker 
											id="Pasturas"
							                opciones         = {this.props.rastrojos.nombreRastrojos}
									        dropDownSelected = {this.props.rastrojos.dropdownSelected}
									        funcSelected     = {this.props.modificarDropdownSelected}/>
									</Col>
									<Label for="Pasturas" sm={4}><font size = "5"><b> Selección: </b> {this.props.rastrojos.nombreRastrojos[this.props.rastrojos.dropdownSelected]}</font> </Label>
						        </FormGroup>
						    </Form>
				<Row>
					 <Col id = "simulationValues">
					 	<h5>Digestibilidad del Rastrojo[50-90]% </h5>
						<h5><b>Carga simulación inicial: [{this.props.rastrojos.valoresSimulacion[this.props.rastrojos.dropdownSelected].digestValue}]</b></h5>
					 </Col>
					 <Col id = "simulationValues">
					 	<h5>Rinde del Rastrojo[0-90] /Ha </h5>
						<h5><b>Carga simulación inicial: [{this.props.rastrojos.valoresSimulacion[this.props.rastrojos.dropdownSelected].yieldValue}]</b></h5>
					 </Col>
				</Row>
				<Row>
				   <Col>
				   		<SingleInput funcModificar = {this.props.modificarInputValueDigestibilidad}
				   					 arrayVariaciones = {this.props.rastrojos.digestibilidadVariaciones}
				   					 cantVariaciones = {this.props.rastrojos.cantVariaciones} 
				   					 seccionElegida = {this.props.rastrojos.dropdownSelected}/>
				   </Col>
				   <Col>
				   		<SingleInput funcModificar = {this.props.modificarInputValueRinde}
				   					 arrayVariaciones = {this.props.rastrojos.rindeVariaciones}
				   					 cantVariaciones = {this.props.rastrojos.cantVariaciones} 
				   					 seccionElegida = {this.props.rastrojos.dropdownSelected}/>
				   </Col>
			   </Row>
			  </Container>);
  	}
  }
  
	render(){
		const rastrojos = this.props.rastrojos;
		return(
			<div className = "container-fluid">
			    <Row>
					<h1 className="titulo">Digestibilidad y Rinde de cada Rastrojo</h1>
				</Row>
				<Row>
					<Col><ContentOption state = {rastrojos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
			{this.generarPantalla(rastrojos)}
			</div>
			
		);
	}
}

function mapStateToProps(state){
    return {
        rastrojos: state.rastrojos
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Rastrojo);