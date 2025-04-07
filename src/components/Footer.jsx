import React from "react";
import './Footer.css';
import logo from '../assets/IMAGE.jpg';
import social from '../assets/Frame.jpg';

function Footer (){
    return(
        <div className="footer">
  <div class="footer-container">
    <div class="footer-brand">
    <img src={logo} alt="logo"></img>
    <p>Takeaway & Delivery template for small - medium businesses.</p>
    </div>
 <div class="footer-links">
    <div class="footer-column">
      <div>COMPANY</div>
      <ul>
        <li>Home</li>
        <li>Order</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
      </div>

      
      <div class="footer-column">
      <div>TEMPLATE</div>
      <ul>
        <li>Style Guide</li>
        <li>Changelog</li>
        <li>Licence</li>
        <li>Webflow University</li>
      </ul>
      </div>

      
      <div class="footer-column">
      <div>FLOWBASE</div>
      <ul>
        <li>More Cloneables</li>
      </ul>
      </div>

    </div>

   
    <div class="footer-bottom">
      <div class="a">Built by <span> Flowbase</span> · Powered by <span> Webflow</span></div>
      <img src={social} alt="cocial_media"></img>
      
    </div>

  </div>
</div>

    )
}

export default Footer;