import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing social and contact icons
import '../frontPagesCSS/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-row">
          {/* Footer Logo and Description */}
          <Col md={5} className="footer-logo">
            <h4>SG Fitness Hub</h4>
            <p>Your go-to platform for fitness knowledge, tips, and resources!</p>
          </Col>

          {/* Follow Us Section */}
          <Col md={4} className="footer-follow-us">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Contact Info with Icons */}
          <Col md={2} className="footer-contact">
            <h5>Contact</h5>
            <p><FaEnvelope /> info@sgfitnesshub.com</p>
            <p><FaPhone /> +91 7262935518</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SG Fitness Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
