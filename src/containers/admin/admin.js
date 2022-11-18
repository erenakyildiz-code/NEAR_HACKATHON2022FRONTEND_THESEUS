import React from 'react';
import './admin.css';
import {motion} from "framer-motion";
const Admin = ({ isSignedIn, helloNEAR, wallet })=> {
  
  const [isHover, setIsHover] = React.useState(false);
  const [isHover2, setIsHover2] = React.useState(false);
  const [isHover3, setIsHover3] = React.useState(false);
  const [isHover4, setIsHover4] = React.useState(false);
  const [tokenid, setTokenId] = React.useState("ft.examples.testnet");
  const [amount, setAmount] = React.useState("1000");
  async function stake() {
    await helloNEAR.stake().then(alert);
      
  }
  async function unstake() {
    await helloNEAR.unstake().then(alert);
      
  }
  async function start_launch(){
    await helloNEAR.start_launch_met1(tokenid,amount).then(console.log);
  }
  async function start_launch_step2(){
    await helloNEAR.start_launch_met2(tokenid,amount).then(console.log);
  }
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return ;
  }
  else{
    
    return(
      <div className="gpt3__admin section__padding" id="admin">
        <div className="gpt3__admin-content">
          <h1 style={{color:'#fff'}}>Here are all the possible operations admins can currently do</h1>
          <div className='gpt3__admin-cols-row'>
            <motion.button
            initial={false}
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 },
              press: { scale: 1.1 }
            }}
            onHoverStart={() => {
              setIsHover(true);
            }}
            onHoverEnd={() => {
              setIsHover(false);
            }}
            onTap={stake}
            >Stake</motion.button>
            <motion.button
          initial={false}
          animate={isHover2 ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.2 },
            press: { scale: 1.1 }
          }}
          onHoverStart={() => {
            setIsHover2(true);
          }}
          onHoverEnd={() => {
            setIsHover2(false);
          }}
          onTap={unstake }
          >UnStake</motion.button>
          <div className='gpt3__admin-rows'>
            <div className='gpt3__admin-rows-explain'>
                <h4>Staking/UnStaking</h4>
                <p>Staking enables earning both your node and users some NEAR in return, after this method is called, start_launch can be called to start a new launch, deposit and withdraw are now locked for a month, and stake can not be called for 1 month + 1 week, giving our users a period of time to get their tokens outside the node if they desire, of course this can all be changed if your node desires.</p>
                <p>Unstake receives rewards to both your node, and the users using theseus, this function can be called by anyone after 30 days of a stake, making every participant on our platform to have control over their own money.</p>
            </div>
          </div>
          </div>
          
            <div className='gpt3__admin-cols-row'>
            <motion.button
            initial={false}
            animate={isHover3 ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 },
              press: { scale: 1.1 }
            }}
            onHoverStart={() => {
              setIsHover3(true);
            }}
            onHoverEnd={() => {
              setIsHover3(false);
            }}
            onTap={()=>start_launch()}
            >Start launch step 1</motion.button>
            <motion.button
            initial={false}
            animate={isHover4 ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 },
              press: { scale: 1.1 }
            }}
            onHoverStart={() => {
              setIsHover4(true);
            }}
            onHoverEnd={() => {
              setIsHover4(false);
            }}
            onTap={()=>start_launch()}
            >Start launch step 2</motion.button>
            <div className='gpt3__admin-rows'>
            <div className='gpt3__admin-rows-explain'>
                <h4>Starting a launch</h4>
                <p>Starts a new launch on the launchpad, you must provide the contract with enough tokens before starting launch, the contract must be on a stake period, or else this promise will fail. Calling this function will also add a new token to the frontend.</p>
              </div>
            </div>
            </div>
           
          
          </div>
      </div>
    )
  }
    };

export default Admin;
