// Dependencies
import React, { Component } from 'react';

import { Container,Row } from 'reactstrap';

//redux 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {finalizarOperacion} from '../../actions/action-logout.js';

import './css/PantallaFin.css';

class PantallaFin extends Component {

  finalizarGeneracion(logout){
    console.log(this.props);
    if(logout.logueado){
      this.props.finalizarOperacion();
    }
    return(
        <Container className = "90vh">
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
