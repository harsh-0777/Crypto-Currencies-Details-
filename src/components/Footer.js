import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">

      <div className="footer-1">

        <div className="footer-1-intro">
          <h1 className="footer-h1">CryptoWorld</h1>
          <p className="footer-p">Crypro World is a fabulous platform used for analysis and detail </p>
          <p className="footer-p"> survey of cryptocurrencies. It is easy to use and has a very </p>
          <p className="footer-p"> freiendly user interface.</p>
        </div>

        <div className="footer-1-contact">
          <h1 className="footer-h1">Contact Us</h1>
          <p className="footer-p">Street 14, Telco Jamshedpur</p>
          <p className="footer-p">Call Us: 93820-23120</p>
          <p className="footer-p">Email Us: cryptoWorld@gmail.com</p>
        </div>

        <div className="footer-1-support">
          <h1 className="footer-h1">Support</h1>
          <p className="footer-p">Help Us to Grow</p>
          <p className="footer-p">Gpay: CryptoWorld@okicici</p>
          <p className="footer-p">Paytm: CryptoWorld@paytm</p>
        </div>

      </div>

      <hr className="footer-line"></hr>

      <div className="footer-2">
        <div className="footer-2-copyrght"> Copyright ©2023 CryptoWorld. All rights reserved</div>
        <div className="footer-2-Links">
          <Link to="/" className="footer-link"> Home</Link>
          <Link to="/crypto" className="footer-link">Crypto</Link>
          <Link to="/news" className="footer-link"> News  </Link>
        </div>
      </div>
    </div>
  );
}
