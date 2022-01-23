import React from 'react';
import footer_logo from '../../../assets/images/footer-logo.svg';
import footer from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={footer.content}>
        <div className={footer.top}>
          <img src={footer_logo} alt='footer logo' />
          <div>Contact Details</div>
        </div>
        <div className={footer.hr}>
          <hr />
        </div>
        <div className={footer.main}>
          <div>
            <h5>USA Office</h5>
            <p>
              3645, Market Place blvd, suite 130
              <br />
              Box 538 East Point GA 30344. USA
            </p>
            <span>Tel: <a href="tel:+14042078202">+14042078202</a></span>
            <br />
            <br />
            <span>Business Enquiries: <a href="mailto:corporate@mytellerOne.com">corporate@mytellerOne.com</a></span>
            <br />
            <span>Customer Care: <a href="mailto:support@mytellerOne.com">support@mytellerOne.com</a></span>
          </div>
          <div>
            <h5>Nigeria Office</h5>
            <p>
              Plot 9a, Femi Ogun Street,
              <br />
              Magodo Shangisha, Lagos, Nigeria.
            </p>
            <span>Tel: <a href="tel:+2349080048400">+2349080048400</a></span>
          </div>
        </div>
        <div className={footer.bottom}>
          TellerOne®, Inc. Delaware, USA © 2022 | All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
