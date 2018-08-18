// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
   /* 
     */
    return (
          <div className="Header">
            <div className="Logo">
                <img src={logo}/>         
            </div>
            <div className="Titulo">
                <h1>Simulador Ganadero</h1>     
                <h2>Configuracion de simulaciones conjuntas</h2>
            </div>
             <div className="Logo2">
                <img src={logo}/>         
            </div>
          </div>
    );
  }
}

export default Header;