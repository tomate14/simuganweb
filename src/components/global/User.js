// Dependencies
import React, { Component } from 'react';
import { Row, Col,Container, Button, Label } from 'reactstrap';
import { FaDrupal } from 'react-icons/fa';
// Assets
import './css/User.css';

class User extends Component {
    constructor(props){
        super(props);
        this.username = props.username;
    }



    render() {
      return (
          <Container id="UserInfo" className="UserInfo">
              <Row className="UserInfoRow">
                  <Col className="h-100" sm={10}>  

                  </Col>
                  <Col className="UserInfoPanel h-100" sm={2}>
                    <Row>
                        <Col sm={12} className="UserNameContainer pt-1">
                            <Row className="h-100 w-100">
                                <Col sm={3}>
                                    <FaDrupal></FaDrupal>
                                </Col>
                                <Col sm={9}>
                                    <Label className="Username">{this.username}</Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>                    
                  </Col>
              </Row>
          </Container>
      );
    }
  }

export default User;