import React from 'react';
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavBar_back"></div>
        <div className="NavBar_back">
          <h3>Tu película favorita, ahora en casa.</h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
