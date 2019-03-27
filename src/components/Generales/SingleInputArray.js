import React,{Component} from 'react';
import PropTypes from 'prop-types';


class SingleInputArray extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
		this.chequearRango = this.chequearRango.bind(this);
	}

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
		min : PropTypes.number.isRequired,
		max : PropTypes.number.isRequired,
	}



	chequearRango(e){
		let valor = parseFloat(e.target.value);
		switch(this.props.max){
			case -1: 
			if(valor < this.props.min){
			e.target.value = 0;
			this.props.funcModificar(e);
			}
			break;
			case -2:
			if(valor < this.props.min || valor > this.props.maxArray[e.target.id]){
				e.target.value = 0;
				this.props.funcModificar(e);
			}
			break;
			default :
			if(valor < this.props.min || valor > this.props.max){
				e.target.value = 0;
				this.props.funcModificar(e);
			}
		}
	}



  	generarInputs(parametro,funcOnChange){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<input onChange = {funcOnChange}
							 onBlur = {this.chequearRango}
							 value = {this.ponerValor(parametro[i])} 
							 id = {i}
							 step = "any"
							 type="number"/>); 
		}
		return rows;
	} 

	render(){
		return (this.generarInputs(this.props.arrayVariaciones,this.props.funcModificar).map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} </p> ; 
           }))
	}
}

export default SingleInputArray;