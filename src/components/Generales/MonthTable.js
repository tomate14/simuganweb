import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

//Estilos del componente
import './css/MonthTable.css';

//Datos de months a generar
import months from '../../data/dataMonth.js';

class MonthTable extends Component {

	static propTypes = {
		/*variationType: PropTypes.bool.isRequired,
		chargeType: PropTypes.bool.isRequired,
		titleVariation:PropTypes.string.isRequired*/
	};

	constructor(){
		super();
		this.months = months;
	}

	verifyStatus(){
		if ((this.props.variationType)|| (this.props.chargeType)){
			return true;
		}
		return false;
	}
	/*
	<div>
					<table id="monthTable">
        				<tbody>
						  <tr>
						    <th>Mes</th>
						    <th>Crecimiento</th>
						  </tr>
						  {this.months && this.months.map((item,key) => 
						  	<tr>
						  		<td>{item.month}</td>
						  		<td>{item.value}</td>						  		
						  	</tr>
						  	)
						  }
						  </tbody>
					</table>
				</div>*/
	render(){
		//Relleno los months de un vector de datos 
		return (
				<Table>
			        <thead>
			          <tr>
			            <th>Mes</th>
					    <th>Crecimiento</th>
			          </tr>
			        </thead>
			        <tbody>
			          {this.months && this.months.map((item,key) => 
						  	<tr>
						  		<td>{item.month}</td>
						  		<td>{item.value}</td>						  		
						  	</tr>
						  	)
					  }
			        </tbody>
			    </Table>
			);
	}

}

export default MonthTable;