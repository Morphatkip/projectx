import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";
function NavbarTop() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand mx-4" to="/">
          {" "}
          Norov Technologies
        </Link>
        <div className="topnav-right mx-4">Account</div>
      </nav>
    </div>
  );
}

export default NavbarTop;
