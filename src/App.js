import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import { motion } from "framer-motion";

import 'regenerator-runtime/runtime';

import './App.css';

const App = ({ isSignedIn, helloNEAR, wallet }) => {
  return (
  <motion.div className="App">
    <div className="gradient__bg">
      <Navbar isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet} />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Possibility></Possibility>
    <Blog isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet}/>
  </motion.div>
);}

export default App;
