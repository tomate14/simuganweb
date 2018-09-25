
import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Tabla extends Component{

		render(){
			return(
					<Table>
						 <thead>
			          		<tr>
			            		<th colSpan = "2" scope = "colgroup">Valores de Simulación</th>
			          		</tr>
			          		<tr>
			            		<th>{this.props.texto1}</th>
			            		<th>{this.props.texto2}</th>
			          		</tr>
			       		</thead>
			       		<tbody>
			          		<tr>
			            		<td>{this.props.valor1}</td>
			            		<td>{this.props.valor2}</td>
			          		</tr>
		        		</tbody>
					</Table>	
				);
			
		}
}

export default Tabla;