// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap'

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
 /* static propTypes = {
    title: PropTypes.string.isRequired//,
    //items: PropTypes.array.isRequired
  };*/

  render() {
    //const { title, items } = this.props;
    return (
            <div className="row">
                <div className="col-sm-2">
                    <img id="Logo" src={logo}/>
                </div>
                <div className="col-sm-8">
                    <h1>Simulador Ganadero</h1>     
                    <h2>Configuracion de simulaciones conjuntas</h2></div>
                <div className="col-sm-2">
                    <img id="Logo" src={logo}/>
                </div>
            </div>
         
    );
  }
}

export default Header;