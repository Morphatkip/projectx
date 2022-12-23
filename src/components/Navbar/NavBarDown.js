import React from "react";
import "../../Styles/Navbar.css";
import searchIcon from "../../images/icons/SearchIcon.png";
import CartIcon from "../../images/icons/CartIcon.png";
function NavBarDown() {
  return (
    <div>
      <div className="navbar navbar-light bg-light d-flex justify-content-center">
        <form>
          <input type="text" />
        </form>
        <button type="submit">
          <img src={searchIcon} alt="search icons" />
        </button>
        <span>
          <img src={CartIcon} alt="cartIcon"></img>
          <sup>1</sup>
          {/* to be updated by the number of items in cart */}
        </span>
      </div>
    </div>
  );
}

export default NavBarDown;
