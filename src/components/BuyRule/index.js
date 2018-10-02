import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,modificarInputValueDigestibilidad,modificarInputValueRinde} from '../../actions/action-diferidos.js';


//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ContentOption from '../Generales/ContentOption'; 

class BuyRule extends Component {



  
	render(){
		
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        buyrule: state.buyrule
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected,modificarInputValueDigestibilidad:modificarInputValueDigestibilidad,modificarInputValueRinde : modificarInputValueRinde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(BuyRule);