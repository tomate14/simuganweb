import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ChildInputSpam.css';




class ChildInputSpam extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);		
	}
	handleInputValueChange(e){
		let pagina   = parseInt(e.target.id);
		let atributo = e.target.name;
		let valor    = parseInt(e.target.value);
		this.props.funcInput(pagina,atributo,valor);
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
					    <Input type="number" name="0" id = {this.props.pagina} onChange={this.handleInputValueChange} value =  {this.props.vector[0]}     />				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[1]}</InputGroupAddon>
					    <Input type="number" name="1" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[1]}      />
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[2]}</InputGroupAddon>
					    <Input type="number" name="2" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[2]}    />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[3]}</InputGroupAddon>
					    <Input type="number" name="3" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[3]}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[4]}</InputGroupAddon>
					    <Input type="number" name="4" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[4]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[5]}</InputGroupAddon>
					    <Input type="number" name="5" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[5]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[6]}</InputGroupAddon>
					    <Input type="number" name="6" id = {this.props.pagina} onChange={this.handleInputValueChange} value = {this.props.vector[6]} />
					</InputGroup>
				</Row>
			</Container>

		);
		
	}
}

export default ChildInputSpam;