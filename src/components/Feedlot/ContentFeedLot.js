import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChildFeedLot from  './ChildFeedLot'

class ContentFeedLot extends Component{
	render(){
		return(

			<Row>
				<Col md={6}>
					<ChildFeedLot vector={this.props.state.pagvariaciones[this.props.state.paginaActual-1].Completion} 
					              titulo="Salida/Venta"/>
				</Col>
				<Col md={6}>
					<ChildFeedLot vector={this.props.state.pagvariaciones[this.props.state.paginaActual-1].Fattening} 
					              titulo="Engordador"/>
				</Col>
			</Row>
		);
	}
}

export default ContentFeedLot;