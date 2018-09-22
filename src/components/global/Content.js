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

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    const { body } =  this.props;

    return (
          <div className="container-fluid">
            <Row md={12}>
                <Col md={4}>
                     <Navbar color="light" light>
                      <NavbarBrand className="mr-auto">Menu de opciones</NavbarBrand>
                      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                      <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                           {
                            opcionesMenu && opcionesMenu.map(
                              (item, key) => <NavItem key={key}><NavLink href={item.url}>{item.title}</NavLink></NavItem>
                            )
                          }
                        </Nav>
                      </Collapse>
                    </Navbar>
                </Col>
                <Col md={8}>
                    { body }
                </Col>
            </Row>
            
          </div>
    );
  }
}

export default Content;