import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Crypto from './components/pages/Crypto';
import News from './components/pages/News';

import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import CryptoDetails from "./components/pages/CryptoDetails";
 

function App() {
  return (
    <div className="App">

        <div className="nav-bar"><Navbar/></div>

        <div className="main">

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

          <Routes>
            <Route path="/crypto" element={<Crypto/>}/>
          </Routes>

          <Routes>
            <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
          </Routes>

          <Routes>
            <Route path="/news" element={<News/>}/>
          </Routes>

        </div>

        <div className="footer">
        <Footer/>
        </div>
    </div>
  );
}

export default App;
