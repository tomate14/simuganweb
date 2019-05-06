// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {generarSalidaRest} from '../../finalizar.js';
import { Row, Col,Container, Button, Label } from 'reactstrap';
import { FaDrupal } from 'react-icons/fa';
// Assets
import './css/User.css';

class User extends Component {


    render() {
      return (
          <Container className="UserInfo">
              <Row className="UserInfoRow">
                  <Col className="h-100" sm={10}>  

                  </Col>
                  <Col className="UserInfoPanel h-100" sm={2}>
                    <Row>
                        <Col sm={8} className="UserNameContainer pt-1">
                            <Row className="h-100 w-100">
                                <Col sm={3}>
                                    <FaDrupal></FaDrupal>
                                </Col>
                                <Col sm={9}>
                                    <Label className="Username">Pancho Gato</Label>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} className="PanelBtnFinalizar pl-0 pr-0">
                            <Button className="btnFinalizar h-100 w-100" onClick={generarSalidaRest}>Finalizar</Button>
                        </Col>
                    </Row>                    
                  </Col>
              </Row>
          </Container>
      );
    }
  }
  
  export default User;