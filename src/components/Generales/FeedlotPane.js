import React, { Component } from 'react';



//bootstrap
import {Input,Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components

import SingleInputArray from '../Generales/SingleInputArray';

class FeedlotPane extends Component {

	render(){
		return(<Container>
					<Row>
						<Col id = "simulationValues">
							<h5>{this.props.descripcion} </h5>
							<h5><b>Carga simulación inicial: [ {this.props.simulationValue} ]</b> </h5>
						</Col>
					</Row>
					<Row id= "divPicker">
						<Col>
							<Input type="number" min={70} max={90} name="4" id = "4" onBlur = {this.chequearRango} onChange={this.props.funcModificar} value ={this.props.esquema} />
						</Col>
					</Row>
				</Container>
			);
	}

}

export default FeedlotPane;