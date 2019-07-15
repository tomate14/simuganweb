import React,{Component} from 'react';
import PropTypes from 'prop-types';


class SingleInputArray extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
		this.funcModif = this.funcModif.bind(this);
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



	funcModif(e){
		let id = parseInt(e.target.id.split("-")[0]);
		let valor = parseFloat(e.target.value);
		e.target.value = valor;
		e.target.id= id;
		switch(this.props.max){
			case -1: 
			if(valor < this.props.min){
			e.target.value = this.props.min;
			}
			break;
			case -2:
			if(valor < this.props.min || valor > this.props.maxArray[e.target.id]){
				e.target.value = this.props.min;
			}
			break;
			default :
			if(valor < this.props.min || valor > this.props.max){
				e.target.value = this.props.min;
			}
		}
		this.props.funcModificar(e);
	}


		componentDidMount(){
		for(let i=0;i<this.props.cantVariaciones;i++){
			let id = i +"-" + this.props.titulo +"-SingleInputArray";
			let input = document.getElementById(id);
			if(input !== null){
				input.value = this.props.arrayVariaciones[i];
			}
		}	
	}

	componentDidUpdate(){
		for(let i=0;i<this.props.cantVariaciones;i++){
			let id = i +"-" + this.props.titulo +"-SingleInputArray";
			let input = document.getElementById(id);
			if(input !== null){
				input.value = this.props.arrayVariaciones[i];
			}
		}	
	}

  	generarInputs(){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<input onBlur = {this.funcModif}
							 id = {i +"-" + this.props.titulo +"-SingleInputArray"}
							 step = "any"
							 type="number"/>); 
		}
		return rows;
	} 

	render(){
		return (this.generarInputs().map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} </p> ; 
           }))
	}
}

export default SingleInputArray;