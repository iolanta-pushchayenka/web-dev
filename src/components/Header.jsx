import React from "react";
import "../styles/Header.css";
import logo from '../assets/IMAGE.jpg';

class Header extends React.Component {
render () {
    return (
        <header className="header">
            <div className="container">
         <div className="header-inner">      
         <img className="logo" src={logo} alt="logo"/>
            <nav className="nav">
            <a href="#" className="nav_link">Home</a>
            <a href="#" className="nav_link">Menu</a>
            <a href="#" className="nav_link">Company</a>
            <a href="#" className="nav_link">Login</a>
            </nav>
            <button className="cart">
          🛒
          <span className="cart-count">{this.props.addToCartCount}</span>
        </button>
        </div>
        </div>
        </header>
   )
}
}

export default Header;