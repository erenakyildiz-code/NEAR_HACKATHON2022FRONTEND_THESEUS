import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img style={{width:"550px"}}src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>We create utilities for staking pools, this will increase your earnings by being able to offer lower staking rewards, but you will be able to give your users other options that are better! Such as this launchpad.</p>
    </div>
  </div>
);

export default Possibility;
