
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Simulacion from '../data/simulacioninicial.js';

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

  render() {
  	const { children } = this.props;
    return (
      <div className="App">
          <Header />
          <User username={Simulacion.escenario.$.name}/>
          <Content body={children}/>
          <Footer />
      </div>
    );
  }
}

export default App;
