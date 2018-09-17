import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarPagina} from '../../actions/action-recursosforrajeros';

import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';





//Estilos

import './css/index.css'; 

class RecursosForrajeros extends Component {
	generarTabla(recursos){
		if(recursos.cantVariaciones != 0){
			return (
				<Row className="RowVariaciones">
	                <Col>
	                    <MonthTable />
	                </Col>
	                <Col>
	                    <InputsVariation state = {recursos}
	                                     funcModiPagina = {this.props.modificarPagina}/>
	                </Col>
	            </Row>
			);	
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
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones: modificarVariaciones, modificarPagina:modificarPagina}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(RecursosForrajeros)

