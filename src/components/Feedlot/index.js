import React, { Component } from 'react';
import {Container, Col, Row} from 'reactstrap';

//components
import ContentOption from '../Generales/ContentOption';

class Feedlot extends Component {

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
			<Row><h1>Feedlot</h1></Row>
			 </Container>
		);
	}
}

export default Feedlot;