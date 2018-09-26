
import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Tabla extends Component{
		generarTabla(){
			if(this.props.valor2 != null){
				return (
					<Table>
						 <thead>
			          		<tr>
			            		<h3 colSpan = "2" scope = "colgroup">Valores de Simulación</h3>
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
			}else {
				return (
					<Table>
							 <thead>
				          		<tr>
				            		<h4 colSpan = "2" scope = "colgroup">Valores de Simulación</h4>
				          		</tr>
				          		<tr>
				            		<th>{this.props.texto1}</th>
				          		</tr>
				       		</thead>
				       		<tbody>
				          		<tr>
				            		<td>{this.props.valor1}</td>
				          		</tr>
			        		</tbody>
						</Table>	
				);
			}
			
		}
		render(){
			return(
					this.generarTabla()
				);
			
		}
}

export default Tabla;