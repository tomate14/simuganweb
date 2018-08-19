import React, { Component } from 'react';
import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';

class RecursosForrajeros extends Component {
	constructor(){
		super();
		this.state = {
			cantidadVariaciones : 15
		}
	}
	render(){
		return(
			<div>
				<ContentOption state={this.state}/>
				<MonthTable />
				<InputsVariation state={this.state} />
			</div>
		);
	}
}

export default RecursosForrajeros;