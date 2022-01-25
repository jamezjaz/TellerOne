import React, { useState } from 'react';
import live from '../../../assets/images/live.svg';
import appstore from '../../../assets/images/appstore.svg';
import googleplay from '../../../assets/images/googleplay.svg';
import danfo_woman from '../../../assets/images/danfo-woman.png';
import card from '../../../assets/images/card.png';
import card1 from '../../../assets/images/card-1.svg';
import card2 from '../../../assets/images/card-2.svg';
import objects from '../../../assets/images/get-familiar-objects.svg';
import woman_join from '../../../assets/images/woman-join.png';
import forward_arrow from '../../../assets/images/blue-arrow.png';
import Slider from '../slider/Slider';
import home from './HomePage.module.css';

const options = [
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'usa', label: 'USA' },
  { value: 'ghana', label: 'Ghana' }
];

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (email === '') {
      setErrorMsg('Email field is required!');
    } else if (number === '') {
      setErrorMsg('Phone Number field cannot be blank!');
    } else {
      setErrorMsg('');
      setEmail('');
      setNumber('');
    }
  };

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
          <img src={objects} alt='Objects' />
        </div>
        <embed data-img-src={card1} className={home.card1} data-v-6e4e4171 /> 
        <embed data-img-src={card2} className={home.card2} data-v-6e4e4171 />
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
      <div className={home.section_three}>
        <div className={home.form_container}>
          <div>
            <h1>
              We’re building a bank that’ll come through
              <br />
              for you when other banks won't ...
            </h1>
          </div>
          <div>
            <p>
              You should be the first to know when we launch our product.
              <br />
              <span>Join our V.I.P waitlist here.</span>
            </p>
          </div>
          <form>
            {errorMsg === '' ? '' : <h5 className={home.error_msg}>{errorMsg}</h5>}
            <div className={home.input_container}>
              <input
                type='text'
                placeholder='via email address (or)'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className={home.select}>
              <select>
                <option disable="true" hidden>+234</option>       
                {options.map(option => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                type='number'
                placeholder='Phone Number'
                name='number'
                value={number}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className={`btn ${home.join_btn}`}
                onClick={handleSubmit}
              >
                <span>Join Waitlist</span>
                <div className={home.forward_arrow}>
                  <img src={forward_arrow} alt='Forward Arrow' />
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className={home.woman_join_container}>
          <img src={woman_join} alt='Woman Join' />
        </div>
      </div>
      <div className={home.section_four}>
        <div className={home.features}>
          <h1>Our features</h1>
          <p>
            We bring ease to your everyday banking and lifestyle needs using AI & ML
            <br />
            (Artificial Intelligence & Machine Learning).
          </p>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default HomePage;
