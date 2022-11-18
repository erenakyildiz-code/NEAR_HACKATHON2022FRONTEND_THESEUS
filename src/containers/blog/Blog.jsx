import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Article2 from '../../components/article/article2';
import CTA from '../../components/cta/CTA';

const Blog = ({isSignedIn, helloNEAR, wallet}) => {
  
  
  const [balances, setbalances] = React.useState(0);
  
  const [balances2, setbalances2] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [alloc, setAlloc] = React.useState(0);
  
  const [total2, setTotal2] = React.useState(0);
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return ;
  }
  else{
    React.useEffect(() => {
        helloNEAR.get_launch("ft.examples.testnet")
        .then(setTotal)
        helloNEAR.get_remaining("ft.examples.testnet")
        .then(setbalances)
        helloNEAR.get_launch("dev-1668713934929-97276145600233")
        .then(setTotal2)
        helloNEAR.get_remaining("dev-1668713934929-97276145600233")
        .then(setbalances2)
    }, []);
  }
  React.useEffect(() => {
    console.log(balances,total);
}, [balances,total]);
  if(wallet.accountId != undefined){
    


    return(
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">Hello, {wallet.accountId.split(".")[0]}</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3_blog-container_groupA">
    
          <CTA isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet}></CTA>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="2022" text="ft.examples.testnet" val={(100* balances / total)} alloc={alloc} />
            <Article imgUrl={blog03} date="2022" text="dev-1668713934929-97276145600233" val={(100* balances2 / total2)} alloc={alloc}/>
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">Login to see your allocations</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Nov 11, 2022" text="Erencoin" val="17"/>
            <Article imgUrl={blog03} date="Oct 21, 2022" text="Somethingtoken" val="28"/>
          </div>
        </div>
      </div>
    );
  }
 }

export default Blog;
