import React, {useState, useEffect, useContext} from 'react';
import "../styles/Header.css";
import logo from '../assets/Logo (1).png';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { fetchMenu } from '../store/menuSlice';
import type { AppDispatch } from '../store/store'; 
import { NavLink, useNavigate } from 'react-router-dom'; 
import {ThemeContext} from "../context/ThemeContext";
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
   addToCartCount?: number;
 };

 
const Header: React.FC<HeaderProps> = ({addToCartCount}) => {
   
    const { theme, toggleTheme } = useContext(ThemeContext);

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
         <ThemeToggle />
        </div>
        </div>
        </header>
   )
}

export default Header;