import React, { Component } from 'react';
import {Row, Col,Dropdown, DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';

import {bindActionCreators} from 'redux';


class Picker extends Component {

	constructor(){
		super();
		this.state = {dropdownOpen: false}			
	    this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen}) );
	}

	setDropdownSelected(){
	  	//este arreglo se debe cargar desde el xml parseado
	  	  	
	 	let aux =this.props.opciones[this.props.dropDownSelected];
	  	return aux;
	}

	render(){
		return (
			<Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
		        <DropdownToggle color = "dark" caret className = "btn-block" block={true}>
		        	 {this.setDropdownSelected()}
		        </DropdownToggle>
		        <DropdownMenu>
		          	<DropdownItem onClick={this.props.funcSelected} header>Pasturas</DropdownItem>
		          	{
		          		this.props.opciones.map((object,i)=>{
		          												return <DropdownItem 
		          												                onClick = {this.props.funcSelected} 
		          												                key = {i} 
		          												                id = {i}>{object}
		          												       </DropdownItem>;
		          											}
		          							  )
		          }
		        </DropdownMenu>
	      	</Dropdown>
		);
	}
}

export default Picker;