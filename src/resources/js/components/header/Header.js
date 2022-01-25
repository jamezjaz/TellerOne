import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import navbar from './Header.module.css';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className={navbar.nav}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className={navbar.collapse_container}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Features" id="navbarScrollingDropdown">
                  <a href='#features'>
                    <NavDropdown.Item href="#action/3.1">Nano Loans</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Quick Savings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">QR-Payments</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Cross-Border FX</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Debit/Credit Cards</NavDropdown.Item>
                  </a>
                </NavDropdown>

                <NavDropdown title="Get Familiar" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action/3.1">Product News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">News Room</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Link
                to="/waitlist"
              >
                <button
                  className={`btn ${navbar.waitlist_btn}`}
                >
                  Join Waitlist
                </button>
              </Link>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;