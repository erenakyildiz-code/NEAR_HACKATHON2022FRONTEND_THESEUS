import React ,{ Suspense, useEffect} from 'react';
import {motion, MotionConfig,} from "framer-motion";
import { Pie } from 'react-chartjs-2';
import './cta.css';
const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2
};

function CTA({ isSignedIn, helloNEAR, wallet }){
  
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();
  const [totalValueFromBlockchain, setTotalValueFromBlockchain] = React.useState();
  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
  const [depositWithdrawValue, setDepositWithdrawValue] = React.useState('');

  const handleChange = event => {
    setDepositWithdrawValue(event.target.value);
  };
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return ;
  }
  else{
    React.useEffect(() => {
      helloNEAR.getGreeting(wallet.accountId)
        .then(setValueFromBlockchain)
        .catch(alert)
        .finally(() => {
          setUiPleaseWait(false);
        });
        helloNEAR.getTotalBalance().then(setTotalValueFromBlockchain).catch(alert).finally(()=> setUiPleaseWait(false));
    }, []);
  }
  
  async function deposit(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    await helloNEAR.deposit(depositWithdrawValue)
      .then(async () => {return helloNEAR.getGreeting(wallet.accountId);})
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
      
  }
  async function withdraw(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    await helloNEAR.withdraw(depositWithdrawValue)
      .then(async () => {return helloNEAR.getGreeting(wallet.accountId);})
      .then(setValueFromBlockchain)
      .finally(() => {
        setUiPleaseWait(false);
      });
      
  }
  async function purchase_alloc() {
    let pp = valueFromBlockchain * 1000 / totalValueFromBlockchain;
    await helloNEAR.get_allocations("ft.examples.testnet",pp).then(alert);
  }
  const chartData={
    
    datasets: [
      {
        
        data: [valueFromBlockchain,totalValueFromBlockchain - valueFromBlockchain],
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          '#ffffff',
          '#000000',
        ],
        borderWidth: 3,
      },

    ],
    
    
  }
  return (

    
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <div className="gpt3__cta-contenthead">
        <h3>Your deposits: {valueFromBlockchain} NEAR</h3>
        <p>You can see your purchasing percentage here: {(valueFromBlockchain / totalValueFromBlockchain) * 100}</p>
        <div className='gpt3__cta-chart'>
        <Pie  data={chartData} options={{
    animation: {
        duration: 0
    },
}}></Pie></div></div>
      </div>
      <div className="gpt3__cta-btn">
      <form  className="gpt3__cta-form">
          <input
            autoComplete="off"
            defaultValue={valueFromBlockchain}
            id="greetingInput"
            className='gpt3__cta-input'
            onChange={handleChange}
          />
            <div className="loader"></div>
      </form>
        <div className='gpt3__cta-buttons'>
          <motion.div 
        initial={{  backgroundColor: '#db07d1' }}
        whileHover={{
          backgroundColor: '#61dafb21'
        }}
        onTap={withdraw}
        type="submit"
        transition={{ scale: { type: 'spring', stiffness: 500 } }}className='gpt3__cta-inputbut1'
      >Withdraw</motion.div>
            <motion.div 
        initial={{  backgroundColor: '#db07d1' }}
        whileHover={{
          backgroundColor: '#61dafb21'
        }}
        type="submit"
        onTap={deposit}
        transition={{ scale: { type: 'spring', stiffness: 500 } }}className='gpt3__cta-inputbut2'
      >Deposit</motion.div>
      </div>
            <div className="loader"></div>
        
      </div>
      <motion.div 
        initial={{  backgroundColor: '#db07d1' }}
        whileHover={{
          backgroundColor: '#61dafb21'
        }}
        onTap={purchase_alloc}
        transition={{ scale: { type: 'spring', stiffness: 500 } }}className='gpt3__cta-inputbut3'
      >Purchase allocations</motion.div>
    </div>
    
  );
}

export default CTA;
