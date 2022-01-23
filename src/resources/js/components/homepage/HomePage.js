import React from 'react';
import live from '../../../assets/images/live.svg';
import appstore from '../../../assets/images/appstore.svg';
import googleplay from '../../../assets/images/googleplay.svg';
import danfo_woman from '../../../assets/images/danfo-woman.png';
import home from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div  className={home.section_one}>
        <div className={home.live}>
          <img src={live} alt='live without barriers' className={home.barriers} />
          <p>
            Solving the challenges of P2P payment, Cross-Border
            <br />
            Spending and access to Loans for basic needs
          </p>
          <div className={home.stores}>
            <img src={appstore} alt='App Store' />
            <img src={googleplay} alt='Google Play' />
          </div>
        </div>
        <div className={home.danfo_woman_con}>
          <img src={danfo_woman} alt='Danfo Woman' />
        </div>
      </div>
    </>
  );
};

export default HomePage;