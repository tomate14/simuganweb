import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ChildFeedLot.css';




class ChildFeedLot extends Component{
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
					    <InputGroupAddon addonType="append">Peso Mínimo de ingreso</InputGroupAddon>
					    <Input type="number" placeholder =  {"Carga Ini."+this.props.vector.min}     />				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">Peso Máximo de venta</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.max}      />
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">Peso vivo de venta</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.value}    />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">Proteina Bruta</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.DRProtein}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">Digestibilidad de la dieta</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.Digest}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">Consumo diario</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.Intake}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">Proteina degradable</InputGroupAddon>
					    <Input type="number" placeholder = {this.props.vector.BProtein} />
					</InputGroup>
				</Row>
			</Container>

		);
		
	}
}

export default ChildFeedLot;