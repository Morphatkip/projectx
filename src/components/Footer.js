import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="mt-3 mb-4">
      <div style={{ backgroundColor: "whitesmoke" }}>
        <footer className="container">
          <div className="pt-5"></div>
          <p className="float-end">
            <button onClick={scrollToTop}>Back to top</button>
          </p>
          <p>
            &copy; &middot; <Link to="/privacy">Privacy</Link> &middot;{" "}
            <Link to="/privacy">Terms</Link>
          </p>
          <div className="pt-5"></div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
