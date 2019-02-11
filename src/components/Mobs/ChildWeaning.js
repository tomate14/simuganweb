import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row, Form, FormGroup, Label, Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


//components
import TabMenu from '../Generales/TabMenu';

class ChildWeaning extends Component {

	constructor(){
		super();
		this.uncheck = this.uncheck.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}


	uncheck(e){
		    let seleccion = e.target.id;
    		let valor = e.target.checked;
    		switch(seleccion){
    			case "diferidosWeaningCheck":
    				this.props.permitirDiferidosWeaning(valor);
    			break;
    			case "rastrojosWeaningCheck":
    				this.props.permitirRastrojoWeaning(valor);
    			break;
		}
	}

	
    	handleCheckboxChange(e){
    		let seleccion = e.target.id;
    		let valor = false;
    		let mob;
    		let pagina;
    		switch(seleccion){
    			case "diferidosWeaningCheck":
    				mob = this.props.mobs.dropDownSelected;
    				pagina = this.props.mobs.arrayMobs[mob].pagActual - 1;
    				valor =  this.props.mobs.arrayMobs[mob].pagvariaciones[pagina].weaningMobs.stockPilledEnable == false;
    				this.props.permitirDiferidosWeaning(valor);
    			break;
    			case "rastrojosWeaningCheck":
    				mob = this.props.mobs.dropDownSelected;
    				pagina = this.props.mobs.arrayMobs[mob].pagActual - 1;
    				valor =  this.props.mobs.arrayMobs[mob].pagvariaciones[pagina].weaningMobs.cropStubbleEnable == false;
    				this.props.permitirRastrojoWeaning(valor);
    			break;
    		}
    	}

	render(){
		return(
			<Container>
				<Row id="checkboxesMobs">
					<Col>
						<FormGroup check>
					          <Label check>
								<Input type="checkbox" id="diferidosWeaningCheck" 
					            onClick = {(e)=>this.handleCheckboxChange(e)}
					            onChange = {(e) => this.uncheck(e)}
					            checked = {this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].weaningMobs.stockPilledEnable}/>{' '}
					            Habilitar Diferidos		
					            </Label>
					    </FormGroup>
					</Col>
					<Col>
						<FormGroup check>
					          <Label check>
								<Input type="checkbox" id="rastrojosWeaningCheck" 
					            onClick = {(e)=>this.handleCheckboxChange(e)}
					            onChange = {(e) => this.uncheck(e)}
					            checked = {this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].weaningMobs.cropStubbleEnable}/>{' '}
					            Habilitar Rastrojo
					          </Label>
					    </FormGroup>
					</Col>
				</Row>
				<Row>
								<TabMenu panels = { this.props.panels }
						 		 navTexts = {this.props.navTexts}
						 		 clase    = {this.props.clase}
					   			/>
				</Row>
			</Container>
		);
		
	}
}

export default ChildWeaning;