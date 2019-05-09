// Dependencies
import React, { Component } from 'react';

import { Container,Row } from 'reactstrap';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {finalizarOperacion} from '../../actions/action-logout.js';
import {generarSalidaRest} from '../../finalizar.js';

import './css/PantallaFin.css';

class PantallaFin extends Component {


  calcularTamañoContenido(){
    let heightTotal = document.documentElement.clientHeight;
    let heightHeader = document.getElementById('Header').clientHeight;
    let heightUser = document.getElementById('UserInfo').clientHeight;
    let heightFooter = document.getElementById('Footer').clientHeight;
    let diferencia = heightTotal - heightFooter - heightHeader - heightUser +20;

    return diferencia;
  }

  finalizarGeneracion(logout){
    if(logout.logueado){
      this.props.finalizarOperacion();
      generarSalidaRest();
    }
   
    let style = {
      height : this.calcularTamañoContenido()
    }
    
    return(
        <Container className ="" style={style}>
            <h1>Gracias por usar Simugan 2</h1>
        </Container> 
      );
  }
  render() {
      const logout = this.props.logout;
    return (
      this.finalizarGeneracion(logout)  
          );
  }
}
function mapStateToProps(state){
  return {
      logout: state.logout
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({finalizarOperacion : finalizarOperacion}, dispatch);
  
}

export default connect(mapStateToProps, matchDispatchToProps)(PantallaFin);
