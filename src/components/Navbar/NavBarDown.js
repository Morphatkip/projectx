import React, { useEffect, useState } from "react";
import "../../Styles/Navbar.css";
import searchIcon from "../../images/icons/SearchIcon.png";
import CartIcon from "../../images/icons/CartIcon.png";
import "../../Styles/Navbar.css";
function NavBarDown({ handleChange, setSearchField }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <div className="navbar navbar-light bg-light d-flex justify-content-center">
        <form>
          <input
            type="text"
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
          <button type="submit">
            <img src={searchIcon} alt="search icons" />
          </button>
        </form>

        <span className="mx-10">
          <img src={CartIcon} alt="cartIcon"></img>
          <sup>1</sup>
          {/* to be updated by the number of items in cart */}
        </span>
      </div>
    </div>
  );
}

export default NavBarDown;
