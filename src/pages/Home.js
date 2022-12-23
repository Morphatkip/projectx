import React from "react";
import Contents from "../components/Contents";
import NavBarDown from "../components/Navbar/NavBarDown";
import NavbarTop from "../components/Navbar/NavbarTop";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <NavbarTop />
      <NavBarDown />
      <Contents />
    </div>
  );
}

export default Home;
