import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Surreal Estate</h1>
      <h2>
        <ul className="navbar-links">
          <li>
            <Link href="/view-properties">View Properties</Link>
          </li>
          <li>
            <Link href="/add-properties">Add Properties</Link>
          </li>
          <li>
            <Link href="/Search">Search</Link>
          </li>
        </ul>
      </h2>
      <div>
        <image src="./logo.png" alt="nav" />
      </div>
    </div>
  );
};
export default Navbar;
