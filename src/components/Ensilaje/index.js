import React, { Component } from 'react';

//componentes genericos
import SingleInputArray from '../Generales/SingleInputArray';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarInputValueTrigger,modificarInputValueLeftover} from '../../actions/action-ensilaje.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 

class Ensilaje extends Component {



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

  generarPantalla(ensilaje){
  	if((ensilaje.permitido)&&(ensilaje.cantVariaciones> 0)){
  		return(<Container>
				<Row>
					<Col id = "simulationValues">
						<h5> (MPPE)  Valor de masa de los Potreros a partir de la cual se dispara el ensilaje</h5>
						<h5> [700,...] </h5>
						<h5><b>Carga simulación inicial: [ {this.props.ensilaje.valoresSimulacion.digestValue} ] kg MS/Ha</b> </h5>
					</Col>
					<Col id = "simulationValues">
						<h5>Valor de masa remanente de los Potreros luego de realizar la ensilada [400,valor(MPPE)]</h5>
						<h5><b>Carga simulación inicial: [ {this.props.ensilaje.valoresSimulacion.yieldValue} ] kg MS/Ha</b> </h5>					
					</Col>
				</Row>
				<Row>
				   <Col>
				   		<SingleInputArray funcModificar = {this.props.modificarInputValueTrigger}
				   					 arrayVariaciones = {this.props.ensilaje.triggerVariaciones}
				   					 cantVariaciones = {this.props.ensilaje.cantVariaciones}
				   					 titulo = "MasaEnsilaje"
				   					 min = {700}
				   					 max = {-1}
				   					 />
				   </Col>
				   <Col>
				   		<SingleInputArray funcModificar = {this.props.modificarInputValueLeftover}
				   					 arrayVariaciones = {this.props.ensilaje.leftoverVariaciones}
				   					 cantVariaciones = {this.props.ensilaje.cantVariaciones}
				   					 titulo = "RemanenteEnsilaje"
				   					 min = {400}
				   					 max = {-2}
				   					 maxArray = {this.props.ensilaje.triggerVariaciones}
				   					 />
				   </Col>
			   </Row>
			  </Container>);
  	}
  }
  
	render(){
		const ensilaje = this.props.ensilaje;
		return(
			<div>
				<Row className="parameterTitle">
					<Col sm={6}>
						<div className="lineTitle"></div>
					</Col>
					<Col sm={6}>
						<h1 className="titulo">Ensilaje y masa remanente</h1>
					</Col>
				</Row>
				<Row>
					<Col><ContentOption state = {ensilaje} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row>
				{this.generarPantalla(ensilaje)}
			</div>
			
		);
	}
}

function mapStateToProps(state){
    return {
        ensilaje: state.ensilaje
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarInputValueTrigger:modificarInputValueTrigger,modificarInputValueLeftover : modificarInputValueLeftover}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Ensilaje);