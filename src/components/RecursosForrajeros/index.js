import React, { Component } from 'react';
import {Row, Col,Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container, FormGroup, Form, Input, Label } from 'reactstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarPagina,InputVariacionValor,modificarDropdownSelected} from '../../actions/action-recursosforrajeros';


import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';
import Picker from '../Generales/Picker';





//Estilos

import './css/index.css'; 

class RecursosForrajeros extends Component {
	constructor(props) {
	    super(props);

	} 

	
	generarTabla(recursos){
		if(recursos.permitido){
			if(recursos.cantVariaciones > 0){
				return (
					<Container>
						<Row>
							<br/>
						</Row>
						<Form>
					        <FormGroup row>					        	
					          	<Col sm={3} id="divPicker">
						          	<Picker 
										id="Recursos Forrajeros"
						                opciones         = {recursos.nombrePasturas}
								        dropDownSelected = {recursos.dropDownSelected}
								        funcSelected     = {this.props.modificarDropdownSelected}/>
								</Col>
								<Label for="Pasturas" sm={6}> <font size="5"><b>Selección: </b> {recursos.nombrePasturas[recursos.dropDownSelected]}</font> </Label>
					          	
					        </FormGroup>
					    </Form>
						<Row className="RowVariaciones">
			                <Col>
			                    <MonthTable state = {recursos.valoresMeses}
			                    			columna = "Crecimiento"/>
			                </Col>
			                <Col>
			                    <InputsVariation state = {recursos}
			                                     funcModiPagina = {this.props.modificarPagina}
		                                         funcModiValorInput = {this.props.InputVariacionValor}/>

			                </Col>
			            </Row>
			        </Container>
				);	
			}
		}		
		
	}
	render(){
		const recursos = this.props.recursosforrajeros;
		return(
			<div className="container-fluid">
				<Row>
					<h1 className="titulo">Recursos Forrajeros</h1>
				</Row>
                <Row>
	                <Col>
	                    <ContentOption state          ={recursos} 
	                                   funcPermitir   ={this.props.permitirVariaciones} 
                                       funcVariaciones={this.props.modificarVariaciones}
                                       />

	                </Col>
	            </Row>
	            {this.generarTabla(recursos)}
	            
	        </div>
			
		);
	}
}

function mapStateToProps(state){
    return {
        recursosforrajeros: state.recursosforrajeros
    };
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones: modificarVariaciones, modificarPagina:modificarPagina, InputVariacionValor:InputVariacionValor,modificarDropdownSelected:modificarDropdownSelected}, dispatch);
    
    
}

export default connect(mapStateToProps, matchDispatchToProps)(RecursosForrajeros)

