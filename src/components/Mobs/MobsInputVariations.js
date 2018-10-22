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
					<Col sm={4}> </Col>
					<Col sm={4}>
						{
							this.props.array.map((input, key) => (
								<InputGroup>
								    <InputGroupAddon addonType="append">{this.props.textos[key] }</InputGroupAddon>
								    <Input type="number" name="0" 
									    id    = {this.props.array[key]} 
									    key = {key}
									    value =  {this.props.array[key]}     />				    
								</InputGroup>
					            
					        ))
						}						
						
					</Col>
					<Col sm={4}> </Col>
				</Row>
			</Container>
		);
		
	}
}

export default MobsInputVariations;