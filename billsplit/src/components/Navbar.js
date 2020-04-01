import React from "react";
import Navlink from './Navlink'
const Navbar = () => {

  return (
    <div className="ui inverted  large segment">
      <div className="ui inverted large secondary pointing menu">
        <div className="ui header small item">Bill Split</div>
        <Navlink  to="/" >Home</Navlink>
        <Navlink to="/calculator" >Calculator</Navlink>
      </div>
    </div>
  );
};

export default Navbar;
