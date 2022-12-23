import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";
function NavbarTop() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {" "}
          Norov Technologies
        </Link>
        <div className="topnav-right">Account</div>
      </nav>
    </div>
  );
}

export default NavbarTop;
