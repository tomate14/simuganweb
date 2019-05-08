
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Footer.css';

class Footer extends Component {
  /*static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };*/

  render() {
    const { title, items } = this.props;

    return (
      <div id="Footer" className="Footer">
        <div className="">
           <h6> Simulador Ganadero| Facultad Cs Veterinarias | UNICEN Universidad Nacional del Centro de la Provincia de Bs As. Tel (0249) 4439850 int 223 e-mail. simugan@gmail.com </h6>
        </div>
      </div>
    );
  }
}



export default Footer;