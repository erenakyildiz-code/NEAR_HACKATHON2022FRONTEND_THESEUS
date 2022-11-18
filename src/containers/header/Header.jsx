import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Building decentralised utilities for stake pools.</h1>
      <p>Theseus is a new form of launchpad with no native token, we use the staking protocol NEAR provides for profits, making your stake pool offer more than just staking rewards.</p>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
