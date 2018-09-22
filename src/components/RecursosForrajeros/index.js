import React, { Component } from 'react';
import {Row, Col,Dropdown, DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';

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
					<div>
						<Row>
							<br/>
						</Row>
						<Row className="RowDropdown">
							<Col xs={4}>
								<Picker nombres          = {recursos.nombrePasturas}
								        dropDownSelected = {recursos.dropDownSelected}
								        funcSelected     = {this.props.modificarDropdownSelected}/>
								
						    </Col>
						    <Col xs={5}>
						    	<h5><b>Selección:</b> {recursos.nombrePasturas[recursos.dropDownSelected]}</h5>
						    </Col>
						    <Col xs={4}>
						    </Col>
						</Row>
						<Row className="RowVariaciones">
			                <Col>
			                    <MonthTable state = {recursos.valoresMeses}/>
			                </Col>
			                <Col>
			                    <InputsVariation state = {recursos}
			                                     funcModiPagina = {this.props.modificarPagina}
		                                         funcModiValorInput = {this.props.InputVariacionValor}/>

			                </Col>
			            </Row>
			        </div>
				);	
			}
		}		
		
	}
	render(){
		const recursos = this.props.recursosforrajeros;
		return(
			<div className="conteiner-fluid">
				<Row>
	                <Col>
	                    <ContentOption state          ={recursos} 
	                                   funcPermitir   ={this.props.permitirVariaciones} 
	                                   funcVariaciones={this.props.modificarVariaciones}/>
	                </Col>
	            </Row>
	            {this.generarTabla(recursos)}
	            
	        </div>
			
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        recursosforrajeros: state.recursosforrajeros
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps"+dispatch);
	return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones: modificarVariaciones, modificarPagina:modificarPagina, InputVariacionValor:InputVariacionValor,modificarDropdownSelected:modificarDropdownSelected}, dispatch);
    
    
}

export default connect(mapStateToProps, matchDispatchToProps)(RecursosForrajeros)

