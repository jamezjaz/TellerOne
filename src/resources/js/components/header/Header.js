import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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
                <NavDropdown title="Features" href="#features" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#features">Nano Loans</NavDropdown.Item>
                  <NavDropdown.Item href="#features">Quick Savings</NavDropdown.Item>
                  <NavDropdown.Item href="#features">QR-Payments</NavDropdown.Item>
                  <NavDropdown.Item href="#features">Cross-Border FX</NavDropdown.Item>
                  <NavDropdown.Item href="#features">Debit/Credit Cards</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Get Familiar" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action/3.1">Product News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">News Room</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <a href="#join">
                <button
                  type="button"
                  className={`btn ${navbar.waitlist_btn}`}
                >
                  Join Waitlist
                </button>
              </a>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;