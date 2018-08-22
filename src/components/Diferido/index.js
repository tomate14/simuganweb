import React, { Component } from 'react';
import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Diferido extends Component {

	  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.generarInputs = this.generarInputs.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generarInputs(){
  	var rows = [];
  	for(var i = 0; i< 5;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
		rows.push(<input name = {i} type="number"/>); 
	}
	return rows;
  } 

	render(){
		return(
			<Container>
				<Row>
					<Col> 
					    	<Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						        <DropdownToggle color = "success" caret>
						        	  Seleccione una Pastura
						        </DropdownToggle>
						        <DropdownMenu>
						          	<DropdownItem header>Pasturas</DropdownItem>
						          	<DropdownItem>Sorgo</DropdownItem>
						          	<DropdownItem>pastura 2</DropdownItem>
						          	<DropdownItem>pastura 3</DropdownItem>
						        </DropdownMenu>
					      	</Dropdown>
				   </Col>
				   <Col>
				   		<p>Digestibilidad del Diferido[50-90]% </p>
				   		{this.generarInputs().map(function(object, i){
               return <p key={i}> {object} </p> ;}
               				)
				   		}
				   </Col>
				   <Col>
				   		<p>Rinde del Diferido [15-200] /ha</p>
				   		{this.generarInputs().map(function(object, i){
               return <p  key={i}> {object} </p> ;}
               				)
				   		}
				   </Col>
			   </Row>
			  </Container>
		);
	}
}

export default Diferido;