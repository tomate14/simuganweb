import React, { Component } from 'react';
import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';

class RecursosForrajeros extends Component {

	render(){
		return(
			<div>
				<ContentOption />
				<MonthTable />
			</div>
		);
	}
}

export default RecursosForrajeros;