import React from "react";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import NavbarTop from "../components/Navbar/NavbarTop";
import "../Styles/Home.css";

function Home({ setProductDetails }) {
  return (
    <div className="container body">
      <NavbarTop />

      <Contents setProductDetails={setProductDetails} />
      <Footer />
    </div>
  );
}

export default Home;
