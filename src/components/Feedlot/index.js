import React, { Component } from 'react';

//components
import ContentOption from '../Generales/ContentOption';
import ContentInputSpam from '../Generales/ContentInputSpam';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Container,Col, Row, Button} from 'reactstrap';
import {permitirVariaciones,modificarVariaciones,modificarPagina,InputVariacionSalida,InputVariacionEngorde} from '../../actions/action-feedlot.js';



//Estilos
import './css/index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


class Feedlot extends Component {

	constructor(){
		super();
		//this.handleInputValueChange = this.handleInputValueChange.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
		this.handleClickUp = this.handleClickUp.bind(this);
		
	}

	handleClickUp(){
		if(this.props.feedlot.paginaActual < this.props.feedlot.cantVariaciones){
			this.props.modificarPagina(this.props.feedlot.paginaActual+1);	
		}
		//this.setState({paginaActual : this.state.paginaActual + 1})
	}
	handleClickDown(){
		if(this.props.feedlot.paginaActual > 1){
			this.props.modificarPagina(this.props.feedlot.paginaActual-1);	
		}
	}

	generarContenido(feedlot){
		if(feedlot.permitido){
			if(feedlot.cantVariaciones > 0){
				return (
					<div>					
						<Row>
							<br/>
						</Row>
						<Row xs={12}>
							<Col md={4}/>
							<Col xs={1} className="divFlechas">					
								<Button outline color="secondary" onClick={this.handleClickDown}>
									<FaAngleLeft />
								</Button>{' '}
								
							</Col>
							<Col xs={2}>
								<p className="labelPagina"><b><i><font size="3">Pagina: {this.props.feedlot.paginaActual}</font></i></b></p>
							</Col>
							<Col xs={1}className="divFlechas">
								<Button outline color="secondary" onClick={this.handleClickUp}>
									<FaAngleRight />
								</Button>{' '}
								
							</Col>
							<Col md={4}/>
						</Row>
							
						<Row md={12}>
							<ContentInputSpam state={feedlot} 
							                funcSalida  = {this.props.InputVariacionSalida}
							                pagina      = {feedlot.paginaActual - 1}
							                funcEngorde = {this.props.InputVariacionEngorde}/>
						</Row>

					</div>
			);
			}
		}
	}

	render(){
		const feedlot = this.props.feedlot;
		return(
			<Container>
				<Row>
					<Col><ContentOption state = {feedlot} 
										funcPermitir = {this.props.permitirVariaciones}
										funcVariaciones = {this.props.modificarVariaciones}/></Col>
				</Row> 
				
			    {this.generarContenido(feedlot)}
		  	</Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        feedlot: state.feedlot
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({permitirVariaciones: permitirVariaciones,modificarVariaciones : modificarVariaciones,modificarPagina:modificarPagina, InputVariacionSalida:InputVariacionSalida, InputVariacionEngorde:InputVariacionEngorde}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(Feedlot);