import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row, Form, FormGroup, Label, Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


class MobsInputVariations extends Component {

	constructor(){
		super();
		this.chequearRango = this.chequearRango.bind(this);
	}
		chequearRango(e){
		let valor = parseFloat(e.target.value);
		let idx = parseInt(e.target.name);
		switch (this.props.maxArray[idx]){
			case -1:
					if(valor < this.props.minArray[idx]){
						e.target.value = 0;
						this.props.funcion(e);
					}
					break;
			default:
					if(valor < this.props.minArray[idx] || valor > this.props.maxArray[idx]){
						e.target.value = 0;
						this.props.funcion(e);
					}

		}
	}

	render(){
		return(
			<Container>
				<Row md={12}>
					<Col md={2}> </Col>
					<Col md={8}>
						{
							this.props.array.map((input, key) => (
								<InputGroup>
								    <InputGroupAddon addonType="append">{this.props.textos[key] }</InputGroupAddon>
								    <Input type="number" name={key}
									    id    = {this.props.atributo} 
									    onChange = {this.props.funcion}
									    value =  {this.props.array[key]}
									    onBlur = {this.chequearRango}     />				    
								</InputGroup>
					            
					        ))
						}						
						
					</Col>
					<Col md={2}> </Col>
				</Row>
			</Container>
		);
		
	}
}

export default MobsInputVariations;