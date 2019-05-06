import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

//Estilos del componente
import './css/MonthTable.css';

class MonthTable extends Component {


	constructor(props){
		super(props);
		//Arreglo de informacion a mostrar
		this.months = props.state;
	}

	render(){
		//Relleno los months de un vector de datos 
		return (
				<Table>
			        <thead>
			          <tr>
			            <th>Mes</th>
					    <th>{this.props.columna}</th>
			          </tr>
			        </thead>
			        <tbody>
			          {this.months && this.months.map((item,key) => 
						  	<tr key = {key}>
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