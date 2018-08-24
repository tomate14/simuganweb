import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';


class RecursosForrajeros extends Component {
	constructor(){
		super();
		this.state = {
			cantidadVariaciones : 12,
			paginaActual : 1,
			arrayDatos : []
		}
	}
	render(){
		
		return(
			<div className="conteiner-fluid">
				<Row>
	                <Col xs="12">
	                    <ContentOption state={this.state}/>
	                </Col>
	            </Row>
	            <Row>
	                <Col xs="4">
	                    <MonthTable />
	                </Col>
	                <Col xs="8">
	                    <InputsVariation state={this.state} />
	                </Col>
	            </Row>
	        </div>
			
		);
	}
}

export default RecursosForrajeros;