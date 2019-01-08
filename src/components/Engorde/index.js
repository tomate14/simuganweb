import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {modificarPagina,InputSelectValueFeedlot,InputCheckRastrojo,InputCheckDiferido,InputCheckVacias, InputCheckCuts, InputCheckGeneral,InputRadioEngorde,permitirVariaciones,modificarVariaciones,InputVariacionPastureValor,InputVariacionGrainValor,InputVariacionSilageValor,InputVariacionRastrojoValor,InputVariacionDiferidosValor,
		ModificarInputValueTriggerProtein, ModificarInputValueTriggerIntake,ModificarInputValueTriggerDigest,ModificarInputValueTriggerDRProtein,ModificarInputValueTriggerPesoVivo,ModificarInputValueTriggerCC} from '../../actions/action-engorde.js';

//bootstrap
import {Button,Input,Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import ContentOption from '../Generales/ContentOption'; 
import TabMenu from '../Generales/TabMenu';
import PasturePane from '../Generales/PasturePane';
import FeedlotPane from '../Generales/FeedlotPane';
import PesoVivoPane from '../Generales/PesoVivoPane';
import ChildEngorde from './ChildEngorde';

//Imagenes
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//css
import './css/ChildEngorde.css';

class Engorde extends Component {


		constructor(props) {
    super(props);

	this.handleClickDown = this.handleClickDown.bind(this);
	this.handleClickUp = this.handleClickUp.bind(this);
    //this.loadTabs = this.loadTabs.bind(this);
    //this.loadTitles = this.loadTitles.bind(this);
  } 

	
  handleClickDown(){
  	if(this.props.engorde.paginaActual >= 1){
		this.props.ModificarPagina(this.props.engorde.paginaActual-1);	
	}
  }

  handleClickUp(){
	if(this.props.engorde.paginaActual < this.props.engorde.cantVariaciones - 1){
		this.props.ModificarPagina(this.props.engorde.paginaActual+1);
		}	
  }


	generarPantalla(engorde){
		if((engorde.permitido)&&(engorde.cantVariaciones>0)){
			return(<Container>
					<Row xs={12}>
							<Col md={4}/>
							<Col xs={1} className="divFlechas">					
								<Button outline color="secondary" onClick={this.handleClickDown}>
									<FaAngleLeft />
								</Button>{' '}
								
							</Col>
							<Col xs={2}>
								<p className="labelPagina"><b><i><font size="3">Experimento: {engorde.paginaActual + 1}</font></i></b></p>
							</Col>
							<Col xs={1}className="divFlechas">
								<Button outline color="secondary" onClick={this.handleClickUp}>
									<FaAngleRight />
								</Button>{' '}
								
							</Col>
							<Col md={4}/>
					</Row>
					<Row>
						<Col md={2}/>
						<Col md={8}><ChildEngorde esquema = {this.props.engorde}
												  funcRadio = {this.props.InputRadioEngorde}
												  funcCheckGeneral = {this.props.InputCheckGeneral}
												  funcCheckCuts = {this.props.InputCheckCuts}
												  funcCheckVacias = {this.props.InputCheckVacias}
												  funcCheckRastrojo = {this.props.InputCheckRastrojo}
												  funcCheckDiferido = {this.props.InputCheckDiferido}
												  funcSelectTipoCorral = {this.props.InputSelectValueFeedlot}
												  funcModifPasture = {this.props.InputVariacionPastureValor}
												  funcModifSilage = {this.props.InputVariacionSilageValor}
												  funcModifGrain = {this.props.InputVariacionGrainValor}
												  funcModifRastrojo = {this.props.InputVariacionRastrojoValor}
												  funcModifDiferido = {this.props.InputVariacionDiferidosValor}
													/>
													</Col>
						<Col md={2}/>
					</Row>
					</Container>
					);
		}
	}
  
	render(){

		return(
			<div className = "container-fluid">
				<Row>
					<h1 className="titulo">Configuracion de reglas de engorde</h1>
				</Row>
				<Row>
					<Col>
						<ContentOption  state = {this.props.engorde} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/>
					</Col>
				</Row>
				{this.generarPantalla(this.props.engorde)}
			</div>

		);
	}
}

function mapStateToProps(state){
    return {
        engorde: state.engorde
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,
    							InputVariacionPastureValor:InputVariacionPastureValor,
    							InputVariacionGrainValor:InputVariacionGrainValor,
    							InputVariacionSilageValor:InputVariacionSilageValor,
    							InputVariacionRastrojoValor:InputVariacionRastrojoValor,
    							InputVariacionDiferidosValor:InputVariacionDiferidosValor,
    							ModificarInputValueTriggerProtein : ModificarInputValueTriggerProtein,
    							ModificarInputValueTriggerIntake : ModificarInputValueTriggerIntake,
    							ModificarInputValueTriggerDigest : ModificarInputValueTriggerDigest,
    							ModificarInputValueTriggerDRProtein : ModificarInputValueTriggerDRProtein,
    							ModificarInputValueTriggerPesoVivo : ModificarInputValueTriggerPesoVivo,
    							ModificarInputValueTriggerCC :ModificarInputValueTriggerCC,
    							InputRadioEngorde : InputRadioEngorde,
    							InputCheckVacias :InputCheckVacias,
    							InputCheckGeneral :InputCheckGeneral,
    							InputCheckCuts : InputCheckCuts,
    							InputCheckRastrojo : InputCheckRastrojo,
    							InputCheckDiferido : InputCheckDiferido,
    							InputSelectValueFeedlot : InputSelectValueFeedlot,
    							ModificarPagina : modificarPagina
    						}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Engorde);