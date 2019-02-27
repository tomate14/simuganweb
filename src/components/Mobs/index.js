import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row, Form, FormGroup, Label, Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


//components 
//import MobContent from './mobContent';
import ContentOption from '../Generales/ContentOption';
import Picker from '../Generales/Picker';
import TabMenu from '../Generales/TabMenu';
import PasturePane from '../Generales/PasturePane';
import MobsInputVariations from './MobsInputVariations';
import ChildWeaning from './ChildWeaning';

//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {permitirVariaciones,modificarVariaciones,modificarDropdownSelected,
        modificarPagina,modificarConfGenerales, 
        modificarPasturaGeneral,
        modificarGranoGeneral,
        modificarEnsilajeGeneral,
        modificarRastrojoGeneral,
    	modificarDiferidoGeneral,
    	modificarWeaningPastura,
        modificarWeaningGrano,
        modificarWeaningEnsilaje,
        modificarWeaningRastrojo,
    	modificarWeaningDiferido,
    	modificarSubMobs,
    	permitirDiferidos,
    	permitirRastrojo,
    	permitirDiferidosWeaning,
    	permitirRastrojoWeaning} from '../../actions/action-mob.js';



//estilos
import './css/index.css'; 

class Mobs extends Component {

   constructor(){
		super();
		//this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
	  	this.loadTabs = this.loadTabs.bind(this);
   		this.loadTitles = this.loadTitles.bind(this);
   		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
   		this.uncheck = this.uncheck.bind(this);
	}
 

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

	getMonth(numeroMes){
		  switch(numeroMes){
		    case 0:
		        return "January";
		        break;
		    case 1:
		        return "February";
		        break;
		    case 2:
		        return "March";
		        break;
		    case 3:
		        return "April";
		        break;
		    case 4:
		        return "May";
		        break;
		    case 5:
		        return "June";
		        break;
		    case 6:
		        return "July";
		        break;
		    case 7:
		        return "August";
		        break;
		    case 8:
		        return "September";
		        break;
		    case 9:
		        return "October";
		        break;
		    case 10:
		        return "November";
		        break;
		    case 11:
		        return "December";
		        break;
		  }
	}

    generarArraySimulacion(ObjetoInicial){
    	let array   = [];
    	for(let y = 0; y<12; y++){
    		let month = this.getMonth(y);
            let ObjetoMes = {};
    		ObjetoMes.value = parseFloat(ObjetoInicial[month]); 
            ObjetoMes.month   = month;
            array.push(ObjetoMes);
    	}

    	return array;
        
        
    }

