import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoHeader= {
    'X-RapidAPI-Key': 'c54111c733msh972fdf3dac67567p131bc7jsn07f10c6beef6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com';

const createRequest= (url)=>({url, headers: cryptoHeader});

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({

        getCrypto:builder.query({
            query:()=>createRequest(`/coins`)
        }),

        getCryptoDetail: builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),

    })
});


export const{useGetCryptoQuery, useGetCryptoDetailQuery }=cryptoApi;