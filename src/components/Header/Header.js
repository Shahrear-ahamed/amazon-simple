import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
      <nav className='top-header'>
        <div className="header">
          <img src={logo} alt="Main logo" />
          <ul>
              <li><a href="/Shop">Shop</a></li>
              <li><a href="/Orders">Orders</a></li>
              <li><a href="/Inventory">Inventory</a></li>
              <li><a href="/About">About</a></li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;