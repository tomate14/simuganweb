import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Dropdown, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones} from '../../actions/action-diferidos.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// components 

import ContentOption from '../Generales/ContentOption'; 

class Diferido extends Component {



	constructor(props) {
    super(props);

    this.state = {
			cantidadVariaciones : 1,
			dropdownOpen: false
	}
		
    this.toggle = this.toggle.bind(this);
    this.generarInputs = this.generarInputs.bind(this);
    this.actualizarTextDropdown = this.actualizarTextDropdown.bind(this);
  } 

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generarInputs(){
  	var rows = [];
  	for(var i = 0; i< this.props.diferidos.cantVariaciones;i++){ // la cantidad de iteraciones depende de la cantidad de variaciones que el usuario quiera
		rows.push(<input name = {i} type="number"/>); 
	}
	return rows;
  } 

  generarPasturas(){
  	var pasturas = ["Sorgo","pastura 2", "pastura 3"];
  	var rows = [];
  	for(var i = 0;i < pasturas.length;i++){
  		rows[i] = pasturas[i];
  	}
  	return pasturas;
  }

  actualizarTextDropdown(){
  	this.props.diferidos.dropdownSelected =this.children;
  	return;
  }

	render(){
		const diferidos = this.props.diferidos;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {diferidos} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				<Row>
					<Col> 
					    	<Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						        <DropdownToggle color = "success" caret>
						        	  Seleccione una Pastura
						        </DropdownToggle>
						        <DropdownMenu>
						          	<DropdownItem header>Pasturas</DropdownItem>
						          	{this.generarPasturas().map(function(object,i){
						          		return <DropdownItem key = {i}>{object}</DropdownItem>;
						          	})}
						        </DropdownMenu>
					      	</Dropdown>
					      	<p>{this.props.diferidos.dropdownSelected} </p>
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

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        diferidos: state.diferidos
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Diferido);