import React, { Component } from 'react';
import PropTypes from 'prop-types';

//bootstrap
import {Container,Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//components 
import Picker from '../Generales/Picker';
import SingleInput from '../Generales/SingleInput';
//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {modificarInputValueDestete,modificarInputValueServicio,modificarInputValuePesoServicio} from '../../actions/action-mobs.js';


class ServicioDestete extends Component {

	/*static propTypes = {
      selectOptions: PropTypes.array.isrequired
  };*/



	render(){
		console.log(this.props.mobs.valoresSimulacion);
		return(
			<Container fluid>
			<Row>
				<Col id = "simulationValues">
					<h5>Reposicion de vientres en c/Destete[0-100]% </h5>
					<h5><b>Carga simulación inicial: [{this.props.mobs.valoresSimulacion[this.props.mobs.dropdownSelected].$.repositionPercent}]</b></h5>
				</Col>
				<Col id = "simulationValues">
					<h5>Servicio a vaquillonas (meses) </h5>
					<h5><b>Carga simulación inicial: [{this.props.mobs.valoresSimulacion[this.props.mobs.dropdownSelected].$.service}]</b></h5>
				</Col>

				<Col id = "simulationValues">
					<h5>Peso minimo para ingreso a servicio[220-400]kg </h5>
					<h5><b>Carga simulación inicial: [{this.props.mobs.valoresSimulacion[this.props.mobs.dropdownSelected].$.minInServiceWeight}]</b></h5>
				</Col>
			</Row>
			<Row>
				<Col>

					<SingleInput funcModificar = {this.props.modificarInputValueDestete}
					   			 arrayVariaciones = {this.props.arrayDestete}
								 cantVariaciones = {this.props.mobs.cantVariaciones}
								 seccionElegida = {this.props.mobs.dropdownSelected} />
				</Col>
				<Col>
					<SingleInput funcModificar = {this.props.modificarInputValueServicio}
					   			 arrayVariaciones = {this.props.arrayServicio}
								 cantVariaciones = {this.props.mobs.cantVariaciones}
								 seccionElegida = {this.props.mobs.dropdownSelected} />
				</Col>
				<Col>
					<SingleInput funcModificar = {this.props.modificarInputValuePesoServicio}
					   			 arrayVariaciones = {this.props.arrayPesoServicio}
								 cantVariaciones = {this.props.mobs.cantVariaciones}
								 seccionElegida = {this.props.mobs.dropdownSelected} />
				</Col>
			</Row>
			</Container>
		);
	}
}

function mapStateToProps(state){
	console.log("mapStateToProps"+state);
    return {
        mobs: state.mobs
    };
}

function matchDispatchToProps(dispatch){
	console.log("matchDispatchToProps");
    return bindActionCreators({ modificarInputValueDestete : modificarInputValueDestete,modificarInputValueServicio : modificarInputValueServicio, modificarInputValuePesoServicio : modificarInputValuePesoServicio}, dispatch);
    
}

export default connect(mapStateToProps, matchDispatchToProps)(ServicioDestete);