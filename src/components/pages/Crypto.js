import React ,{useState, useEffect} from 'react';
import './Crypto.css'

import {Link} from 'react-router-dom';

import millify from 'millify';
import { useGetCryptoQuery } from '../services/CryptoApi';

export default function Crypto({simplified}) {

  const count = simplified ? 10 : 100;
  const {data, isFetching}=useGetCryptoQuery(count);
  const [cryptos, serCryptos]= useState();

  const [search, setSearch]=useState('');

  useEffect(()=>{
    serCryptos(data?.data?.coins);
    const filterData= data?.data?.coins.filter((coin)=>(
      coin.name.toLowerCase().includes(search.toLowerCase())
    ))
    serCryptos(filterData);
  }, [data, search])

  if(isFetching) return 'Loading...';

   let newCrypto =[];

   newCrypto=cryptos?.map((currency)=>{

    return(
    <div className="crypto-detail" key={currency.uuid}>
      <Link to={`/crypto/${currency.uuid}`} className='crypto-detail-link'>
        
       <div className="crypto-detail-name">
         <h3>{currency.rank}. {currency.name}</h3>
         <img src={currency.iconUrl} alt="ima" className='crypto-img' />
       </div>

       <div className='crypto-detail-stats'>
           <p> Symbol:   <span className='cypto-detail-span'>{currency.symbol}</span></p>
           <p>Current Price:   <span className='cypto-detail-span'>{millify(currency.price)}</span></p>
           <p>Total Market Captalization:   <span className='cypto-detail-span'>{millify(currency.marketCap)}</span></p>
           <p>Daily Change:   <span className='cypto-detail-span'>{millify(currency.change)}%</span></p>
           <a href={currency.coinrankingUrl} className='crypto-stats-link'>Click here for more Datails</a>
       </div> 

       </Link> 
    </div>
   ) })


  return (
    <div className='crypto'>

      <div className="crypto-search">
        <input
          placeholder='search...'
          type='text'
          onChange={(e)=>setSearch(e.target.value)}
          className='crypto-input'
        />
      </div>

      <div className="cryto-wrapper">

        {simplified && newCrypto?.slice(0,10)}
        {!simplified && newCrypto}

      </div>

    </div>
  )
}
