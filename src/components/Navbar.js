import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-links">
      <ul>
        <li>View Properties</li>
        <li>Add Properties</li>
        <li>Search </li>
      </ul>
      <div>
        <image src="./logo.png" alt="nav" />
      </div>
    </div>
  );
};
export default Navbar;
