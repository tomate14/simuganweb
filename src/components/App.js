
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Simulacion from '../data/simulacioninicial.js';

//Estado
import {finalizarOperacion} from '../actions/action-logout.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Components
import Header from './global/Header';
import User from './global/User.js';
import Content from './global/Content.js';
import Footer from './global/Footer.js';

import './App.css';
//import logo from './logo.svg';

class App extends Component {
  static propTypes = {
  		children: PropTypes.object.isRequired
  };

  conMenu(logout,children){
    if(logout.logueado){
      return(
          <div className="App">
            <Header />
            <User username={Simulacion.escenario.$.name}/>
            <Content body={children}/>
            <Footer />
          </div>
      );
    }else{
      return(
        <div className="App">
            <Header />
            <Content body={children}/>
            <Footer />
          </div>
      );
    }
  }
  render() {
    const { children } = this.props;
    let logout = this.props.logout;
    return (      
          this.conMenu(logout,children)
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

export default connect(mapStateToProps, matchDispatchToProps)(App);

