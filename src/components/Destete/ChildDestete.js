import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col, Row, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

//importar componentes
import Picker from '../Generales/Picker'

//Estilos
import './css/ChildDestete.css';




class ChildDestete extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);				
	}

	handleInputValueChange(e){
		//let atributo = e.target.name;
		//let valor    = parseInt(e.target.value);
		this.props.funcInput(e);
	}
    handleRadioChange(e){
    	let seleccion = e.target.id;
    	let idRadioTrue = 0;
    	let idRadioFalse = 0;
    	let accion    = "CHANGE-RADIO-DESTETE";
    	//Posiciones de los radios en el array
    	if(seleccion == "radio1"){
    		idRadioTrue  = 1;
    		idRadioFalse = 8;
    	}else{
    		idRadioTrue  = 8;
    		idRadioFalse = 1;
    	}
    	this.props.funcRadio(idRadioTrue,idRadioFalse);
    }

	render(){
		return(
			<Container>
				<Row md={12}>
					<h5><b>{this.props.titulo}</b></h5>
				</Row>

			    <Row className="rowRadio">		
				    <FormGroup tag="fieldset">
			          <FormGroup check>
			            <Label check>
			              <Input type="radio" name="radio1" id="radio1" 
			                     defaultChecked={this.props.vector[1]} 
			                     onChange={this.handleRadioChange} />{' '}
			              {this.props.textos[1]}
			            </Label>
			          </FormGroup>
			          <FormGroup check className="checkSegundo">
			            <Label check>
			              <Input type="radio" name="radio1" id="radio2" 
			                     defaultChecked={this.props.vector[8]}
			                     onChange={this.handleRadioChange} />{' '}
			              {this.props.textos[8]}
			            </Label>
			          </FormGroup>			          
			        </FormGroup>
			    </Row>
			    <Row>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[0]}</InputGroupAddon>
					    <Input type="number" name="0" id = "0" onChange={this.handleInputValueChange} value =  {this.props.vector[0]}     />				    
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[2]}</InputGroupAddon>
					    <Picker className="pickerInput"
								id="Mobs"
				                opciones         = {this.props.opciones}
						        dropDownSelected = {this.props.seleccionDrop}
						        funcSelected     = {this.props.funcDropSelect} />  
					</InputGroup>

					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[3]}</InputGroupAddon>
					    <Input type="number" name="3" id = "3" onChange={this.handleInputValueChange} value = {this.props.vector[3]}    />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[4]}</InputGroupAddon>
					    <Input type="number" name="4" id = "4" onChange={this.handleInputValueChange} value = {this.props.vector[4]}/>
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[5]}</InputGroupAddon>
					    <Input type="number" name="5" id = "5" onChange={this.handleInputValueChange} value = {this.props.vector[5]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[6]}</InputGroupAddon>
					    <Input type="number" name="6" id = "6" onChange={this.handleInputValueChange} value = {this.props.vector[6]}   />
					</InputGroup>
					<InputGroup>
					    <InputGroupAddon addonType="append">{this.props.textos[7]}</InputGroupAddon>
					    <Input type="number" name="7" id = "7" onChange={this.handleInputValueChange} value = {this.props.vector[7]}   />
					</InputGroup>
				</Row>

			</Container>

		);
		
	}
}

export default ChildDestete;