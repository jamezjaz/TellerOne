import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/nav/Header';

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;