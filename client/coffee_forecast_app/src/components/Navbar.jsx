import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Coffee Forecast</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/forecast">Forecast</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;