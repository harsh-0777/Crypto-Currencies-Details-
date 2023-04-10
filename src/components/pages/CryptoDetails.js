import React from "react";
import "./CryptoDetails.css";

import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { useGetCryptoDetailQuery } from "../services/CryptoApi";

export default function CryptoDetails() {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const crypto = data?.data?.coin;

  console.log(crypto);

  const cyptoData = [
    { title: "Rank", value: `${crypto?.rank}`, icon: "" },

    {
      title: "Price to USD",
      value: `${crypto?.price && millify(crypto.price)}`,
      icon: "",
    },
    {
      title: "Market Captalization",
      value: `${crypto?.marketCap && millify(crypto.marketCap)}`,
      icon: "",
    },
    {
      title: "All-Time-High",
      value: `${
        crypto?.allTimeHigh.price && millify(crypto?.allTimeHigh.price)
      }`,
      icon: "",
    },

    {
      title: "Change",
      value: `${crypto?.change}%`,
    },
  ];

  const cyptoGlobal = [
    {
      title: "Number of Markets",
      value: `${crypto?.numberOfMarkets}`,
      icon: "",
    },
    {
      title: "Number of Exchanges",
      value: `${crypto?.numberOfExchanges}`,
      icon: "",
    },
    {
      title: "Approved Supply",
      value: `${crypto?.supply.confirmed && millify(crypto?.supply.confirmed)}`,
      icon: "",
    },
    {
      title: "Total Supply",
      value: `${crypto?.supply.total && millify(crypto?.supply.total)}`,
      icon: "",
    },
    {
      title: "Circulating Supply",
      value: `${
        crypto?.supply.circulating && millify(crypto?.supply.circulating)
      }`,
      icon: "",
    },
  ];

  console.log(data);
  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div className="CryptoDetails">

      <div className="crypto-data-title-cintainer">
        <div className="crypto-data-title">
          <h1 className="cyrpto-data-h1">
            {crypto.name} ({crypto.symbol})
          </h1>
          <p className="cyrpto-data-p">
            {crypto.name} live Price in USD, market captalization and other
            globalstats
          </p>
        </div>

        <img
          src={crypto.iconUrl}
          alt="icon-img"
          className="crypto-detail-img"
        />
      </div>

      <hr className="CryptoDetails-hr" />

      <div className="crypto-stats">
        <div className="crypto-stats1">
          {cyptoData.map((data, i) => (
            <div className="crypto-stats-item" key={i}>
              <p className="crypto-stats-item-p">
                {data.title} : <span>{data.value}</span>{" "}
              </p>
              <hr />
            </div>
          ))}
        </div>

        <div className="crypto-stats1">
          {cyptoGlobal.map((data, i) => (
            <div className="crypto-stats-item" key={i}>
              <p className="crypto-stats-item-p">
                {data.title} : <span>{data.value}</span>{" "}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <div className="crypto-descrptn">
         <div className="crypto-descrptn-1">
            <h1>What is {crypto.name}</h1>
            {HTMLReactParser(crypto.description)}
         </div>
         <div className="crypto-descrptn-2">
           {crypto.links.map((link)=>(
              <>
                <div className="crypto-descrptn-2-links">
                  <p className="crypto-link-item">{link.name}</p>
                  <p className="crypto-link-item">{link.type}</p>
                  <a href={link.url} className="crypto-link-item" target="_blank" rel="noopener">Click here..</a>
                </div>
              </>
           ))}
         </div>
      </div>
    </div>
  );
}
