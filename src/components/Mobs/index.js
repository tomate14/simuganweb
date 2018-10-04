import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//components 
import MobContent from './mobContent';
import ContentOption from '../Generales/ContentOption';
import Picker from '../Generales/Picker';
import TabMenu from '../Generales/TabMenu';
import ServicioDestete from './ServicioDestete';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected} from '../../actions/action-mobs.js';

//estilos
import './css/index.css'; 

class Mobs extends Component {

	/*static propTypes = {
      selectOptions: PropTypes.array.isrequired
  };*/



	render(){

        var mobs = this.props.mobs;
		return(
			<Container>
				<Row>
				<h1>Configuraciones de los mobs </h1>
				</Row>
				<Row id="contentoption">
				<ContentOption state = {mobs} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/>
				</Row>
				<Row>
					<Col id="divPicker" sm = {"3"}>
				<Picker 
											id="Mobs"
							                opciones         = {mobs.mobsNombre}
									        dropDownSelected = {this.props.mobs.dropdownSelected}
									        funcSelected     = {this.props.modificarDropdownSelected}/>
					</Col>
				</Row>
				<Row id="divTabs">
				<TabMenu opcion = {<ServicioDestete arrayDestete = {this.props.mobs.arrayDestete}
													arrayServicio = {this.props.mobs.arrayServicio}
													arrayPesoServicio = {this.props.mobs.arrayPesoServicio}/>}/>
				</Row>
			</Container>
		);
	}
}

function mapStateToProps(state){
    return {
        mobs: state.mobs
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarDropdownSelected : modificarDropdownSelected}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Mobs);