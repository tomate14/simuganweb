import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon} from 'reactstrap';

//Estilos del componente
import './css/InputsVariation.css';

class InputsVariation extends Component{
	constructor(){
		super();
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}
	setInputsVariations(){
		let inputs = [];
		if(this.props.state.cantVariaciones > 0){
			for( let i= 0; i < this.props.state.inputsPorVariacion; i++){
			    inputs.push({name:'<input type="number" />'});
			};
			return inputs;	
		}
		return [];
	}

	handleInputValueChange(e){
		let valor = parseInt(e.target.value);
		let id = parseInt(e.target.id);
		let pagina = this.props.state.paginaActual - 1;
		let seleccion = this.props.state.dropDownSelected;
		this.props.funcModiValorInput(id,pagina,valor,seleccion);
		
	}
	/*
		Llamar a la accion que me setee la pagina actual
		tanto para la subida como para la bajada
	*/
	handleClickUp(){
		if(this.props.state.paginaActual < this.props.state.cantVariaciones){
			this.props.funcModiPagina(this.props.state.paginaActual+1);	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(){
		if(this.props.state.paginaActual > 1){
			this.props.funcModiPagina(this.props.state.paginaActual-1);	
		}
	}
	render(){
		let inputs = this.setInputsVariations();
		//Pagina 1 muestra el array[0]
		let paginaActual = this.props.state.paginaActual;
		let dropdownSelected = this.props.state.dropDownSelected;
		return(
		<div className="conteiner-fluid">
			<Row>				
				<Col  className="divFlechas">					
					<button type="button" className="btn btn-outline-secondary" onClick={this.handleClickDown}/>
				</Col>
				<Col className="divInputs">
					<p className="labelPagina">Pagina:{this.props.state.paginaActual}</p>
					<div className="divInputsVariation">
						{inputs.map((input, key) => (
				            <input
				              type="number"
				              className="InputVariables"
				              id = {key}
				              key = {key}
				              value={this.props.state.pagvariaciones.length == 0  ? 0 : this.props.state.pagvariaciones[dropdownSelected][paginaActual-1][key].valor}
				              onChange={this.handleInputValueChange}
				            />
				        ))}
					</div>
				</Col>
				<Col className="divFlechas">
					<button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-right" onClick={this.handleClickUp}/>
				</Col>
				<Col >
					
				</Col>
			</Row>
		</div>
		);
	}
}
export default InputsVariation;


// WEBPACK FOOTER //
// src/components/Generales/InputsVariation.js