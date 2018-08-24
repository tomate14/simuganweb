import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';

//Estilos

import './css/index.css'; 

class RecursosForrajeros extends Component {
	constructor(){
		super();
		this.state = {
			cantidadVariaciones : 12,
			paginaActual : 1,
			arrayDatos : this.iniciarArregloState()
		}
		
	}
	iniciarArregloState(){
		let arrayAux = [];
		for(let i = 0; i < 12; i++){
			let nombre = "mes"+i.toString();
			let valor  = 0;
			let ObjetoMes = {}
			ObjetoMes.valor = valor;
			ObjetoMes.mes   = nombre;
			arrayAux.push(ObjetoMes);
		}
		return arrayAux;
	}
	render(){
		
		return(
			<div className="conteiner-fluid">
				<Row>
	                <Col>
	                    <ContentOption state={this.state}/>
	                </Col>
	            </Row>
	            <Row className="RowVariaciones">
	                <Col>
	                    <MonthTable />
	                </Col>
	                <Col>
	                    <InputsVariation state={this.state} />
	                </Col>
	            </Row>
	        </div>
			
		);
	}
}

export default RecursosForrajeros;