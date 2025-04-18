import React from "react";
import logo from '../assets/IMAGE.jpg';
import social from '../assets/Frame.jpg';
import "../styles/Footer.css";

class Footer extends React.Component {
  render () {
  return(
        <div className="footer">
  <div className="footer-container">
    <div className="footer-brand">
    <img src={logo} alt="logo"></img>
    <p>Takeaway & Delivery template for small - medium businesses.</p>
    </div>
 <div class="footer-links">
    <div className="footer-column">
      <div>COMPANY</div>
      <ul>
        <li>Home</li>
        <li>Order</li>
        <li>FAQ</li>
        <li>Contact</li>
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
        <li>More Cloneables</li>
      </ul>
      </div>

    </div>

   
    <div class="footer-bottom">
      <div className="a">Built by <span> Flowbase</span> · Powered by <span> Webflow</span></div>
      <img src={social} alt="social_media"></img>
      
    </div>

  </div>
</div>

    )
  }
}

export default Footer;