import React, {Component} from 'react'; 
import PropTypes from 'prop-types';

//Estilos del componente
import './css/InputsVariation.css';

class InputsVariation extends Component{
	constructor(props){
		super(props);
		this.state = props.state;
		this.handleInputValueChange = this.handleInputValueChange.bind(this);
		
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
	render(){
		let inputs = this.setInputsVariations();
		return(
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
		);
	}
}
export default InputsVariation;