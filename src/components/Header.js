//import react
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/sekangi-logo.PNG";
import Navbar from "./Navbar";

export const HeaderTop = () => {
  return (
    <div className="header-top">
      <div>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <p>info@sekangi.com</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <p>+254-733-986-558</p>
      </div>
    </div>
  );
};

export const HeaderLinks = () => {
  return (
    <div className="header-links">
      <Link to="/" className="logo-section">
        <img src={Logo} alt="sekangi logo" />
        <h1>Sekangi Computers</h1>
      </Link>
      <Link to="/shop">
        <p>Shop</p>
      </Link>
      <Link to="/aboutus">
        <p>About us</p>
      </Link>
      <Link to="/contactus">
        <p>Contact us</p>
      </Link>
      <Link to="/shop">
        <button>Explore</button>
      </Link>
    </div>
  );
};
export const Header = () => {
  return (
    <div>
      <div className="ht">
        <HeaderTop />
      </div>
      <Navbar />
    </div>
  );
};
