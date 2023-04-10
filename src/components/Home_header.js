import React from "react";
import img1 from "../assets/images/2.webp";

export default function Home_header() {
  return (
    <div className="header">

      <div className="header_container">
        <div className="header-intro">
            <h1 className="header-intro-h1">Save More</h1>
            <h1 className="header-intro-h1">Save Crypto</h1>
            <h1 className="header-intro-h1">A Whole new Crypto World is here...</h1>
        </div>
        <img src={img1} alt="crypto-img" className="header_img"></img>
      </div>

      <div className="header_base">
      <h1 className="header-intro-h1">Crypto Currencies</h1>
      <p className="header_p">
        Cryptocurrency is a digital payment system that doesn't rely on banks to
        verify transactions. It’s a peer-to-peer system that can enable anyone
        anywhere to send and receive payments. Instead of being physical money
        carried around and exchanged in the real world, cryptocurrency payments
        exist purely as digital entries to an online database describing
        specific transactions. When you transfer cryptocurrency funds, the
        transactions are recorded in a public ledger. Cryptocurrency is stored
        in digital wallets.
      </p>

      </div>

    </div>
  );
}
