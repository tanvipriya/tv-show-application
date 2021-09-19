import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Header/header.css";

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li className="active">
          <Link to="/drama">Drama</Link>
        </li>
        <li>
          <Link to="/comedy">Comedy</Link>
        </li>
        <li>
          <Link to="/action">Action</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
