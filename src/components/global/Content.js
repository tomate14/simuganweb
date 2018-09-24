// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown, DropdownToggle,  DropdownMenu,  DropdownItem } from 'reactstrap';

// Assets
import logo from './images/logo.svg';
import opcionesMenu from '../../data/menu.js';
import './css/Content.css';

class Content extends Component {
  static propTypes = {
      body: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);


  }


  render() {

    const { body } =  this.props;

    return (
                    <div className="container-fluid">
                        <Row sm={12}>
                            <Col sm={4} className="menu">
                              {
                                  opcionesMenu && opcionesMenu.map(
                                    (item, key) => <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>
                                  )
                                }
                            </Col>
                            <Col sm = {8}>
                                { body }
                            </Col>
                        </Row>
                    </div>

    );
  }
}

export default Content;