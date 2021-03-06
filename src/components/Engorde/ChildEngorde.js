import React, { Component } from 'react';

import {Container,Col, Row, Form, FormGroup,Label, Input} from 'reactstrap';

//components

import TabMenu from '../Generales/TabMenu';
import PasturePane from '../Generales/PasturePane';
import FeedlotPane from '../Generales/FeedlotPane';
import PesoVivoPane from '../Generales/PesoVivoPane';

//css

import './css/ChildEngorde.css';

class ChildEngorde extends Component {

	constructor (){
		super();
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.uncheck = this.uncheck.bind(this);
	}

	loadTabs(){
		const engorde = this.props.esquema;
		let paginaActual = this.props.esquema.paginaActual;
		let array = [];
		let arrayValues = [];
		for(let i; i < 12; i++){
			arrayValues[i] = engorde.pastureValues[i].value;
		}

		if(engorde.pagVariaciones[engorde.paginaActual].tipoEngorde == "pasto"){
			array = 		[
							<PasturePane 	cantVariaciones = {1}
											paginaActual = {1}
											esEngorde    = {true}
											arregloValores = {engorde.pagVariaciones[engorde.paginaActual].pasture}
											arregloSimulacion  = {engorde.pastureValues}
											funcModifVariacion = {this.props.funcModifPasture}
											titulo = "pasturaEngorde" 
											min = {0}
											max = {25}/>,

							<PasturePane 	cantVariaciones = {1}
											paginaActual = {1}
											esEngorde    = {true}
											arregloValores = {engorde.pagVariaciones[engorde.paginaActual].grain}
											arregloSimulacion  = {engorde.grainValues}
											funcModifVariacion = {this.props.funcModifGrain}
											titulo = "granoEngorde"
											min = {0}
											max = {2.5}/>,

							<PasturePane 	cantVariaciones = {1}
											paginaActual = {1}
											esEngorde    = {true}
											arregloValores = {engorde.pagVariaciones[engorde.paginaActual].silage}
											arregloSimulacion  = {engorde.silageValues}
											funcModifVariacion = {this.props.funcModifSilage}
											titulo = "siloEngorde"
											min = {0}
											max = {2.5} /> ];
			if(engorde.pagVariaciones[engorde.paginaActual].rastrojoEnable){
				array.push(<PasturePane 	cantVariaciones = {1}
											paginaActual = {1}
											esEngorde    = {true}
											arregloValores = {engorde.pagVariaciones[engorde.paginaActual].rastrojo}
											arregloSimulacion  = {engorde.cropStubbleValues}
											funcModifVariacion = {this.props.funcModifRastrojo}
											titulo = "rastrojoEngorde"
											min = {0}
											max = {2.5} /> );
			}
			if(engorde.pagVariaciones[engorde.paginaActual].diferidoEnable){
				array.push(<PasturePane 	cantVariaciones = {1}
											paginaActual = {1}
											esEngorde    = {true}
											arregloValores = {engorde.pagVariaciones[engorde.paginaActual].diferido}
											arregloSimulacion  = {engorde.stockPilledValues}
											funcModifVariacion = {this.props.funcModifDiferido}
											titulo = "diferidoEngorde"
											min = {0}
											max = {3}/> );
			}
		}
		else {
			  array = [		
			  				<PesoVivoPane	medida = {engorde.pagVariaciones[engorde.paginaActual].feedlotType}
			  								paginaActual = {engorde.paginaActual} 
			  								simulationValueCC = {engorde.corralValues.cc}
			  								simulationValuePeso = {engorde.corralValues.pesoVivo}
			  								funcModificarPeso = {this.props.funcModifPesoVivo}
			  								funcModificarCC = {this.props.funcModifCC}
			  								esquemaPeso = {engorde.pagVariaciones[engorde.paginaActual].pesoVivo}
			  								esquemaCC = {engorde.pagVariaciones[engorde.paginaActual].cc}
			  								cantVariaciones = {engorde.cantVariaciones}/>,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.protein}
			  								descripcion = "Proteina Bruta(PB) [10,20]% "
			  								funcModificar = {this.props.funcModifProtein}
			  								esquema = {engorde.pagVariaciones[engorde.paginaActual].protein}
			  								cantVariaciones = {engorde.cantVariaciones}
			  								min = {10}
			  								max = {20} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.intake}
			  								descripcion = { "Consumo diario de los animales [1, 2.8]% del peso vivo " }
			  								funcModificar = {this.props.funcModifIntake}
			  								esquema = {engorde.pagVariaciones[engorde.paginaActual].intake}
			  								cantVariaciones = {engorde.cantVariaciones}
			  								min= {1}
			  								max = {2.8} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.digest}
			  								descripcion = "Digestibilidad de la dieta [60,90]%"
			  								funcModificar = {this.props.funcModifDigest}
			  								esquema = {engorde.pagVariaciones[engorde.paginaActual].digest}
			  								cantVariaciones = {engorde.cantVariaciones}
			  								min = {60}
			  								max = {90} />,
			  				<FeedlotPane	simulationValue = {engorde.corralValues.proteinDR}
			  								descripcion = " Proteina de la dieta no degradable en rumen [2,12]%"
			  								funcModificar = {this.props.funcModifDRProtein}
			  								esquema = {engorde.pagVariaciones[engorde.paginaActual].DRProtein}
			  								cantVariaciones = {engorde.cantVariaciones}
			  								min = {2}
			  								max = {12}/>];
		}
		return array;
	}

		loadTitles(){
			const engorde = this.props.esquema;
			let paginaActual = this.props.esquema.paginaActual
		let array = [];
		if(engorde.pagVariaciones[engorde.paginaActual].tipoEngorde == "pasto"){
			array = 		["Configuracion de Pastura", "Configuracion de Grano","Configuracion de Ensilaje"];
			if(engorde.pagVariaciones[paginaActual].rastrojoEnable){
				array.push("Configuracion de Rastrojo");
			}
			if(engorde.pagVariaciones[paginaActual].diferidoEnable){
				array.push("Configuracion de Diferidos");
			}
		}
		else {
			  array = ["Condición Corporal/ Peso vivo","Proteina bruta","Consumo Diario" ,"Digestibilidad", "Proteina no degradable"];
		}
		return array;
	}

	    handleRadioChange(e){

    	let seleccion = e.target.id;
    	let valor;
    	if(seleccion == "radio1"){
    		valor = "pasto";
    	}else{
    		valor = "corral";
    	}
    	this.props.funcRadio(valor);
    }

    	handleCheckboxChange(e){
    		let seleccion = e.target.id;
    		let valor = false;
    		switch(seleccion){
    			case "generalCheck":
    				valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].generalEnable == false;
    				this.props.funcCheckGeneral(valor);
    			break;
    			case "cutsCheck":
    				valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].cutsEnable == false;
    				this.props.funcCheckCuts(valor);
    			break;
    			case "vaciasCheck":
    				valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].vaciasEnable == false;
    				this.props.funcCheckVacias(valor);
    			break;
    			case "rastrojoCheck":
    				valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].rastrojoEnable == false;
    				this.props.funcCheckRastrojo(valor);
    				this.render();
    			break;
    			case "diferidoCheck":
    				valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].diferidoEnable == false;
    				this.props.funcCheckDiferido(valor);
    				this.render();
    			break;
    		}
    	}

    	unselect(e){
    	let seleccion = e.target.id;
    	let valor = this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].tipoEngorde;
    	
    	this.props.funcRadio(valor);
    	}

    	uncheck(e){
    		let seleccion = e.target.id;
    		let valor = e.target.checked;
    		switch(seleccion){
    			case "generalCheck":
    				this.props.funcCheckGeneral(valor);
    			break;
    			case "cutsCheck":
    				this.props.funcCheckCuts(valor);
    			break;
    			case "vaciasCheck":
    				this.props.funcCheckVacias(valor);
    			break;
    			case "rastrojoCheck":
    				this.props.funcCheckRastrojo(valor);
    				this.render();
    			break;
    			case "diferidoCheck":
    				this.props.funcCheckDiferido(valor);
    				this.render();
    			break;
    		}
    	}

    handleSelectChange(e){
    	let valor = e.target.value;
    	this.props.funcSelectTipoCorral(valor);
    }

    generarEngorde(){
    	let tabs = this.loadTabs();
		let navs = this.loadTitles();
    	let engorde = this.props.esquema;
    	let paginaActual = this.props.esquema.paginaActual;
    	let checkGeneral = this.props.esquema.pagVariaciones[paginaActual].generalEnable;
    	let checkCuts = this.props.esquema.pagVariaciones[paginaActual].cutsEnable;
    	let checkVacias = this.props.esquema.pagVariaciones[paginaActual].vaciasEnable;
    	let rastrojoCheckLabel = "";
    	let diferidoCheckLabel = "";
    	let tipoCorralLabel = "";
    	if(checkGeneral && (checkCuts || checkVacias)){
    		if(engorde.pagVariaciones[paginaActual].tipoEngorde == "pasto"){
    				rastrojoCheckLabel = 
						
							<Col>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" id = "rastrojoCheck" 
					            onChange = {(e)=>this.handleCheckboxChange(e)}
					            onClick = {(e) => this.uncheck(e)}
					            checked = {engorde.pagVariaciones[paginaActual].rastrojoEnable}/>
					            Habilita el ingreso de recursos de rastrojo
					          </Label>
					        </FormGroup>
					        </Col>
						;
					diferidoCheckLabel = 
						
							<Col>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" id = "diferidoCheck" 
					            onChange = {(e)=>this.handleCheckboxChange(e)}
					            onClick = {(e) => this.uncheck(e)}
					            checked = {engorde.pagVariaciones[paginaActual].diferidoEnable}/>
					            Habilita el ingreso de recursos diferidos
					          </Label>
					        </FormGroup>
					        </Col>
						;
			}
			else {
				let selectValues = ["lw","bcs","lwBcs"];
				let selectTexts = ["Peso vivo", "Cond. Corporal","Cond. Corporal/Peso vivo"];
				tipoCorralLabel = 
					<FormGroup id= "centerLabel">
          				<Label for="medidaFeedlotSelect">Medida a utilizar :</Label>
							<Input type = "select" id = "tipoCorral" value = {engorde.pagVariaciones[paginaActual].feedlotType} onChange = {this.handleSelectChange}>
								{selectValues.map((object,index) => {
									return <option key ={index} value = {object} id = {index}> {selectTexts[index]}</option>
									}
								)}	
					  		</Input>
					</FormGroup>
					  	;
				}
    			return(<Container>
    				<Row id = "radios">
					    <FormGroup id="centerLabel" tag="fieldset">
				          <FormGroup check>
				            <Label check>
				              <Input type="radio" name="radio1" id="radio1"
				              		 checked={engorde.pagVariaciones[paginaActual].tipoEngorde == "pasto"} 
			                     	 onChange={(e)=>this.handleRadioChange(e)}
			                     	 onClick={(e)=>this.unselect(e)}
				                    />Realiza el engorde en pasto
				            </Label>
				          </FormGroup>
				          <FormGroup check>
				            <Label check>
				              <Input type="radio" name="radio1" id="radio2" 
				              		 checked={engorde.pagVariaciones[paginaActual].tipoEngorde == "corral"} 
			                     	 onChange={(e)=>this.handleRadioChange(e)}
			                     	 onClick= {(e)=>this.unselect(e)}
				                     />Realiza el engorde en corral
				            </Label>
				          </FormGroup>			          
				        </FormGroup>
				        </Row>

				        <Row id = "checkVariations">
				        	{rastrojoCheckLabel}
				        	{diferidoCheckLabel}
				        	{tipoCorralLabel}
				        </Row>
				        <Row>
							<TabMenu panels = { tabs }
							 		 navTexts = {navs} />
						</Row>
						</Container>);
			}
    	return ("");
    }

