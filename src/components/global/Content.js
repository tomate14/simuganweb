// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown, DropdownToggle,  DropdownMenu,  DropdownItem } from 'reactstrap';
import Simulacion from '../../data/simulacioninicial.js';
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
                                  //Si tengo algo dentro de los tags, muestro la opcion para cargar
                                  opcionesMenu && opcionesMenu.map((item, key) => 
                                    {                                    
                                      switch(item.url){
                                            case "/Destete":
                                              if(Simulacion.escenario.earlyWeaning != ""){
                                                if(Simulacion.escenario.earlyWeaning[0].earlyWeaningMob.length > 0){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                                }                                              
                                              }
                                              break;

                                            case "/RecursosForrajeros":
                                              
                                              if(Simulacion.escenario.pastureType[0] != ""){
                                                if(Simulacion.escenario.pastureType[0].pasture.length > 0){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                                }                                              
                                              }
                                              break;

                                            case "/Diferido":
                                              let aux3 = Simulacion.escenario.stockPilledType[0];
                                              if(Simulacion.escenario.stockPilledType[0] != ""){
                                                if(Simulacion.escenario.stockPilledType[0].stockPilled.length > 0){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                                }                                              
                                              }
                                              break;

                                            case "/Rastrojo":
                                              if(Simulacion.escenario.crop_stubbles[0] != ""){
                                                if(Simulacion.escenario.crop_stubbles[0].crop_stubble.length > 0){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                                }                                              
                                              }
                                            break;

                                            case "/Potreros":
                                              if(Simulacion.escenario.paddocks[0] != ""){
                                                if(Simulacion.escenario.paddocks[0].paddock.length > 0){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                                }                                              
                                              }
                                            break;

                                            case "/Ensilaje":
                                              if(Simulacion.escenario.makeSilage[0] != ""){
                                                    return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                              }
                                            break;

                                            case "/Invernada":                                              
                                              if(Simulacion.escenario.sellRule[0] != ""){
                                                  return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                              }
                                            break;

                                            case "/Engorde":                                              
                                              if(Simulacion.escenario.fattening[0] != ""){
                                                  return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                              }
                                            break;

                                            case "/Feedlot":
                                              //let aux6 = Simulacion.escenario.pastureType[0];
                                              return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                            break;

                                            case "/Mobs":
                                              //let aux7 = Simulacion.escenario.pastureType[0];
                                              return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                            break;

                                            case "/BuyRules":
                                             // let aux8 = Simulacion.escenario.pastureType[0];
                                             return <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>;
                                            break;

                                        }
                                    }

                                   
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