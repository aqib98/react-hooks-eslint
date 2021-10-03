import '../public/static/bootstrap.css';
import '../public/static/site.css';
import React from 'react';

export default function MyApp({Component, pageProps}){
    return <Component {...pageProps}/>
}