render() {
			
			let engorde = this.props.esquema;
			let paginaActual = this.props.esquema.paginaActual;

			return(
					<Container>
						<Row>
							<Col>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" id = "generalCheck" 
					             onChange = {(e)=>this.handleCheckboxChange(e)}
					             onClick = {(e) => this.uncheck(e)}
					             checked = {this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].generalEnable}/>{' '}
					            Habilitar regla de engorde para vacias y/o cuts
					          </Label>
					        </FormGroup>
					        </Col>
						</Row>
						<Row>
							<Col>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" id= "vaciasCheck"
					            onChange = {(e)=>this.handleCheckboxChange(e)}
					            onClick = {(e) => this.uncheck(e)}
					            checked = {this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].vaciasEnable}/>{' '}
					            Habilitar engorde de vacas vacias
					          </Label>
					        </FormGroup>
					       </Col>
					       <Col>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" id="cutsCheck" 
					            onChange = {(e)=>this.handleCheckboxChange(e)}
					            onClick = {(e) => this.uncheck(e)}
					            checked = {this.props.esquema.pagVariaciones[this.props.esquema.paginaActual].cutsEnable}/>{' '}
					            Habilitar engorde de CUTs
					          </Label>
					        </FormGroup>
					       </Col>
						</Row>					
						{this.generarEngorde()}
		 	 	   </Container>
		 	 	   );
		 	 	   }

}

export default ChildEngorde;