    loadTabsWeaning(){
		const mobs = this.props.mobs;
		const pagina = mobs.arrayMobs[mobs.dropDownSelected].pagActual -1;
		const arrayValoresPastura     = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].weaning_mob[0].pastureAllow[0].$);
		const arrayValoresSilageAllow = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].weaning_mob[0].silageAllow[0].$);
		const arrayValoresGrainAllow  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].weaning_mob[0].grainAllow[0].$);

		let array = [];
		array = 		[<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.pastureAllow}
										arregloSimulacion  = {arrayValoresPastura}
										funcModifVariacion = {this.props.modificarWeaningPastura}
										min = {0}
										max = {25}
										//funcModifPagina    = {this.props.modificarPaginaPasture} 
										/>,

						<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.silageAllow}
										arregloSimulacion  = {arrayValoresSilageAllow}
										funcModifVariacion = {this.props.modificarWeaningEnsilaje}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaGrain} */
										/>,

						<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.grainAllow}
										arregloSimulacion  = {arrayValoresGrainAllow}
										funcModifVariacion = {this.props.modificarWeaningGrano}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaSilage} */
										/> ];
		if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.cropStubbleEnable){
			const arrayValoresCropStubble  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].weaning_mob[0].crop_stubbleAllow[0].$);		
			array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.cropAllow}
										arregloSimulacion  = {arrayValoresCropStubble}
										funcModifVariacion = {this.props.modificarWeaningRastrojo}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaRastrojo} *//> );
		}
		if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.stockPilledEnable){
			const arrayValoresStockPilled  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].weaning_mob[0].stockPilledAllow[0].$);
			array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.stockAllow}
										arregloSimulacion  = {arrayValoresStockPilled}
										funcModifVariacion = {this.props.modificarWeaningDiferido}
										min = {0}
										max = {3}
										/*funcModifPagina    = {this.props.modificarPaginaDiferidos} *//> );
		}
		
		return array;
	}

	loadTitlesWeaning(pagina){
			const mobs = this.props.mobs;
			let array = ["Configuracion de Pastura", "Configuracion de Grano","Configuracion de Ensilaje"];	
			if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.cropStubbleEnable){
				array.push("Configuracion de Rastrojo");
			}
			if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs.stockPilledEnable){
				array.push("Configuracion de Diferidos");
			}

		return array;
	}
	loadTabsSubMobs(mobs,pagina){
			let array = [];
			let SubMobs = mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].submobs;
			for(let i = 0; i < SubMobs.length; i++){
				console.log("Objeto array de valores submob "+SubMobs[i].valores);
				array.push(
							<MobsInputVariations 
										atributo = {i}
										array  = {SubMobs[i].valores}
										textos = {SubMobs[i].variables}
										funcion = {this.props.modificarSubMobs}
										minArray = {[2,1,0,0,0,0,0]}
										maxArray = {[10,1500,-1,-1,-1,-1,-1]}
					         />

					);
			}
			return array;
	}
	loadTitlesSubMobs(mobs,pagina){
			let array = [];	
			let SubMobs = mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].submobs;
			for(let i = 0; i < SubMobs.length; i++){
				array.push(SubMobs[i].nombre);
			}
			

		return array;
	}
	loadTabs(){
		const mobs = this.props.mobs;
		const pagina = mobs.arrayMobs[mobs.dropDownSelected].pagActual -1;
		const arrayValoresPastura     = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].pastureAllow[0].$);
		const arrayValoresSilageAllow = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].silageAllow[0].$);
		const arrayValoresGrainAllow  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].grainAllow[0].$);

		let array = [];
		//Se agrega un submob por defecto que no se va a usar para esta tab
		array.push( <MobsInputVariations 
							array  = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].paramGenerales}
							textos = {["Servicio a Vaquillona [meses]","Reposicion de Vientres","Peso Minimo de Ingreso"]}
							atributo ={"ConfGenerales"}
							funcion = {this.props.modificarConfGenerales}
							minArray = {[0,0,220]}
							maxArray = {[-1,100,400]} 
			         />);

		let TabPanesSubMobs = this.loadTabsSubMobs(mobs,pagina);
		let navTextsSubMobs = this.loadTitlesSubMobs(mobs,pagina);

		array.push(<TabMenu panels = { TabPanesSubMobs }
						 		 navTexts = {navTextsSubMobs}
						 		 clase    = "claSubMobs"
					   />);
		
		array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].pastureAllow}
										arregloSimulacion  = {arrayValoresPastura}
										funcModifVariacion = {this.props.modificarPasturaGeneral}
										min = {0}
										max = {25}
										//funcModifPagina    = {this.props.modificarPaginaPasture} 
										/>);

		array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].silageAllow}
										arregloSimulacion  = {arrayValoresSilageAllow}
										funcModifVariacion = {this.props.modificarEnsilajeGeneral}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaGrain} */
										/>);
		array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].grainAllow}
										arregloSimulacion  = {arrayValoresGrainAllow}
										funcModifVariacion = {this.props.modificarGranoGeneral}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaSilage} */
										/>);

		if(this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].rastrojoEnable){
			const arrayValoresCropStubble  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].crop_stubbleAllow[0].$);		
			array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].cropAllow}
										arregloSimulacion  = {arrayValoresCropStubble}
										funcModifVariacion = {this.props.modificarRastrojoGeneral}
										min = {0}
										max = {2.5}
										/*funcModifPagina    = {this.props.modificarPaginaRastrojo} *//> );
		}
		if(this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].diferidosEnable){
			const arrayValoresStockPilled  = this.generarArraySimulacion(mobs.valoresSimulacion[mobs.dropDownSelected].stockPilledAllow[0].$);
			array.push(<PasturePane 	cantVariaciones    = {1}
										paginaActual       = {1}
										esEngorde    = {false}
										arregloValores     = {mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].stockAllow}
										arregloSimulacion  = {arrayValoresStockPilled}
										funcModifVariacion = {this.props.modificarDiferidoGeneral}
										min = {0}
										max = {3}
										/*funcModifPagina    = {this.props.modificarPaginaDiferidos} *//> );
		}
		if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs != " "){


			let TabPanes2 = this.loadTabsWeaning();
			let navTexts2 = this.loadTitlesWeaning(pagina);
			array.push(<ChildWeaning
							permitirDiferidosWeaning = {this.props.permitirDiferidosWeaning}
							permitirRastrojoWeaning = {this.props.permitirRastrojoWeaning}
							panels = { TabPanes2 }
						 	navTexts = {navTexts2}
						 	clase    = "claSecundaria"
						 	mobs = {this.props.mobs}
						/>);
		}
		return array;
	}

	loadTitles(){
			let mobs = this.props.mobs;
			let pagina = mobs.arrayMobs[mobs.dropDownSelected].pagActual-1;
			let array = ["Configuracion General","SubMobs","Configuracion de Pastura", "Configuracion de Ensilaje","Configuracion de Grano"];	
			if(this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].rastrojoEnable){
				array.push("Configuracion de Rastrojo");
			}
			if(this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].diferidosEnable){
				array.push("Configuracion de Diferidos");
			}
			if(mobs.arrayMobs[mobs.dropDownSelected].pagvariaciones[pagina].weaningMobs != " "){
				array.push("Weaning");
			}

		return array;
	}
	
    	handleCheckboxChange(e){
    		let seleccion = e.target.id;
    		let valor = false;
    		let mob;
    		let pagina;
    		switch(seleccion){
    			case "diferidosCheck":
    				console.log("diferido check");
    				mob = this.props.mobs.dropDownSelected;
    				pagina = this.props.mobs.arrayMobs[mob].pagActual - 1;
    				valor =  this.props.mobs.arrayMobs[mob].pagvariaciones[pagina].diferidosEnable == false;
    				this.props.permitirDiferidos(valor);
    				this.render();
    			break;
    			case "rastrojosCheck":
    				mob = this.props.mobs.dropDownSelected;
    				pagina = this.props.mobs.arrayMobs[mob].pagActual - 1;
    				valor =  this.props.mobs.arrayMobs[mob].pagvariaciones[pagina].rastrojoEnable == false;
    				console.log("handler-rastrojo "+ valor );
    				this.props.permitirRastrojo(valor);
    				this.render();
    			break;
    		}
    	}

	uncheck(e){
		    let seleccion = e.target.id;
    		let valor = e.target.checked;
    		switch(seleccion){
    			case "diferidosCheck":
    				this.props.permitirDiferidos(valor);
    				this.render();
    			break;
    			case "rastrojosCheck":
    				console.log("uncheck-rastrojo "+ valor);
    				this.props.permitirRastrojo(valor);
    				this.render();
    			break;

		}
	}

    generarTabs(mobs){
    	if(mobs.permitido){
			if(mobs.cantVariaciones > 0){
				let TabPanes = this.loadTabs();
				let navTexts = this.loadTitles();
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
							<Row id="checkboxesMobs">
							<Col>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" id="diferidosCheck" 
							            onClick = {(e)=>this.handleCheckboxChange(e)}
							            onChange = {(e) => this.uncheck(e)}
							            checked = {this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].diferidosEnable}/>{' '}
							            Habilitar Diferidos	
									</Label>
								</FormGroup>
							</Col>
							<Col>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" id="rastrojosCheck" 
						            onClick = {(e)=>this.handleCheckboxChange(e)}
						            onChange = {(e) => this.uncheck(e)}
						            checked = {this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagvariaciones[this.props.mobs.arrayMobs[this.props.mobs.dropDownSelected].pagActual - 1].rastrojoEnable}/>{' '}
						            Habilitar Rastrojo
								</Label>
							</FormGroup>
							</Col>	
						</Row>

						<TabMenu panels = { TabPanes }
						 		 navTexts = {navTexts}
						 		 clase    = "claPrincipal"
						/>


		    		</Container>
		    	);
		    }
		}
    }


	render(){

        let mobs = this.props.mobs;
        
		return(
			<div>
				<Row className="parameterTitle">
					<Col sm={12}>
						<h1 className="titulo">Configuraciones de los Mobs </h1>
					</Col>
				</Row>
				<Row>
				<ContentOption state = {mobs} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/>
				</Row>
				{this.generarTabs(mobs)}
				
				
			</div>
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
    	                       modificarDropdownSelected:modificarDropdownSelected, modificarPagina:modificarPagina,
    	                       modificarConfGenerales:modificarConfGenerales,
    	                       modificarPasturaGeneral:modificarPasturaGeneral,
    	                       modificarGranoGeneral:modificarGranoGeneral,
    	                       modificarEnsilajeGeneral:modificarEnsilajeGeneral,
    	                       modificarRastrojoGeneral:modificarRastrojoGeneral,
    	                       modificarDiferidoGeneral:modificarDiferidoGeneral,
    	                       modificarWeaningPastura:modificarWeaningPastura,
    	                       modificarWeaningGrano:modificarWeaningGrano,
    	                       modificarWeaningEnsilaje:modificarWeaningEnsilaje,
    	                       modificarWeaningRastrojo:modificarWeaningRastrojo,
    	                       modificarWeaningDiferido:modificarWeaningDiferido,
    	                       modificarSubMobs:modificarSubMobs,
    	                       permitirDiferidos: permitirDiferidos,
    	                       permitirRastrojo: permitirRastrojo,
    	                       permitirDiferidosWeaning: permitirDiferidosWeaning,
    	                       permitirRastrojoWeaning: permitirRastrojoWeaning }, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Mobs);