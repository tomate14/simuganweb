import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ChildInputSpam.css';




class ChildInputSpam extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);	
		this.chequearRango = this.chequearRango.bind(this);	
	}
	handleInputValueChange(e){
		let pagina   = parseInt(e.target.id);
		let atributo = e.target.name;
		let valor    = parseFloat(e.target.value);
		this.props.funcInput(pagina,atributo,valor);
	}


	chequearRango(e){
		let valor = parseFloat(e.target.value);
		if(valor < e.target.min || valor > e.target.max){
			e.target.value = 0;
			this.handleInputValueChange(e);
		}
	}

	componentDidMount(){
		let input = document.getElementById("input0Child");
		input.value = this.props.vector[0];
		input = document.getElementById("input1Child");
		input.value = this.props.vector[1];
		input = document.getElementById("input2Child");
		input.value = this.props.vector[2];
		input = document.getElementById("input3Child");
		input.value = this.props.vector[3];
		input = document.getElementById("input4Child");
		input.value = this.props.vector[4];
		input = document.getElementById("input5Child");
		input.value = this.props.vector[5];
		input = document.getElementById("input6Child");
		input.value = this.props.vector[6];
	}

	render(){
		return(
			<Container>
				<Row>
					<h5><b>{this.props.titulo}</b></h5>
				</Row>
				<Row>
					<br/>
				</Row>
				<Row>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[0]}</InputGroupAddon>
					    <Input min = {0} type="number" step="any" name="0" id = {"input0Child"}  onBlur={this.handleInputValueChange}/>				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[1]}</InputGroupAddon>
					    <Input min = {0} type="number"step="any" name="1" id = {"input1Child"} onBlur={this.handleInputValueChange}/>
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[2]}</InputGroupAddon>
					    <Input min ={300} max = {650} type="number" step="any" name="2" id = {"input2Child"} onBlur={this.handleInputValueChange}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[3]}</InputGroupAddon>
					    <Input min = {10} max = {20} type="number" step="any" name="3" id = {"input3Child"} onBlur={this.handleInputValueChange}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[4]}</InputGroupAddon>
					    <Input min = {60} max= {90} type="number" step="any" name="4" id = {"input4Child"} onblur={this.handleInputValueChange}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[5]}</InputGroupAddon>
					    <Input min = {1} max = {2.8} type="number" step="any"  name="5" id = {"input5Child"} onBlur={this.handleInputValueChange}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[6]}</InputGroupAddon>
					    <Input min = {0} max = {10} type="number" step="any" name="6" id = {"input6Child"} onBlur={this.handleInputValueChange}/>
					</InputGroup>
				</Row>
			</Container>

		);
		
	}
}

export default ChildInputSpam;