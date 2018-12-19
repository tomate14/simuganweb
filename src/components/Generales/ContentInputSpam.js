import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChildInputSpam from  './ChildInputSpam'

class ContentInputSpam extends Component{
	render(){
		return(

			<Row>
				<Col md={6}>
					<ChildInputSpam vector={this.props.state.pagvariaciones[this.props.state.paginaActual-1].Completion} 
					                textos = {this.props.state.textoSalida} 
					                funcInput = {this.props.funcSalida}
					                pagina    = {this.props.pagina}
					                titulo="Terminaciones"/>
				</Col>
				<Col md={6}>
					<ChildInputSpam vector ={this.props.state.pagvariaciones[this.props.state.paginaActual-1].Fattening} 
					                textos = {this.props.state.textoEngorde} 
					                titulo="Engordador"
					                pagina    = {this.props.pagina}
					                funcInput = {this.props.funcEngorde}
					              />
				</Col>
			</Row>
		);
	}
}

export default ContentInputSpam;