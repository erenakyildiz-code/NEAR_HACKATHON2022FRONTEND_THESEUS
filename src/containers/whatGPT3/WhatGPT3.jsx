import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Ship of theseus</h1>
      
    </div>
   
    <div className="gpt3__whatgpt3-feature">
      
      <Feature title="What is theseus?" text="Theseus is a launchpad, where new tokens find life in the early stage of investment. 
      
      
      " />
      <Feature title="How does theseus work ?" text="Theseus uses native blockchain coins for its staking proccess, this means you can enter token launches with NEAR coins.
      " />
      <Feature title="How does staking on theseus work ?" text="We stake your tokens using our partnered staking pools to earn revenue and allow you to purchase tokens that will be launched.
      " />
      
    </div> <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Stake and earn rewards</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Entering pre-seed token launches" text="You will be able to join exclusive token launches, the more you deposit, the more you will be able to purchase" />
      <Feature title="Staking rewards in NEAR" text="Our users earn staking rewards after depositing more than 10.000$ in NEAR" />
      <Feature title="Full de-fi security" text="All of our staking, launch proccesses are done on the NEAR blockchain, no money you deposit can be withdrawn by someone else" />
    </div>
  </div>
);

export default WhatGPT3;
