import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {Input, Popover, PopoverHeader, PopoverBody} from 'reactstrap';


class SingleInput extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
		//this.initPopover = this.initPopover.bind(this);
		this.chequearRango = this.chequearRango.bind(this);
		// this.toggle = this.toggle.bind(this);
		// this.state = {
  //     popoverOpen: this.initPopover()
  //   };
	}

	// initPopover() {
	// 	let array = []
	// 	for(let i = 0; i < this.props.cantVariaciones; i++){
	// 		array.push(false);
	// 	}
	// 	return array;
	// }

	ponerValor(numero){
		if(numero === 0){
			return "";
		}else
			return numero
	}

	static propTypes = {
		funcModificar : PropTypes.func.isRequired,
		arrayVariaciones: PropTypes.array.isRequired,
		cantVariaciones : PropTypes.number.isRequired,
		seccionElegida : PropTypes.number.isRequired,
		min : PropTypes.number.isRequired,
		max : PropTypes.number.isRequired
	}


	chequearRango(e){
		let valor = parseFloat(e.target.value);
		if(valor < this.props.min || valor > this.props.max){
			e.target.value = 0;
			this.props.funcModificar(e);
		}
	}


  	generarInputs(parametro,funcOnChange){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<input 
						onChange = {funcOnChange}
						onBlur = {this.chequearRango}
						step = "any"
						value = {this.ponerValor(parametro[this.props.seccionElegida][i])}
						id = {i}
						type="number"/>); 
		}
		return rows;
	} 

	/*toggle() {
    	this.setState({
      	popoverOpen: !this.state.popoverOpen
    	});
  }*/

	render(){
		return (this.generarInputs(this.props.arrayVariaciones,this.props.funcModificar).map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} 
               			               			</p> ; 
           }))
	}
}

export default SingleInput;