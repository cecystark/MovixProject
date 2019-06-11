import React from 'react';
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      // <div className="NavContainer">
      //   <div className="NavLogo"></div>
      //   <div className="NavSlogan"><h3>Tu película favorita, ahora en casa.</h3></div>
      // </div>

    <div className="NavContainer">
      <div className="NavLogoContainer row">
        <div className="NavLogo "></div>
      </div>
      <div className="NavSlogan row col-xs-6 col-sm-12 col-lg-6 col-md-12">
        <h3>Tu película favorita, ahora en casa.</h3>
      </div>
      </div>

    );
  }
}

export default Navbar;
