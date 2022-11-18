import React from 'react';
import { google, slack, atlassian, near } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={near} />
    </div>
  </div>
);

export default Brand;
