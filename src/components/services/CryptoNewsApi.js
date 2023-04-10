import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader= {
    'X-RapidAPI-Key': 'c54111c733msh972fdf3dac67567p131bc7jsn07f10c6beef6',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}

const baseUrl='https://crypto-news16.p.rapidapi.com/news/top/';

const createRequest= (url)=>({url, headers:cryptoNewsApiHeader})

export const cryptoNewsApi=createApi({
   reducerPath:'cryptoNewsApi',
   baseQuery: fetchBaseQuery({baseUrl}),
   endpoints:(builder)=>({
       getCryptoNews: builder.query({
          query:(count)=>createRequest(`${count}`),
       })
   })
})

export const {useGetCryptoNewsQuery}=cryptoNewsApi;