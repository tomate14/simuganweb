import React, { Component } from 'react';
import PropType from 'prop-types';

//Componentes Importados


//Estilos
import './css/RangeRateVariation.css';

class RangeRateVariation extends Component{
	constructor(props){
		super(props);
    	this.state = {	valueMin:30, 
    		            valueMax:90,
    		            cantVariation:1 };

    	//Atributos del componente
    	this.toAble = this.state.toAble;
    	this.title  = this.props.title;
    	this.porcValue = this.props.porcValue;
    	this.restrictMinValue = "30";
    	this.restrictMaxValue = "90";
    	//this.restrictMinValue = this.props.restrictMinValue;
    	//this.restrictMaxValue = this.props.restrictMaxValue;

    	//Eventos de los input
		//this.handleDeferredDigestibilityChange = this.handleDeferredDigestibilityChange.bind(this);
    	//this.handleVariationDigestibilityChange = this.handleVariationDigestibilityChange.bind(this);
	}

	/*handleDeferredDigestibilityChange(event) {
	    this.setState({DigestibilityInput: event.target.value});
	}

	handleVariationDigestibilityChange(event) {
	    this.setState({VariationDigestibility: event.target.value});
	}*/

	verifyStatus(){
		if (this.props.toAble){
			return true;
		}
		return false;
	}
	render(){
		const value = this.title +" ["+this.state.valueMin+" - "+this.state.valueMax+"] ";
		return(
			<div>
				<div className="title">
					<h2>{value}</h2>
				</div>
				<div>
					<h5>Cantidad de variaciones :</h5>
					<input type="number" min = '1' id= "cantVariation"  
						       disabled = {this.verifyStatus()} 
						       value    = {this.state.cantVariation} 
						       
						       />
				</div>
				<div>
					
					<h4>Valores de variacion</h4>
					<h5>Min:</h5>
					<input type="number" 					           
					           id= "minValue" 
					           min={this.restrictMinValue}
					           max={this.restrictMaxValue}
						       disabled = {this.verifyStatus()} 
						       />
					<h5>Max:</h5>
					<input type="number" id= "maxValue"  
						       disabled = {this.verifyStatus()} 
						       min={this.restrictMinValue}
					           max={this.restrictMaxValue}
						       /> 
				</div>
				
			</div>
		);
	}
}

export default RangeRateVariation;