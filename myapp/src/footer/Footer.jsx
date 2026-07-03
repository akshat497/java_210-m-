import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="/">Contact Us</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
          <a href="/">Corporate Information</a>
        </div>

        <div className="footer-column">
          <h4>GROUP COMPANIES</h4>
          <a href="/">Myntra</a>
          <a href="/">Cleartrip</a>
          <a href="/">Shopsy</a>
        </div>

        <div className="footer-column">
          <h4>HELP</h4>
          <a href="/">Payments</a>
          <a href="/">Shipping</a>
          <a href="/">Cancellation & Returns</a>
          <a href="/">FAQ</a>
        </div>

        <div className="footer-column">
          <h4>CONSUMER POLICY</h4>
          <a href="/">Cancellation & Returns</a>
          <a href="/">Terms Of Use</a>
          <a href="/">Security</a>
          <a href="/">Privacy</a>
          <a href="/">Sitemap</a>
        </div>

        <div className="footer-column address">
          <h4>Mail Us:</h4>
          <p>
            Your Company Pvt. Ltd.
            <br />
            Sector 62,
            <br />
            Noida, Uttar Pradesh,
            <br />
            India - 201309
          </p>
        </div>

        <div className="footer-column address">
          <h4>Registered Office Address:</h4>
          <p>
            Your Company Pvt. Ltd.
            <br />
            Sector 62,
            <br />
            Noida, Uttar Pradesh,
            <br />
            India - 201309
            <br />
            CIN : U12345UP2025PTC000000
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-item">🏪 Become a Seller</div>
        <div className="footer-item">📢 Advertise</div>
        <div className="footer-item">🎁 Gift Cards</div>
        <div className="footer-item">❓ Help Center</div>

        <div className="copyright">
          © 2026 YourStore.com. All Rights Reserved.
        </div>

        <div className="payments">
          <img
            src="https://img.icons8.com/color/48/visa.png"
            alt="visa"
          />
          <img
            src="https://img.icons8.com/color/48/mastercard.png"
            alt="mastercard"
          />
          <img
            src="https://img.icons8.com/color/48/rupay.png"
            alt="rupay"
          />
          <img
            src="https://img.icons8.com/color/48/paypal.png"
            alt="paypal"
          />
        </div>
      </div>
    </footer>
  );
}