import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon} from 'reactstrap';

//Estilos del componente
import './css/InputsVariation.css';

class InputsVariation extends Component{
	constructor(props){
		super(props);
		this.state = props.state;
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}
	setInputsVariations(){
		let inputs = [];
		if(this.state.cantVariaciones > 0){
			for( let i= 0; i < this.state.inputsPorVariacion; i++){
			    inputs.push({name:'<input type="number" />'});
			};
			return inputs;	
		}
		return [];
	}

	handleInputValueChange(idx){
		
	}
	handleClickUp(e){
		if(this.state.paginaActual < this.state.cantVariaciones){
			this.setState({paginaActual : this.state.paginaActual + 1})	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(e){
		if(this.state.paginaActual > 1){
			this.setState({paginaActual : this.state.paginaActual - 1})	
		}
	}
	render(){
		let inputs = this.setInputsVariations();
		//Pagina 1 muestra el array[0]
		let paginaActual = this.state.paginaActual - 1;
		return(
		<div className="conteiner-fluid">
			<Row>				
				<Col  className="divFlechas">					
					<button type="button" className="btn btn-outline-secondary" onClick={this.handleClickDown}/>
				</Col>
				<Col className="divInputs">
					<p className="labelPagina">Pagina:{this.state.paginaActual}</p>
					<div className="divInputsVariation">
						{inputs.map((input, key) => (
				            <input
				              type="number"
				              className="InputVariables"
				              key = {key}
				              value={this.state.pagvariaciones.length == 0  ? 0 : this.state.pagvariaciones[paginaActual].variaciones[key].valor}
				              onChange={this.handleInputValueChange(key)}
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