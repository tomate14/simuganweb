import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon} from 'react-bootstrap';

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
		<div className="conteiner-fluid">
			<Row sm={12}>
				<Col sm={1}>
					
				</Col>
				<Col sm={1} className="divFlechas">					
					<button type="button" className="btn btn-outline-secondary" onClick={this.handleClickDown}/>
				</Col>
				<Col sm={3} className="divInputs">
					<p className="labelPagina">Pagina:{this.state.paginaActual}</p>
					<div className="divInputsVariation">
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
				<Col sm={1} className="divFlechas">
					<button type="button" className="btn btn-outline-secondary glyphicon glyphicon-chevron-right" onClick={this.handleClickUp}/>
				</Col>
				<Col sm={6}>
					
				</Col>
			</Row>
		</div>
		);
	}
}
export default InputsVariation;