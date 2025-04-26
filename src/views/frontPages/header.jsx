import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../frontPagesCSS/header.css';
import logo from '../Images/SGFitnessHubLogo.png';

const Header = () => {
  return (
    <header className="header-navbar m-0">
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home"><Image src={logo} className='logo'/></Navbar.Brand>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-center"> {/* Center the navigation links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Sign Up button is on the right side */}
        <Button
          className="btn-signup"
          variant="primary"
          onClick={() => {
            window.location.href = '/login'; // Directly change the window location
          }}
        >
          Sign In
        </Button>
      </Navbar>
    </header>
  );
};

export default Header;
