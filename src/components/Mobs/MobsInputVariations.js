import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row, Form, FormGroup, Label, Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


class MobsInputVariations extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
				<Row>
					<Col md={4}> </Col>
					<Col md={4}>
						{
							this.props.array.map((input, key) => (
								<InputGroup>
								    <InputGroupAddon addonType="append">{this.props.textos[key] }</InputGroupAddon>
								    <Input type="number" name={key} 
									    id    = {this.props.array[key]} 
									    key = {key}
									    onChange = {this.props.funcion}
									    value =  {this.props.array[key]}     />				    
								</InputGroup>
					            
					        ))
						}						
						
					</Col>
					<Col md={4}> </Col>
				</Row>
			</Container>
		);
		
	}
}

export default MobsInputVariations;