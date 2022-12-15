import React from 'react';
import {  openAI, firm } from './imports2';
import './brand_AI.css';

const Brand = () => (
  <div className="flexBoxLittleboxes">
  <p className='Eren'>by Eren Akyıldız</p>
      <img className="littlebox" src={firm} />
  </div>
);

export default Brand;
