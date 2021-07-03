import React from "react";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="80" height="60" />
      <h1>Samarth Keep</h1>
    </div>
  );
};

export default Header;
