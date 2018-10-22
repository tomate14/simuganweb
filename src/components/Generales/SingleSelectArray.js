import React,{Component} from 'react';
import PropTypes from 'prop-types';


class SingleSelectArray extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
		this.ponerValor = this.ponerValor.bind(this);
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
	}


  	generarInputs(parametro,funcOnChange){
	  	var rows = [];
	  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
			rows.push(<select id = {i} value = {this.props.arrayVariaciones[i]} onChange = {this.props.funcModificar}>
				{this.props.selectValues.map((object,index) => {
					return <option key ={index} value = {object} id = {index}> {object}</option>}
				)}
				
					  </select>); 
		}
		return rows;
	} 

	render(){
		return (this.generarInputs(this.props.arrayVariaciones,this.props.funcModificar).map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} </p> ; 
           }))
	}
}

export default SingleSelectArray;