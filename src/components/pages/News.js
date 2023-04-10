import React from 'react'
import './News.css'

import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';

export default function News({simplified}) {

  const count= simplified? 5 : 100;

  const {data, isFetching}=useGetCryptoNewsQuery(count);
  const cryptoNews=data;

  if(isFetching) return "Loading...";

  return (
    <div className='news'>
      <div className="news-wrapper">
        {
           cryptoNews.map((news, i)=>(
              <div className="news-element" key={i}>
                 <h2>{news.title}</h2>
                 <p className='news-desc'>{news.description}</p>
                 <a href={news.url} target='_blank' className='news-link'>Click here to read more..</a>
              </div>
           ))
        }
      </div>
    </div>
  )
}
