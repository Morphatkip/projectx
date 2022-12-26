import React from "react";
import Contents from "../components/Contents";
import NavBarDown from "../components/Navbar/NavBarDown";
import NavbarTop from "../components/Navbar/NavbarTop";

function Home({ setProductDetails }) {
  const handleChange = () => {};
  return (
    <div className="container">
      <NavbarTop />
      <NavBarDown />
      <Contents setProductDetails={setProductDetails} />
    </div>
  );
}

export default Home;
