import React from "react";
import Navlink from './Navlink'
import moneylogo from '../assets/money.png'
const Navbar = () => {

  return (
    <div className="ui inverted  large segment">
      <div className="ui inverted  secondary  menu">
        <div className="ui header small item"><img className="billsplitlogo" alt="billsplitlogo" src={moneylogo} />Bill Split</div>
        <Navlink to="/" >Home</Navlink>
        <Navlink to="/calculator" >Calculator</Navlink>
      </div>
    </div>
  );
};

export default Navbar;
