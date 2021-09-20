import React from "react";
import LogIn from "../../Forms/LogIn";
import FooterGuest from "../../Contents/FooterGuest";
import logInBg from "../../../Assets/images/Netflix-login-bg.jpeg";
import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";
const LogInScreen = () => {
  return (
    <div className="container-fluid bg-dark py-5- login-wrapper">
      <div className="login-wrapper-bg">
        <img id="logo" src={logInBg} alt="" />
      </div>

      <Navbar.Brand href="#home">
        <img className="logo" src={logo} alt="Netflix Logo" />
      </Navbar.Brand>

      <LogIn />
      <FooterGuest />
    </div>
  );
};

export default LogInScreen;
