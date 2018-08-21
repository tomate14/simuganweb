import React, { Component } from 'react';
import MonthTable from '../Generales/MonthTable';
import ContentOption from '../Generales/ContentOption';
import InputsVariation from '../Generales/InputsVariation';

class RecursosForrajeros extends Component {
	constructor(){
		super();
		this.state = {
			cantidadVariaciones : 12
		}
	}
	render(){
		/* <div>
				<ContentOption state={this.state}/>
				<MonthTable />
				<InputsVariation state={this.state} />
			</div>
			*/
		return(
			<div className="conteiner">
				<div className="row">
	                <div className="col-sm-12">
	                    <ContentOption state={this.state}/>
	                </div>
	            </div>
	            <div className="row">
	                <div className="col-sm-4">
	                    <MonthTable />
	                </div>
	                <div className="col-sm-8">
	                    <InputsVariation state={this.state} />
	                </div>
	            </div>
	        </div>
			
		);
	}
}

export default RecursosForrajeros;