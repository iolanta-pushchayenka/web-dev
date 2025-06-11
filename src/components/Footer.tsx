import React, {useState, useEffect} from 'react';
import logo from '../assets/IMAGE.jpg';
import social from '../assets/Frame.jpg';
import "../styles/Footer.css";

function Footer () {
  
  return(
        <div className="footer">
  <div className="footer-container">
    <div className="footer-brand">
    <img src={logo} alt="logo"></img>
    <p>Takeaway & Delivery template for small - medium businesses.</p>
    </div>
 <div className="footer-links">
    <div className="footer-column">
      <div>COMPANY</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Order</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>

      
      <div className="footer-column">
      <div>TEMPLATE</div> 
      <ul>
        <li><a href="https://www.google.com/">Style Guide</a></li>
        <li><a href="https://www.google.com/">Changelog</a></li>
        <li><a href="https://www.google.com/">Licence</a></li>
        <li><a href="https://www.google.com/">Webflow University</a></li>
      </ul>
      </div>

      
      <div className="footer-column">
      <div>FLOWBASE</div>
      <ul>
        <li><a href="#">More Cloneables</a></li>
      </ul>
      </div>

    </div>

   
    <div className="footer-bottom">
      <div className="a">Built by <span> Flowbase</span> · Powered by <span> Webflow</span></div>
      <img src={social} alt="social_media"></img>
      
    </div>

  </div>
</div>

    )
  }


export default Footer;