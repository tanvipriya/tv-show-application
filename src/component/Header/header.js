import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar";
import Logo from "../../images/logo.jpeg";

function Header(props) {
  return (
    <div>
      <div className={`${props.classname}-heading-container`}>
        <span className="logo-holder">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </span>
        <span className="search-holder">
          <Navbar />
        </span>
      </div>
    </div>
  );
}

export default Header;
