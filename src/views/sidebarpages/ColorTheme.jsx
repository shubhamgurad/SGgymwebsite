import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ColorTheme = () => {
  // State variables for theme colors
  const [primaryColor, setPrimaryColor] = useState('#cf231f');
  const [secondaryColor, setSecondaryColor] = useState('#f9e6e7');
  const [backgroundColor, setBackgroundColor] = useState('#f8f9fa');
  const [textColor, setTextColor] = useState('#000000');

  // Function to apply theme colors to the document
  const applyTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
  };

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const theme = JSON.parse(savedTheme);

      // Set state and apply the saved theme
      setPrimaryColor(theme.primaryColor);
      setSecondaryColor(theme.secondaryColor);
      setBackgroundColor(theme.backgroundColor);
      setTextColor(theme.textColor);
      applyTheme(theme);
    }
  }, []);

  // Function to save and apply the updated theme
  const handleApplyTheme = () => {
    const theme = { primaryColor, secondaryColor, backgroundColor, textColor };
    applyTheme(theme); // Apply the new theme
    localStorage.setItem('theme', JSON.stringify(theme)); // Save the new theme
  };

  return (
    <Container className="bg-white p-4 align-items-center justify-content-center w-50 rounded" style={{margin:'40px auto'}}>
    <Row className="text-center mb-4">
      <Col>
        <h2>Theme Settings</h2>
      </Col>
    </Row>
    <Form>
      {/* Primary Color */}
      <Row>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Col md={6} className="text-end">
            <Form.Label style={{ fontWeight: '500' }}>Primary Color:</Form.Label>
          </Col>
          <Col md={6} className="text-start px-3">
            <Form.Control
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              style={{ display: 'inline-block', width: '70px', padding:'4px' }}
            />
          </Col>
        </Form.Group>
      </Row>

      {/* Secondary Color */}
      <Row>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Col md={6} className="text-end">
            <Form.Label style={{ fontWeight: '500' }}>Secondary Color:</Form.Label>
          </Col>
          <Col md={6} className="text-start px-3">
            <Form.Control
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
              style={{ display: 'inline-block', width: '70px', padding:'4px' }}
            />
          </Col>
        </Form.Group>
      </Row>

      {/* Background Color */}
      <Row>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Col md={6} className="text-end">
            <Form.Label style={{ fontWeight: '500' }}>Background Color:</Form.Label>
          </Col>
          <Col md={6} className="text-start px-3">
            <Form.Control
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              style={{ display: 'inline-block', width: '70px', padding:'4px' }}
            />
          </Col>
        </Form.Group>
      </Row>

      {/* Text Color */}
      <Row>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Col md={6} className="text-end">
            <Form.Label style={{ fontWeight: '500' }}>Text Color:</Form.Label>
          </Col>
          <Col md={6} className="text-start px-3">
            <Form.Control
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              style={{ display: 'inline-block', width: '70px', padding:'4px' }}
            />
          </Col>
        </Form.Group>
      </Row>

      {/* Apply Button */}
      <Row className="text-center mt-3">
        <Col>
          <Button
            onClick={handleApplyTheme}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid black',
              borderRadius: '5px',
              fontWeight: '600',
              color: 'black',
            }}
          >
            Apply Theme
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
  );
};

export default ColorTheme;
