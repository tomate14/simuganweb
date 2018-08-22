import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

//Estilos del componente
import './css/InputsVariation.css';

class InputsVariation extends Component{
	constructor(props){
		super(props);
		/*this.state = {
			cantidadVariaciones : 12,
			paginaActual : 1
		}*/
		this.state = props.state;
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}
	setInputsVariations(){
		let inputs = [];
		for( let i= 0; i < this.state.cantidadVariaciones; i++){
		    inputs.push({name:'<input type="number" />'});
		};
		return inputs;
	}

	handleInputValueChange(idx){

	}
	handleClickUp(e){
		this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(e){
		this.setState({paginaActual : this.state.paginaActual - 1})
	}
	render(){
		let inputs = this.setInputsVariations();
		return(
			<Row xs="12">
				<Col xs="3" className="divFlechas">					
					<button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-left" onClick={this.handleClickDown}/>
				</Col>
				<Col xs="5">

					<p className="labelPagina">Pagina:{this.state.paginaActual}</p>
					<div className="divInputsVariations">
						{inputs.map((input, idx) => (
				            <input
				              type="number"
				              className="InputVariables"
				              id = {idx}
				              onChange={this.handleInputValueChange(idx)}
				            />
				        ))}
					</div>
				</Col>
				<Col xs="2" className="divFlechas">
					<button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-right" onClick={this.handleClickUp}/>
				</Col>
			</Row>
		);
	}
}
export default InputsVariation;