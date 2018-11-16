import React, { Component } from 'react';



//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import MonthTable from '../Generales/MonthTable';
import InputsMonths from '../Generales/InputsMonths';

class PasturePane extends Component {


	render(){
		return(<Row id= "divPicker">
				<Col>
				<MonthTable state = {this.props.arregloSimulacion}
							columna = {"Asignación"}/>
				</Col>
				<Col>
				<InputsMonths 	 
								 cantVariaciones = {this.props.cantVariaciones}
								 pagvariaciones = {this.props.arregloValores}
								 paginaActual = {this.props.paginaActual}
			                     funcModiPagina = {this.props.funcModifPagina}
		                         funcModiValorInput = {this.props.funcModifVariacion}
		                         min = {this.props.min}
		                         max = {this.props.max}/>
		        </Col>
				</Row>
			);
	}

}

export default PasturePane;