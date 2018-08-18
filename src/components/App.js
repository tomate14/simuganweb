import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './global/Header';
import Content from './global/Content.js';
import Footer from './global/Footer.js';
import './App.css';
//import logo from './logo.svg';

class App extends Component {
  static propTypes = {
  		children: PropTypes.object.isRequired
  };

  render() {
  	const { children } = this.props;
    return (
      <div className="App">
          <Header />
          <Content body={children}/>
          <Footer />
      </div>
    );
  }
}

export default App;
