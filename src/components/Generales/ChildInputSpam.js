import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ChildInputSpam.css';




class ChildInputSpam extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);	
		this.funcModif = this.funcModif.bind(this);	
	}
	handleInputValueChange(e){
		let pagina   = parseInt(this.props.pagina);
		let atributo = e.target.id;
		let valor    = parseFloat(e.target.value);
		this.props.funcInput(pagina,atributo,valor);
	}


	funcModif(e){
		let id = parseInt(e.target.id.split("-")[0]);
		e.target.id= id;
		let valor = parseFloat(e.target.value);
		e.target.value=valor;
		if(e.target.max == ""){
			if(valor < e.target.min){
				e.target.value= e.target.min;
			}
		}
		else {
			if(valor < e.target.min || valor > e.target.max){
				e.target.value = e.target.min;
			}
		}
		this.handleInputValueChange(e);
	}

	componentDidMount(){
		let titulo = this.props.titulo;
		let input = document.getElementById("0-"+ titulo +"-inputChild");
		if(input != null){
		input.value = this.props.vector[0];
		input = document.getElementById("1-"+ titulo +"-inputChild");
		input.value = this.props.vector[1];
		input = document.getElementById("2-"+ titulo +"-inputChild");
		input.value = this.props.vector[2];
		input = document.getElementById("3-"+ titulo +"-inputChild");
		input.value = this.props.vector[3];
		input = document.getElementById("4-"+ titulo +"-inputChild");
		input.value = this.props.vector[4];
		input = document.getElementById("5-"+ titulo +"-inputChild");
		input.value = this.props.vector[5];
		input = document.getElementById("6-"+ titulo +"-inputChild");
		input.value = this.props.vector[6];
		}
	}

		componentDidUpdate(){
		let titulo = this.props.titulo;
		console.log(titulo)
		let input = document.getElementById("0-"+ titulo +"-inputChild");
		if(input != null){
		input.value = this.props.vector[0];
		input = document.getElementById("1-"+ titulo +"-inputChild");
		input.value = this.props.vector[1];
		input = document.getElementById("2-"+ titulo +"-inputChild");
		input.value = this.props.vector[2];
		input = document.getElementById("3-"+ titulo +"-inputChild");
		input.value = this.props.vector[3];
		input = document.getElementById("4-"+ titulo +"-inputChild");
		input.value = this.props.vector[4];
		input = document.getElementById("5-"+ titulo +"-inputChild");
		input.value = this.props.vector[5];
		input = document.getElementById("6-"+ titulo +"-inputChild");
		input.value = this.props.vector[6];
		}
	}

	render(){
		let titulo = this.props.titulo;
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
					    <Input min = {0} type="number" step="any" name="0" id = {"0-"+ titulo +"-inputChild"}  onBlur={this.funcModif}/>				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[1]}</InputGroupAddon>
					    <Input min = {0} type="number"step="any" name="1" id = {"1-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[2]}</InputGroupAddon>
					    <Input min ={300} max = {650} type="number" step="any" name="2" id = {"2-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[3]}</InputGroupAddon>
					    <Input min = {10} max = {20} type="number" step="any" name="3" id = {"3-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[4]}</InputGroupAddon>
					    <Input min = {60} max= {90} type="number" step="any" name="4" id = {"4-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[5]}</InputGroupAddon>
					    <Input min = {1} max = {2.8} type="number" step="any"  name="5" id = {"5-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[6]}</InputGroupAddon>
					    <Input min = {0} max = {10} type="number" step="any" name="6" id = {"6-"+ titulo +"-inputChild"} onBlur={this.funcModif}/>
					</InputGroup>
				</Row>
			</Container>

		);
		
	}
}

export default ChildInputSpam;