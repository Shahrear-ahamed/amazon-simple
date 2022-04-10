import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
      <nav className="top-header">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="Main logo" />
          </Link>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/snventory">Inventory</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;