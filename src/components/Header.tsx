import React, {useState, useEffect} from 'react';
import "../styles/Header.css";
import logo from '../assets/IMAGE.jpg';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { fetchMenu, setSelectedCategory, seeMoreItems } from '../store/menuSlice';
import type { AppDispatch } from '../store/store'; 
import { NavLink, useNavigate } from 'react-router-dom'; 

type HeaderProps = {
   addToCartCount?: number;
 };

 
const Header: React.FC<HeaderProps> = ({addToCartCount}) => {
   
const cart = useSelector((state: RootState) => state.cart.cart);

return (
        <header className="header">
            <div className="container">
         <div className="header-inner">      
         <img className="logo" src={logo} alt="logo"/>
            <nav className="nav">
            <a href="/" className="nav_link">Home</a>
            <a href="/menu" className="nav_link">Menu</a>
            <a href="#" className="nav_link">Company</a>
            <a href="/login" className="nav_link">Login</a>
            </nav>
           
            {typeof addToCartCount === "number"  && (
               <NavLink to="/order" className="cart" >
          🛒
          <span className="cart-count">{addToCartCount}</span>
        </NavLink>
        )}
        </div>
        </div>
        </header>
   )
}

export default Header;