import React from 'react';
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="NavContainer">
        <div className="NavLogo"></div>
        <div className="NavSlogan"><h3>Tu película favorita, ahora en casa.</h3></div>
      </div>

      // <div className="NavLogoContainer">
      // </div>
      // <div>
      //   <h3>Tu película favorita, ahora en casa.</h3>
      // </div>

    );
  }
}

export default Navbar;
