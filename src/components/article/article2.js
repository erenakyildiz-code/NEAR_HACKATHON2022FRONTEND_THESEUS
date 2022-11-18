import React from 'react';
import LinearProgress , { linearProgressClasses }from '@mui/material/LinearProgress';
import './article2.css';
import { styled }  from '@mui/material/styles';
import {motion} from "framer-motion";
import WeirdButton2 from './button2';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    
  },
}));

const Article2 = ({ imgUrl, date, text, val }) => (
  <motion.div className="gpt3__blog-container_article">
    
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Balance: {val}</p>
    </div>
    <div className="gpt3__blog-container_article-image">
      <motion.div><WeirdButton2></WeirdButton2></motion.div>
    </div>
  </motion.div>
);

export default Article2;
