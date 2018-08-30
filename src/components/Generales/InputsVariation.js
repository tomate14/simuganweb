import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Glyphicon} from 'reactstrap';

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
			<Row >
				
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
				              value={this.state.arrayDatos[key].valor}
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