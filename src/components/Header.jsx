import React from "react";
import './Header.css';
import logo from '../assets/IMAGE.jpg';

function Header () {

    return(
        <header className="header">
            <div className="container">
         <div className="header-inner">
         <img className="logo" src={logo} alt="logo"></img>
            <nav className="nav">
            <a href="#" className="nav_link">Home</a>
            <a href="#" className="nav_link">Menu</a>
            <a href="#" className="nav_link">Company</a>
            <a href="#" className="nav_link">Login</a>
            </nav>
            <button className="cart">
          🛒
          <span className="cart-count">0</span>
        </button>
        </div>
        </div>
        </header>
    )
}

export default Header;