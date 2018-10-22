import React, { Component } from 'react';



//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components

import SingleInputArray from '../Generales/SingleInputArray';
import SingleSelectArray from '../Generales/SingleSelectArray';

class PesoVivoPane extends Component {


	generarCondCorporal() {
		let array = [];
		if(this.props.medida == "cc"){ // cambiar CC por el string correspondiente ( consultar a Mauri)
			array.push(	
							<Col id = "simulationValues">
								<h5> Valor de CC a partir del cual los animales se destinan a la venta </h5>
								<h5><b>Carga simulación inicial: [ {this.props.simulationValueCC} ]</b> </h5>
							</Col>
						);
			array.push(
							<Col>
								<SingleSelectArray  selectValues = {[1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9]}
												  	funcModificar = {this.props.funcModificarCC}
						   					 	  	arrayVariaciones = {this.props.arrayVariacionesCC}
						   					      	cantVariaciones = {this.props.cantVariaciones} 
						   		/>
							</Col>
						);
		}else
			 array = ["",""]
		return array;
	}

	render(){
		let extraInputs = this.generarCondCorporal();
		return(<Container>
					<Row>
						<Col id = "simulationValues">
							<h5> Valor de peso vivo a partir del cual los animales se destinan a la venta [300,650]kg </h5>
							<h5><b>Carga simulación inicial: [ {this.props.simulationValuePeso} ]</b> </h5>
						</Col>
						{extraInputs[0]}
					</Row>
					<Row id= "divPicker">
						<Col>
							<SingleInputArray funcModificar = {this.props.funcModificarPeso}
					   					 	  arrayVariaciones = {this.props.arrayVariacionesPeso}
					   					      cantVariaciones = {this.props.cantVariaciones} 
					   		/>
						</Col>
						{extraInputs[1]}
					</Row>
				</Container>
			);
	}

}

export default PesoVivoPane;