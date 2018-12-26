// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col,Container } from 'reactstrap'

// Assets
import logo from './images/logo.svg';
import unicen from './images/unicen.jpg';
import './css/Header.css';

class Header extends Component {
 /* static propTypes = {
    title: PropTypes.string.isRequired//,
    //items: PropTypes.array.isRequired
  };*/

  render() {
    //const { title, items } = this.props;
    return (
        <Container>
            <Row sm={12}>
                <Col sm={2}>
                    <img id="Unicen" src={unicen}/>
                </Col>
                <Col sm={8}>
                    <h1>Simulador Ganadero</h1>     
                    <h2>Configuracion de simulaciones experimentales</h2>
                </Col>
                <Col sm={2}>
                    <img id="Logo" src={logo}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Header;