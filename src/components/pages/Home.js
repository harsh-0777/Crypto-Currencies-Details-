import React from "react";
import "./Home.css";

import millify from "millify";
import { useGetCryptoQuery } from "../services/CryptoApi";
import { Link } from "react-router-dom";

import Crypto from "./Crypto.js";
import News from "./News.js";
import Home_header from "../Home_header";

export default function Home() {
  const { data, isFetching } = useGetCryptoQuery();
  const cryptoStat = data?.data?.stats;

  if (isFetching) return "Loading..";
  return (
    <div className="home">
      <Home_header/>
      <hr className="home_line"/>

      <h1 className="home-h1">Global Crypto-Currencies Statistics</h1>

      <div className="stat-container">
        <div className="stats-item">
          <p className="stats-detail">{cryptoStat.total}</p>
          <p className="stats-title">Total Crypto Currencies</p>
        </div>

        <div className="stats-item">
          <p className="stats-detail">{millify(cryptoStat.totalExchanges)}</p>
          <p className="stats-title">Total Exchanges</p>
        </div>

        <div className="stats-item">
          <p className="stats-detail">{millify(cryptoStat.totalMarketCap)}</p>
          <p className="stats-title">Total Market Captalization</p>
        </div>

        <div className="stats-item">
          <p className="stats-detail">{millify(cryptoStat.total24hVolume)}</p>
          <p className="stats-title">Total 24h volumes</p>
        </div>

        <div className="stats-item">
          <p className="stats-detail">{millify(cryptoStat.totalMarkets)}</p>
          <p className="stats-title">Total Markets</p>
        </div>
      </div>

      <hr className="home_line"/>

      <div className="home-crypto">
        <h1 className="home-h1">Top 10 Crypto Currencies in The World</h1>
        <Crypto simplified />
      </div>

      <div className="home-link">
        <Link to="/crypto">Show More</Link>
      </div>

      <div className="home-crypto">
        <h1 className="home-h1">Top 10 Crypto Currencies News</h1>
        <News simplified />
      </div>

      <div className="home-link">
        <Link to="/news">Show More</Link>
      </div>
    </div>
  );
}
