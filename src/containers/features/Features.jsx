import React from 'react';
import Feature from '../../components/feature/Feature';
import Feature2 from '../../components/feature/Feature2';

import './features.css';

const featuresData = [
  {
    title: 'Improving trust networks',
  },
  {
    title: 'Innovating the new internet',
  },
  
];
const featuresData2 = [
  {
    title: 'Structuring projects',
  },
  {
    title: 'Decentralising current solutions',
  },
  
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature2 title={item.title}  key={item.title + index} />
      ))}
      
    </div>
    <div className="gpt3__features-container">
      {featuresData2.map((item, index) => (
        <Feature2 title={item.title}  key={item.title + index} />
      ))}
      
    </div>
  </div>
);

export default Features;
