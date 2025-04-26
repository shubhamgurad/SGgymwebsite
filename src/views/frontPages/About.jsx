import React, { useState } from 'react'
import Header from '../frontPages/header.jsx'
import Footer from '../frontPages/footer.jsx'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import '../frontPagesCSS/About.css'
import aboutimg from '../Images/gym34.jpg'

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    alert('Thank you for contacting us!')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <Header />
      <Container fluid style={{background:'white'}} className='p-0'>
      <div className="about_background-image">
        <div className="about_overlay"></div>
        <Container className="about_overlay-text">
          <Row className="m-0">
            <Col className="about_text-center">
              <h1 className="about_overlay-heading">About Us</h1>
              <p className="about_lead text-white">Dedicated to your fitness evolution.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-4">
        <Row className="g-4">
          <Col md={6}>
            <img
              src={aboutimg}
              alt="about_img"
              width={520}
              height={380}
              style={{ borderRadius: '10px',  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
            />
          </Col>
          <Col md={6}>
            <h5 className="about-heading">About SG Fitness Hub</h5>
            <h4>Where Strength Meets Purpose</h4>
            <p className="about-subtext">
              Welcome to <strong>SG Fitness Hub</strong>, where fitness meets lifestyle
              transformation. We're not just a gym we're a community built on strength, discipline,
              and self-growth. Whether you're just starting out or pushing toward new personal
              records, our space is designed to motivate and support you every step of the way.
            </p>
            <p className="about-subtext">
              At <strong>SG Fitness Hub</strong>, we believe in crushing limits and building
              confidence. With expert trainers, a positive atmosphere, and results-driven programs,
              we help you become the strongest version of yourself inside and out.
            </p>
          </Col>
          <Col md={5}>
            <h5 className="about-heading-m text-center">Our Mission</h5>
            <p className="about-subtext">
              At <strong>SG Fitness Hub</strong>, our mission is to empower individuals at every fitness level to
              unlock their full potential. Whether you're just starting your journey or pushing past
              personal records, we’re here to guide and motivate you every step of the way.
            </p>
            <p className="about-subtext">
              With a focus on expert coaching, a supportive community, and high-quality training
              facilities, we create an environment where goals are not just set — they're achieved.
            </p>
          </Col>
          <Col md={1} className="vertical_line_div">
            <div className="vertical_line"></div>
          </Col>
          <Col md={5}>
            <h5 className="about-heading-m text-center">Our Vision</h5>
            <p className="about-subtext">
              At <strong>SG Fitness Hub</strong>, our vision is to create a fitness space where
              every individual feels inspired, confident, and empowered to lead a healthier life. We
              strive to be more than just a gym a place where dedication and community come
              together to build lasting change.
            </p>
            <p className="about-subtext">
              We envision a future where fitness becomes a way of life for everyone accessible,
              enjoyable, and transformative. By continuously evolving with the latest training
              methods and personalized support, we aim to be a driving force in every member’s
              wellness journey.
            </p>
          </Col>
        </Row>
      </Container>
      </Container>    
      <Footer />
    </>
  )
}

export default About
