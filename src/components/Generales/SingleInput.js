import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {Input, Popover, PopoverHeader, PopoverBody} from 'reactstrap';


class SingleInput extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
		//this.initPopover = this.initPopover.bind(this);
		this.funcModif = this.funcModif.bind(this);
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


	funcModif(e){
		let id = parseInt(e.target.id.split("-")[0]);
		let valor = parseFloat(e.target.value);
		e.target.value = valor;
		e.target.id= id;
		if(valor < this.props.min || valor > this.props.max){
			e.target.value = this.props.min;
		}
		this.props.funcModificar(e);
	}


	componentDidMount(){
		for(let i=0;i<this.props.cantVariaciones;i++){
			let id = i +"-"+ this.props.titulo +"-SingleInput";
			let input = document.getElementById(id);
			if(input !== null){
				input.value = this.props.arrayVariaciones[this.props.seccionElegida][i];
			}
		}	
	}

	componentDidUpdate(){
		for(let i=0;i<this.props.cantVariaciones;i++){
			let id = i +"-"+ this.props.titulo +"-SingleInput";
			let input = document.getElementById(id);
			if(input !== null){
				input.value = this.props.arrayVariaciones[this.props.seccionElegida][i];
			}
		}	
	}


  	generarInputs(){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<input 
						onBlur = {this.funcModif}
						step = "any"
						id = {i +"-" + this.props.titulo + "-SingleInput"}
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
		return (this.generarInputs().map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} 
               			               			</p> ; 
           }))
	}
}

export default SingleInput;