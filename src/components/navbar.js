import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand mx-5">
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
