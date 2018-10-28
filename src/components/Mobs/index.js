import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row, Form, FormGroup, Label, Button} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


//components 
//import MobContent from './mobContent';
import ContentOption from '../Generales/ContentOption';
import Picker from '../Generales/Picker';
//import TabMenu from '../Generales/TabMenu';
//import ServicioDestete from './ServicioDestete';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected, modificarPagina} from '../../actions/action-mob.js';

//estilos
import './css/index.css'; 

class Mobs extends Component {

   constructor(){
		super();
		//this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}
	/*static propTypes = {
      selectOptions: PropTypes.array.isrequired
  };*/


    /*
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
				
				</Row>
	<TabMenu opcion = {<ServicioDestete arrayDestete = {this.props.mobs.arrayDestete}
													arrayServicio = {this.props.mobs.arrayServicio}
													arrayPesoServicio = {this.props.mobs.arrayPesoServicio}/>}/>
    */
 

	handleClickUp(){
		let pagina = this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual;
		if( pagina < this.props.mobs.cantVariaciones){
			this.props.modificarPagina( pagina + 1 );	
 		}
	}

	handleClickDown(){
		let pagina = this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual;
		if(pagina > 1){
			this.props.modificarPagina(pagina-1);	
		}
	}

    generarTabs(mobs){
    	if(mobs.permitido){
			if(mobs.cantVariaciones > 0){
		    	return(
		    		<Container>
		    			<Form>
					        <FormGroup row>			        	
					          	<Col sm={4} id="divPicker">
						          	<Picker 
										id="Mobs"
						                opciones         = {mobs.mobsNombre}
								        dropDownSelected = {this.props.mobs.dropDownSelected}
								        funcSelected     = {this.props.modificarDropdownSelected}/>
								</Col>
								<Label for="Pasturas" sm={6}> <font size="5"><b>Selección: </b> {mobs.mobsNombre[mobs.dropDownSelected]}</font> </Label>
					          	
					        </FormGroup>
					    </Form>
					    <Row xs={12}>
							<Col md={4}/>
							<Col xs={1} className="divFlechas">					
								<Button outline color="secondary" onClick={this.handleClickDown}>
									<FaAngleLeft />
								</Button>{' '}								
							</Col>
							<Col xs={2}>
								<p className="labelPagina"><b><i><font size="3">Pagina: {mobs.arrayMobs[mobs.dropDownSelected].pagActual}</font></i></b></p>
							</Col>
							<Col xs={1}className="divFlechas">
								<Button outline color="secondary" onClick={this.handleClickUp}>
									<FaAngleRight />
								</Button>{' '}								
							</Col>
							<Col md={4}/>
						</Row>


		    		</Container>
		    	);
		    }
		}
    }
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
				{this.generarTabs(mobs)}
				
				
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
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones, 
    	                       modificarDropdownSelected:modificarDropdownSelected, modificarPagina:modificarPagina }, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Mobs);