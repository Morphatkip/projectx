import React from "react";
import ClickedProductDetails from "../components/ClickedProductDetails";
import NavBarDown from "../components/Navbar/NavBarDown";
import NavbarTop from "../components/Navbar/NavbarTop";

function Item({ name, imgPath, description }) {
  return (
    <div className="container">
      <NavbarTop />
      <NavBarDown />
      <ClickedProductDetails
        name={name}
        imgPath={imgPath}
        description={description}
      />
    </div>
  );
}

export default Item;
