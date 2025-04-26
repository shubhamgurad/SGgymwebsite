import React, { useState } from 'react'
import Header from '../frontPages/header.jsx'
import Footer from '../frontPages/footer.jsx'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import '../frontPagesCSS/Contact.css'
// import { color } from 'chart.js/helpers'
import { BASE_URL } from '../../BaseURL';

const Contact = () => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Form Submitted:', formData)
  //   alert('Thank you for contacting us!')
  //   setFormData({ name: '', email: '', phone: '', message: '' })
  // }


  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const response = await fetch(`${BASE_URL}/contact/createcontact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone, // match backend field name
          message: formData.message,
        }),
      })
  
      const result = await response.json()
  
      if (response.ok) {
        alert('Thank you for contacting us!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Something went wrong: ' + result.message)
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('Server error! Please try again later.')
    }
  }

  return (
    <>
      <Header />
      <Container fluid style={{background:'white'}} className='p-0'>
      <div className="contact_background-image">
        <div className="contact_overlay"></div>
        <Container className="contact_overlay-text">
          <Row className="m-0">
            <Col className="contact_text-center">
              <h1 className="contact_overlay-heading">Contact Us</h1>
              <p className="contact_lead text-white">
                Contact us today — let’s crush those goals together.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-4">
        <Row className="g-4">
          <Col md={6}>
            <div className="contact-section">
              <h2 className="contact-heading">Ready To Transform Your Fitness Journey?</h2>
              <p className="contact-subtext">
                Whether you're just getting started or looking to take your fitness goals to the
                next level, we're here to support you every step of the way. At{' '}
                <strong>SG Fitness Hub</strong>, we combine expert guidance, modern equipment, and a
                motivating environment to help you achieve real results.
              </p>
              <p className="contact-subtext">
                From personal training and group classes to nutrition advice and tailored workout
                plans — our team is committed to your success. Got questions about membership,
                scheduling a trial session, or our facilities? Just drop us a message!
              </p>

              <div className="contact-info contact_number" >
                <div>
                  <h5 className="contact-label">Phone:</h5>
                  <p>📞 91-9860145139</p>
                </div>
                <div>
                  <h5 className="contact-label">Email:</h5>
                  <p>
                    📧 <a href="mailto:info@yourgym.com">info@sgfitnesshub.com</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Card className="contact_card">
              <h2 className="text-center" style={{ color: '#7f1217' }}>
                Send Us a Message
              </h2>
              <p>
                Have a question or want to book a free trial? Fill out the form below and our team
                will get back to you as soon as possible.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div>
                  <Button type="submit" size="lg" className="contact_btn">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col md={12} className='mb-4'>
            <div className="map-responsive">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009404.903756979!2d64.198274125!3d18.5716489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c39888256c81%3A0xd018845fdd2389f!2sS%20G%20Fitness!5e1!3m2!1sen!2sin!4v1743847898585!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                className="map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Contact;
