import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header ,Admin, UserForm,FizzBuzz} from './containers';
import { CTA, Brand, Navbar } from './components';
import { motion } from "framer-motion";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import './App.css';

const App = ({ isSignedIn, helloNEAR, wallet }) => {
  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
          <motion.div className="App">
    <div className="gradient__bg">
      <Navbar isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet} />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Possibility></Possibility>
    <Blog isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet}/>
    
    <Admin isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet} ></Admin>
  </motion.div>
          </Route>
          <Route exact path="/articleCalculator">
            <UserForm></UserForm>
          </Route>
          <Route exact path="/fizzbuzz">
            <FizzBuzz></FizzBuzz>
          </Route>
        
  
  </Switch>
  </BrowserRouter>
);}

export default App;
