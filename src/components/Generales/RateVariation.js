import React, { Component } from 'react';
import PropType from 'prop-types';

//Componentes Importados


//Estilos
import './css/RateVariation.css';

class RateVariation extends Component{
	constructor(props){
		super(props);
    	this.state = {	DigestibilityInput: '1',
    					VariationDigestibility:'1',
    				};

    	//Atributos del componente
    	this.toAble = this.state.toAble;
    	this.title  = this.props.title;
    	this.porcValue = this.props.porcValue;

    	//Eventos de los input
		this.handleDeferredDigestibilityChange = this.handleDeferredDigestibilityChange.bind(this);
    	this.handleVariationDigestibilityChange = this.handleVariationDigestibilityChange.bind(this);
	}

	handleDeferredDigestibilityChange(event) {
	    this.setState({DigestibilityInput: event.target.value});
	}

	handleVariationDigestibilityChange(event) {
	    this.setState({VariationDigestibility: event.target.value});
	}

	verifyStatus(){
		if (this.props.toAble){
			return true;
		}
		return false;
	}
	render(){
		const value = this.title +" ["+this.porcValue+"] ";
		return(
			<div>
				<div className="title">
					<h2>{value}</h2>
				</div>
				<div>
					<h5>Cantidad de variaciones :</h5>
					<input type="number" min = '1' id= "deferredDigestibility"  
						       disabled = {this.verifyStatus()} 
						       value    = {this.state.DigestibilityInput} 
						       onChange = {this.handleDeferredDigestibilityChange} /> 
				</div>
				<div>
					<h5>Tasa/Valor Variacion: </h5>					
					<input type="number" min = '1' id= "variationDigestibility"  
					       disabled = {this.verifyStatus()}
					       value    = {this.state.VariationDigestibility} 
					       onChange = {this.handleVariationDigestibilityChange} /> 
				</div>
			</div>
		);
	}
}

export default RateVariation;