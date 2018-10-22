import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon} from 'reactstrap';

//Estilos del componente
import './css/InputsVariation.css';

class InputsMonths extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}
	setInputsVariations(){
		let inputs = [];
		if(this.props.cantVariaciones > 0){
			for( let i= 0; i < 12; i++){
			    inputs.push({name:'<input type="number" />'});
			};
			return inputs;	
		}
		return [];
	}

	handleInputValueChange(e){
		let valor = parseInt(e.target.value);
		let id = parseInt(e.target.id);
		let pagina = this.props.paginaActual - 1;
		this.props.funcModiValorInput(id,pagina,valor);
		
	}
	/*
		Llamar a la accion que me setee la pagina actual
		tanto para la subida como para la bajada
	*/
	handleClickUp(){
		if(this.props.paginaActual < this.props.cantVariaciones){
			this.props.funcModiPagina(this.props.paginaActual+1);	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(){
		if(this.props.paginaActual > 1){
			this.props.funcModiPagina(this.props.paginaActual-1);	
		}
	}
	render(){
		let inputs = this.setInputsVariations();
		//Pagina 1 muestra el array[0]
		let paginaActual = this.props.paginaActual;
		return(
		<div className="container-fluid">
			<Row xs={12}>				
				<Col xs={2} className="divFlechas">					
					<button type="button" className="btn btn-outline-secondary" onClick={this.handleClickDown}/>
				</Col>
				<Col xs={4} className="divInputs">
					<p className="labelPagina">Pagina:{this.props.paginaActual}</p>
					<div id = "divInputs" className="divInputsVariation">
						{ 
						  inputs.map((input, key) => (
				            <input
				              type="number"
				              className="InputVariables"
				              id = {key}
				              key = {key}
				              value={this.props.pagvariaciones.length == 0  ? 0 : this.props.pagvariaciones[paginaActual-1][key].valor}
				              onChange={this.handleInputValueChange}
				            />
				        ))}
					</div>
				</Col>
				<Col xs={2}className="divFlechas">
					<button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-right" onClick={this.handleClickUp}/>
				</Col>
				<Col >
					
				</Col>
			</Row>
		</div>
		);
	}
}
export default InputsMonths;


// WEBPACK FOOTER //
// src/components/Generales/InputsVariation.js