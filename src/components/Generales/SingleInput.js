import React,{Component} from 'react';
import PropTypes from 'prop-types';


class SingleInput extends Component {

	constructor(props){
		super(props);
		this.generarInputs = this.generarInputs.bind(this);
	}

	static propTypes = {
		funcModificar : PropTypes.func.isRequired,
		arrayVariaciones: PropTypes.array.isRequired,
		cantVariaciones : PropTypes.number.isRequired,
		seccionElegida : PropTypes.number.isRequired
	}


  generarInputs(parametro,funcOnChange){
  	var rows = [];
  	for(var i = 0; i< this.props.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
		rows.push(<input onChange = {funcOnChange} value = {parametro[this.props.seccionElegida][i]} id = {i} type="number"/>); 
	}
	return rows;
  } 

	render(){
		return (this.generarInputs(this.props.arrayVariaciones,this.props.funcModificar).map((object, i) => {
               return <p key={i}> Variación {i+1} :   {object} </p> ; 
           }))
	}
}

export default SingleInput;