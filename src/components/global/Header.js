// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col,Container } from 'reactstrap'

// Assets
import logo from './images/LOGO2.png';
import unicen from './images/Logo.png';
import './css/Header.css';

class Header extends Component {
 /* static propTypes = {
    title: PropTypes.string.isRequired//,
    //items: PropTypes.array.isRequired
  };*/

  render() {
    //const { title, items } = this.props;
    return (
        <Container className= "Header">
            <Row>
                <Col sm={2}>
                    <img id="Unicen" src={logo}/>
                </Col>
                <Col className="tituloHeader" sm={8}>
                    <h1>Simulador Ganadero</h1>     
                    <h6>Configuración de simulaciones experimentales</h6>
                </Col>
                <Col sm={2}>
                    <img id="Logo" src={unicen}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Header;