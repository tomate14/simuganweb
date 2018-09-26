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
  
	render(){
		const ensilaje = this.props.ensilaje;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {ensilaje} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				<Row>
					 <Tabla 
					 			texto1 = {"Valor de masa de los Potreros a partir de la cual se dispara el ensilaje"}
					 			texto2 = {"Valor de masa remanente de los Potreros luego de realizar la ensilada"}					 			
					 			valor1 = {this.props.ensilaje.valoresSimulacion.digestValue}
					 			valor2 = {this.props.ensilaje.valoresSimulacion.yieldValue}
					 />
					 
				</Row>
				<Row>
				   <Col>
				   		<p> (MPPE) Valor de masa de los Potreros a partir de la cual se dispara el ensilaje[700,...] kg MS/Ha</p>
				   		<SingleInputArray funcModificar = {this.props.modificarInputValueTrigger}
				   					 arrayVariaciones = {this.props.ensilaje.triggerVariaciones}
				   					 cantVariaciones = {this.props.ensilaje.cantVariaciones} 
				   					 />
				   </Col>
				   <Col>
				   		<p>"Valor de masa remanente de los Potreros luego de realizar la ensilada [400,valor(MPPE)] kg MS/Ha</p>
				   		<SingleInputArray funcModificar = {this.props.modificarInputValueLeftover}
				   					 arrayVariaciones = {this.props.ensilaje.leftoverVariaciones}
				   					 cantVariaciones = {this.props.ensilaje.cantVariaciones}/>
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        ensilaje: state.ensilaje
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarInputValueTrigger:modificarInputValueTrigger,modificarInputValueLeftover : modificarInputValueLeftover}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Ensilaje);