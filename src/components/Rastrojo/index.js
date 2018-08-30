import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';

//components
import ContentOption from '../Generales/ContentOption';

class Rastrojo extends Component {

	constructor(props){
		super(props);
		this.state = {
			cantidadVariaciones : 1
		}
	}

	render(){
		return(
			<Container>
			<Row>
			<Col><ContentOption state = {this.state} /></Col>
			</Row>
			<Row><h1>Rastrojo</h1></Row>
			 </Container>
		);
	}
}

export default Rastrojo;