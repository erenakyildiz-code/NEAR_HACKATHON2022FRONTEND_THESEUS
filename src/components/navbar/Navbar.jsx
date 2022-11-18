import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';
import WeirdButton from './button';
import { motion ,useMotionValue } from "framer-motion";

const Navbar = ({ isSignedIn, helloNEAR, wallet }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    
    <motion.div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
          <img className="gpt3__navbar-links_logo" src={logo} />
        <div className="gpt3__navbar-links_container">
          <motion.div 
           onHoverStart={() => {
            resetMousePosition();
            setIsHover2(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover2(false);
          }}
          initial={false}
          animate={isHover2 ? "hover" : "rest"}
          variants={{
          rest: { scale: 1 },
          hover: { scale: 1.2 },
          press: { scale: 1.1 }
        }}>
          <p><a href="#wgpt3">What is Theseus?</a></p></motion.div>
          <motion.div 
           onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          variants={{
          rest: { scale: 1 },
          hover: { scale: 1.2 },
          press: { scale: 1.1 }
        }}>
          <p><a href="#blog">App</a></p></motion.div>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <motion.div><WeirdButton isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet}></WeirdButton></motion.div>
        
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is theseus?</a></p>
            <p><a href="#blog">Current projects</a></p>
          </div>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
