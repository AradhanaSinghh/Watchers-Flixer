import React from "react";
import "./Footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__linksColumn">
          <span>Questions? Contact us.</span>
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Netflix Originals</a>
        </div>
        <div className="footer__linksColumn">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__linksColumn">
          <a href="#">Account</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="footer__linksColumn">
          <a href="#">Media Center</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
      </div>
      <div className="footer__serviceCode">
        <p>Service Code</p>
      </div>
      <div className="footer__countrySelector">
        <p>Netflix-Clone</p>
      </div>
    </footer>
  );
}

export default Footer;