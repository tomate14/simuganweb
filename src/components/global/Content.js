// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Assets
import logo from './images/logo.svg';
import opcionesMenu from '../../data/menu.js';
import './css/Content.css';

class Content extends Component {
  static propTypes = {
      body: PropTypes.object.isRequired
  };

  render() {
    
    const { body } =  this.props;

    return (
          <div className="conteiner-fluid">
            <Row sm={12}>
                <div className="col-sm-4 menu">
                     {
                      opcionesMenu && opcionesMenu.map(
                        (item, key) => <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>
                      )
                    }
                </div>
                <div className="col-sm-8">
                    { body }
                </div>
            </Row>
          </div>
    );
  }
}

export default Content;