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
					    <Input min = {0} type="number" step="any" name="0" id = {this.props.pagina}  onChange={this.handleInputValueChange} value =  {this.props.vector[0]}     />				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[1]}</InputGroupAddon>
					    <Input min = {0} type="number"step="any" name="1" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[1]}      />
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[2]}</InputGroupAddon>
					    <Input min ={300} max = {650} type="number" step="any" name="2" id = {this.props.pagina} onChange={this.handleInputValueChange} onBlur = {this.chequearRango} value = {this.props.vector[2]}    />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[3]}</InputGroupAddon>
					    <Input min = {10} max = {20} type="number" step="any" name="3" id = {this.props.pagina} onChange={this.handleInputValueChange} onBlur ={this.chequearRango} value = {this.props.vector[3]}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[4]}</InputGroupAddon>
					    <Input min = {60} max= {90} type="number" step="any" name="4" id = {this.props.pagina} onChange={this.handleInputValueChange} onBlur ={this.chequearRango} value = {this.props.vector[4]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[5]}</InputGroupAddon>
					    <Input min = {1} max = {2.8} type="number" step="any"  name="5" id = {this.props.pagina} onChange={this.handleInputValueChange} onBlur ={this.chequearRango} value = {this.props.vector[5]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[6]}</InputGroupAddon>
					    <Input min = {0} max = {10} type="number" step="any" name="6" id = {this.props.pagina} onChange={this.handleInputValueChange} onBlur ={this.chequearRango} value = {this.props.vector[6]} />
					</InputGroup>
				</Row>
			</Container>

		);
		
	}
}

export default ChildInputSpam;