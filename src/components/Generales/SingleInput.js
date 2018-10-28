import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { Popover, PopoverHeader, PopoverBody} from 'reactstrap';


class SingleInput extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
		//this.initPopover = this.initPopover.bind(this);
		//this.chequearRango = this.chequearRango.bind(this);
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
		seccionElegida : PropTypes.number.isRequired
	}


	// toggle(e){
	// 	let valor = parseInt(e.target.value);
	// 	if(valor < 50 || valor > 90){
	// 		e.target.value = 0;
	// 		let index = e.target.id.split("-");
	// 		console.log(index);
	// 		this.state.popoverOpen[parseInt(index[1])] = true;
	// 		console.log("popOver "+ this.state.popoverOpen);
	// 		this.props.funcModificar(e);
	// 	}
	// 	else
	// 		this.state.popoverOpen = false;
	// }


  	generarInputs(parametro,funcOnChange){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<input 
						onChange = {funcOnChange} 
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