import React, { Component } from 'react'

import '../App.css';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>^Eternal Mangekyō Sharingan</h2>
      </div>
    );
  }
}

export default Header