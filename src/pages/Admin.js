import React from "react";
import Admincontents from "../components/Admin/Admincontents";
import NavBarDown from "../components/Navbar/NavBarDown";
import NavbarTop from "../components/Navbar/NavbarTop";

export default function Admin() {
  return (
    <div>
      <NavbarTop />
      <NavBarDown />
      <Admincontents />
    </div>
  );
}
