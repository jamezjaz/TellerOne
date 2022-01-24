import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const HomePage = lazy(() => 
  import('../components/homepage/HomePage')
);

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<h5>Please wait...</h5>}>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default Routing;