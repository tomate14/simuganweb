import React, { Component } from 'react';



//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
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
							<SingleInputArray funcModificar = {this.props.funcModificar}
					   					 	  arrayVariaciones = {this.props.arrayVariaciones}
					   					      cantVariaciones = {this.props.cantVariaciones} 
					   		/>
						</Col>
					</Row>
				</Container>
			);
	}

}

export default FeedlotPane;