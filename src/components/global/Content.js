// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <div className="Content">
        <div className="Contenido">
               <div className="menu">
                {
                  opcionesMenu && opcionesMenu.map(
                    (item, key) => <ul className="filaMenu" key={key}><Link to={item.url}>{item.title}</Link></ul>
                  )
                }
              </div>
              <div className="contenido">
                  { body }
              </div>
        </div>
      </div>
    );
  }
}

export default Content;