import React from 'react';
import logo1 from '../pokemon-logo.png';
import logo2 from '../poke-dribbble.png';
import '../App.css';

const Header = () => {
  return(
    <div>
      <div className="App-header">
        <img src={logo1} className="App-logo-static" alt="pokemon logo" />
        <img src={logo2} className="App-logo" alt="pokeball logo" />
        <h2>Welcome to Hacktéévmon</h2>
      </div>
    </div>
  );
}

export default Header
