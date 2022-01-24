import React from 'react';
import live from '../../../assets/images/live.svg';
import appstore from '../../../assets/images/appstore.svg';
import googleplay from '../../../assets/images/googleplay.svg';
import danfo_woman from '../../../assets/images/danfo-woman.png';
import card from '../../../assets/images/card.png';
import card1 from '../../../assets/images/card-1.svg';
import card2 from '../../../assets/images/card-2.svg';
import objects from '../../../assets/images/get-familiar-objects.svg';
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
      <div className={home.section_two}>
        <div className={home.objects}>
          <img src={objects} />
        </div>
        <embed src={card1} className={home.card1} /> 
        <embed src={card2} className={home.card2} />
        <div className={home.sub_section_two}>
          <div className={home.digital_bank}>
            <h1>we are a Credit Digital Bank.</h1>
            <p>
              that is borderless, 
              simple to use 
              and inclusive for all.
              Using Mobile, Web, 
              USSD, WhatsApp & 
              Agency Banking.
            </p>
          </div>
          <div>
            <img src={card} alt='Credit Card' className={home.card} />
          </div>
          <div className={home.finances}>
            <div>
              <div className={home.icon}>
                <div></div>
              </div>
              Manage your Finances
            </div>
            <div>
              <div className={home.icon}>
                <div></div>
              </div>
              Save & Spend in Over 135 Currencies
            </div>
            <div>
              <div className={home.icon}>
                <div></div>
              </div>
              Instant Loans
            </div>
            <div>
              <div className={home.icon}>
                <div></div>
              </div>
              Make Payments
            </div>
            <div>
              <div className={home.icon}>
                <div></div>
              </div>
              Credit/Debit Card
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
