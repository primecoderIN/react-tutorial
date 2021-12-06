import React from "react";
import { Link } from "react-router-dom";
//We need to import Link from React-Router-Dom to set Navbar
//to prop is used to set the target of the link
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
          <Link to="person">Person</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
