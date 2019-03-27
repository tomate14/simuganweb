import React, { Component } from 'react';



//bootstrap
import {Input,Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components

import SingleInputArray from '../Generales/SingleInputArray';
import SingleSelectArray from '../Generales/SingleSelectArray';

class PesoVivoPane extends Component {

	 generarCC(){
	  	let selectValues = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9];
	  	let array = [];
	  	if(this.props.medida == "bcs" || this.props.medida == "lwBcs"){
		  	array.push(	
								<Col id = "simulationValues">
									<h5> Valor de CC a partir del cual los animales se destinan a la venta </h5>
									<h5><b>Carga simulación inicial: [ {this.props.simulationValueCC} ]</b> </h5>
								</Col>
							);
			array.push(<Col>
						<Input id="ccEngorde" type="select"  value = {this.props.esquemaCC} onChange = {this.props.funcModificarCC}>
							{selectValues.map((object,index) => {
							return <option key ={index} value = {object} id = {index}> {object}</option>}
							)}
						</Input>
					   </Col>);
			}
		else{
			array = ["",""];
		}
		return array;
	} 
	generarPV(){
		let array = [];
		if(this.props.medida == "lw" || this.props.medida == "lwBcs"){
			array.push(	<Col id = "simulationValues">
							<h5> Valor de peso vivo a partir del cual los animales se destinan a la venta [300,650]kg </h5>
							<h5><b>Carga simulación inicial: [ {this.props.simulationValuePeso} ]</b> </h5>
						</Col>);
			array.push(<Col>
						<Input id = "pesoVivoEngorde" type= "number" step="any" value = {this.props.esquemaPeso} onChange = {this.props.funcModificarPeso}/>
					   </Col>
				);
		}
		else {
			array = ["",""];
		}
		return array;
	}


	render(){
		let CC = this.generarCC();
		let PV = this.generarPV();
		return(<Container>
					<Row>
						{PV[0]}
						{CC[0]}
					</Row>
					<Row id= "divPicker">
						{PV[1]}
						{CC[1]}
					</Row>
				</Container>
			);
	}

}

export default PesoVivoPane;