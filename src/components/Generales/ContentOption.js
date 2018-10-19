import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {  Row, Col,InputGroup, InputGroupAddon, InputGroupText, Input,FormGroup,Label, Form,Container } from 'reactstrap'

//Estilos del componente
import './css/ContentOption.css';


class ContentOption extends Component {
	ponerValor(numero){
		if(numero == 0){
			return "";
		}else
			return numero
	}

	render(){
		
		return (	<Container id = "contentoption">
						 <Form >
					        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					        	<Input type="checkbox" 
					        			   id="cantVariaciones"
							        	   onClick={this.props.funcPermitir} 
			                  	           defaultChecked = {this.props.state.permitido}/>
					            <Label for="cantVariaciones" >Generar Variaciones</Label>
					          
					        </FormGroup>
					        <FormGroup >
					        	<Row>
					        		<Col sm={4}>
					        		</Col>
					          		<Col sm={4}>
							          	<Input   placeholder="Cantidad Variaciones"
									           id="cantVariation" 
									           type="number"
									           onChange={this.props.funcVariaciones}
									           value={ this.ponerValor(this.props.state.cantVariaciones)}  />
									</Col>
									<Col sm={4}>
					        		</Col>
								</Row>
					        </FormGroup>
					      </Form>				
					</Container>
			);
	}

}

export default ContentOption
