import React, { Component } from 'react';

//componentes genericos
import SingleInput from '../Generales/SingleInput';
import Picker from '../Generales/Picker';
import Tabla from '../Generales/Tabla';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,InputVariacionPastureValor,InputVariacionGrainValor,InputVariacionSilageValor,InputVariacionRastrojoValor,InputVariacionDiferidosValor,ModificarPagina,ModificarInputValueTriggerProtein, ModificarInputValueTriggerIntake,ModificarInputValueTriggerDigest,ModificarInputValueTriggerDRProtein} from '../../actions/action-engorde.js';

//bootstrap
import {Dropdown, Table, DropdownToggle,DropdownItem,DropdownMenu,Container,Col, Row, Form, FormGroup,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import ContentOption from '../Generales/ContentOption'; 
import TabMenu from '../Generales/TabMenu';
import PasturePane from './PasturePane';
import FeedlotPane from './FeedlotPane';

class Engorde extends Component {


		constructor(props) {
    super(props);

		
    this.loadTabs = this.loadTabs.bind(this);
    this.loadTitles = this.loadTitles.bind(this);
  } 

	loadTabs(){
		const engorde = this.props.engorde;
		let array = [];
		if(engorde.tipoEngorde == "pasto"){
			array = 		[<PasturePane 	cantVariaciones = {engorde.cantVariaciones}
											paginaActual = {engorde.paginaActual}
											arregloValores = {engorde.arrayPastures}
											arregloSimulacion  = {engorde.pastureValues}
											funcModifVariacion = {this.props.inputVariacionPastureValor}
											funcModifPagina = {this.props.modificarPagina} />,

							<PasturePane 	cantVariaciones = {engorde.cantVariaciones}
											paginaActual = {engorde.paginaActual}
											arregloValores = {engorde.arrayGrain}
											arregloSimulacion  = {engorde.grainValues}
											funcModifVariacion = {this.props.inputVariacionGrainValor}
											funcModifPagina = {this.props.modificarPagina} />,

							<PasturePane 	cantVariaciones = {engorde.cantVariaciones}
											paginaActual = {engorde.paginaActual}
											arregloValores = {engorde.arraySilage}
											arregloSimulacion  = {engorde.silageValues}
											funcModifVariacion = {this.props.inputVariacionSilageValor}
											funcModifPagina = {this.props.modificarPagina} /> ];
			if(engorde.cropStubbleEnable){
				array.push(<PasturePane 	cantVariaciones = {engorde.cantVariaciones}
											paginaActual = {engorde.paginaActual}
											arregloValores = {engorde.arrayCropStubble}
											arregloSimulacion  = {engorde.cropStubbleValues}
											funcModifVariacion = {this.props.inputVariacionRastrojoValor}
											funcModifPagina = {this.props.modificarPagina} /> );
			}
			if(engorde.stockPilledEnable){
				array.push(<PasturePane 	cantVariaciones = {engorde.cantVariaciones}
											paginaActual = {engorde.paginaActual}
											arregloValores = {engorde.arrayStockPilled}
											arregloSimulacion  = {engorde.stockPilledValues}
											funcModifVariacion = {this.props.inputVariacionDiferidosValor}
											funcModifPagina = {this.props.modificarPagina} /> );
			}
		}
		else {
			  array = [		<FeedlotPane	simulationValue = {engorde.corralValues.protein}
			  								descripcion = "Proteina Bruta(PB) [10,20]% "
			  								funcModificar = {this.props.ModificarInputValueTriggerProtein}
			  								arrayVariaciones = {engorde.arrayProtein}
			  								cantVariaciones = {engorde.cantVariaciones} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.intake}
			  								descripcion = { "Consumo diario de los animales [1 ,2.8]% del peso vivo " }
			  								funcModificar = {this.props.ModificarInputValueTriggerIntake}
			  								arrayVariaciones = {engorde.arrayIntake}
			  								cantVariaciones = {engorde.cantVariaciones} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.digest}
			  								descripcion = "Digestibilidad de la dieta [60,90]%"
			  								funcModificar = {this.props.ModificarInputValueTriggerDigest}
			  								arrayVariaciones = {engorde.arrayDigest}
			  								cantVariaciones = {engorde.cantVariaciones} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.protein}
			  								descripcion = " Proteina de la dieta no degradable en rumen [2,12]%"
			  								funcModificar = {this.props.ModificarInputValueTriggerDRProtein}
			  								arrayVariaciones = {engorde.arrayDRProtein}
			  								cantVariaciones = {engorde.cantVariaciones}/>];
		}
		return array;
	}

	loadTitles(){
			const engorde = this.props.engorde;
		let array = [];
		if(engorde.tipoEngorde == "pasto"){
			array = 		["Configuracion de Pastura", "Configuracion de Grano","Configuracion de Ensilaje"];
			if(engorde.cropStubbleEnable){
				array.push("Configuracion de Rastrojo");
			}
			if(engorde.stockPilledEnable){
				array.push("Configuracion de Diferidos");
			}
		}
		else {
			  array = ["Proteina bruta","Consumo Diario" ,"Digestibilidad", "Proteina no degradable"];
		}
		return array;
	}
  
	render(){
			const engorde = this.props.engorde;
			var TabPanes = this.loadTabs();
			var navTexts = this.loadTitles();
		return(
			<Container>
				
				<Row>
					<Col id="contentoption" ><ContentOption state = {engorde} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				<TabMenu panels = { TabPanes }
						 navTexts = {navTexts} />
		  </Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        engorde: state.engorde
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,
    							inputVariacionPastureValor:InputVariacionPastureValor,
    							inputVariacionGrainValor:InputVariacionGrainValor,
    							inputVariacionSilageValor:InputVariacionSilageValor,
    							inputVariacionRastrojoValor:InputVariacionRastrojoValor,
    							inputVariacionDiferidosValor:InputVariacionDiferidosValor,
    							ModificarInputValueTriggerProtein : ModificarInputValueTriggerProtein,
    							ModificarInputValueTriggerIntake : ModificarInputValueTriggerIntake,
    							ModificarInputValueTriggerDigest : ModificarInputValueTriggerDigest,
    							ModificarInputValueTriggerDRProtein : ModificarInputValueTriggerDRProtein,
    							modificarPagina : ModificarPagina}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Engorde);