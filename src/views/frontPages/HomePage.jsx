import React, { useState, useEffect } from 'react';
import Header from '../frontPages/header.jsx';
import Footer from '../frontPages/footer.jsx';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import '../frontPagesCSS/homepage.css';
import section2img from '../Images/aboutimg.jpg';
import { FaRunning, FaHeartbeat, FaDumbbell, FaWeight, FaUser, FaCheckCircle } from 'react-icons/fa';
import services1 from '../Images/yoga_image.jpg';
import services2 from '../Images/personaltraining_image.jpg';
import services3 from '../Images/dance_image.jpg';
import services4 from '../Images/weightloss.jpg';
import trainer1 from '../Images/trainer1.jpg';
import trainer2 from '../Images/trainer2.jpg';
import trainer3 from '../Images/trainer3.jpg';
import { IoIosArrowForward } from "react-icons/io";
import trainerImg from '../Images/trainerwithoutbg.png';
import { FaWhatsapp } from 'react-icons/fa';
import companylogo from '../Images/SGFitnessHubLogo.png';
import { BASE_URL } from '../../BaseURL.js';
import axios from 'axios';

const HomePage = () => {

  const fitnesscards = [
    {
      title: 'Strategies',
      icon: <FaRunning size={40} />,
      text: 'Personalized fitness plans to help you train smarter and achieve your goals efficiently.',
    },
    {
      title: 'Yoga',
      icon: <FaHeartbeat size={40} />,
      text: 'Improve flexibility, reduce stress, and build inner strength through mindful movement.',
    },
    {
      title: 'Workout',
      icon: <FaDumbbell size={40} />,
      text: 'Strengthen muscles, boost endurance, and stay active with effective training routines.',
    },
    {
      title: 'Weight Loss',
      icon: <FaWeight size={40} />,
      text: 'Burn calories, tone your body, and maintain a healthy lifestyle with expert guidance.',
    },
  ];

  const services = [
    { img: services1, name: "Yoga", trainer: "Rohini Mhatre" },
    { img: services2, name: "Personal Training", trainer: "Ajit Bhosle" },
    { img: services3, name: "Dance Workout", trainer: "Manjusha Patil" },
    { img: services4, name: "Weight Loss", trainer: "Prem Malhotra" }
  ];

  const trainers = [
    {
      name: "Shubham Gurad",
      role: "Leader",
      image: trainer1,
    },
    {
      name: "Chetan Gurad",
      role: "Gym Coach",
      image: trainer2,
    },
    {
      name: "Vrushali Gurad",
      role: "Dance Trainer",
      image: trainer3,
    },
  ];

  const [hovered, setHovered] = useState(null);

  // const pricingData = [
  //   {
  //     id: 1,
  //     title: "Basic",
  //     price: "₹1400",
  //     features: ["Duration: 12 months", "Personal trainer: 0", "Amount of people: 1", "Number of visits: Unlimited"],
  //     // link: "https://billing.bighostindia.in/store/linux-shared-hosting",
  //   },
  //   {
  //     id: 2,
  //     title: "Standard",
  //     price: "₹4800",
  //     features: ["Duration: 12 months", "Personal trainer: 1", "Amount of people: 1", "Number of visits: Unlimited"],
  //     // link: "https://billing.bighostindia.in/store/cloud-hosting",
  //   },
  //   {
  //     id: 3,
  //     title: "Premium",
  //     price: "₹8300",
  //     features: ["Duration: 12 months", "Personal trainer: 1", "Amount of people: 1", "Number of visits: Unlimited"],
  //     // link: "https://billing.bighostindia.in/store/cloud-reseller-hosting",
  //   },
  // ];

  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/plans/getAllPlan`); // change base URL if deployed
      setPlans(res.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);


  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Header />
      <div className="background-image">
        <div className="overlay"></div>
        <Container className="overlay-text">
          <Row className='m-0'>
            <Col className="text-center">
              <h1 className="overlay-heading">Craft Your Ultimate Fitness Experience</h1>
              <p className="lead text-white">Transform every workout into a milestone, and turn your fitness dreams into reality.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="section2-container">
        <Row className="align-items-center section2-row m-0">
          {/* Image Section */}
          <Col md={6}>
            <Image
              src={section2img} // Replace with your gym image URL
              alt="Unisex Gym"
              fluid
              className='section2-image'
            />
          </Col>

          {/* Text Section */}
          <Col md={6} className="section2-text">
            <h2 className='section2-head'>Story About Us</h2>
            <p className='section2-subhead'>At <span style={{ fontWeight: '600' }}>SG Fitness Hub</span>, we are passionate about transforming lives through fitness. Our mission is to provide expert guidance, personalized workout plans, and cutting-edge tools to help you achieve your health goals—whether it's building muscle, losing weight, or maintaining an active lifestyle.</p>
            <p className='section2-subhead'>We see fitness as a journey, not just a goal. With insights, motivation, and support, we help you stay on track and become your best self.</p>
            <Button className='section2-btn'  onClick={() => {window.location.href = '/about'}}>Read More</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="fitness-card-conteiner">
        <Row className="section2-row m-0">
          {fitnesscards.map((card, index) => (
            <Col key={index} md={3}>
              <Card className="fitness-card">
                <div className="fitness-card-icon">
                  {card.icon}
                </div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <div className="card-overlay">
                    <p className="card-text">{card.text}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className='fitness-card-conteiner'>
        <Row className="section2-row m-0">
          <h2 className='service-head'>OUR SERVICES</h2>
          {services.map((services, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={3}>
              <Card className="text-center shadow-sm services-card">
                <Card.Img variant="top" src={services.img} className="services-image" />
                <Card.Body className="services-name">
                  <Card.Title className='services-title'>{services.name}</Card.Title>
                  <Card.Text className='services-subtitle'><FaUser className='services-icon' />{services.trainer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className='fitness-card-conteiner'>
        <Row className="section2-row m-0">
          <h2 className='service-head'>EXPERT TRAINERS</h2>
        </Row>
        <Row className="justify-content-center section2-row m-0">
          {trainers.map((trainer, index) => (
            <Col
              md={4}
              sm={12}
              key={index}
              className="trainer-col"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card className={`trainer-card ${hovered === index ? "hovered" : ""}`}>
                <Card.Img variant="top" src={trainer.image} className="trainer-img" />
                <Card.Body>
                  <Card.Title>{trainer.name}</Card.Title>
                  <Card.Subtitle className="text-danger">{trainer.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="fitness-card-conteiner">
        <div className="fitness-banner">
          <div className="overlay">
            <Row className="m-0 align-items-center">
              <Col md={8}>
                <div className="fitness-content">
                  <h2>GET TRAINING TODAY</h2>
                  <p>
                  Transform your fitness journey with expert training tailored to your goals. <br />
                  Join a community dedicated to strength, discipline, and lasting results.
                  </p>
                  <Button className="contact-btn" onClick={() => {window.location.href = '/contact'}}>Contact Now</Button>
                </div>
              </Col>
              <Col md={4} className="text-center">
                <img src={trainerImg} alt="trainer" className="overlay-trainer" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      {/* <Container fluid className='fitness-card-conteiner'>
        <Row className="section2-row m-0">
          <h2 className='service-head'>MEMBERSHIP PLANS</h2>
        </Row>
        <Row className="pricing-card-container section2-row p-0 m-0">
          {pricingData.map((card) => (
            <Col key={card.id} lg={3} md={6} sm={12} className="p-2">
              <div className="pricing-card mx-0 mb-4">

                <div className="card-top">
                  <svg
                    className="top-wave top-wave-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 600"
                  >
                    <path
                      fill="#cf231f"
                      fillOpacity="0.8"
                      d="M0,200L48,194.7C96,189,192,179,288,173.3C384,168,480,168,576,162.7C672,157,768,147,864,157.3C960,168,1056,200,1152,205.3C1248,211,1344,189,1392,178.7L1440,168L1440,0L0,0Z"
                    />
                  </svg>

                  <svg
                    className="top-wave top-wave-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 500"
                  >
                    <path
                      fill="#e45755"
                      fillOpacity="0.7"
                      d="M0,320L48,307.3C96,294,192,264,288,245.3C384,226,480,218,576,213.3C672,208,768,221,864,245.3C960,269,1056,309,1152,311C1248,313,1344,269,1392,250.7L1440,232L1440,0L0,0Z"
                    />
                  </svg>

                  <svg
                    className="top-wave top-wave-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 400"
                  >
                    <path
                      fill="#f3a3a1"
                      fillOpacity="0.3"
                      d="M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,192C672,213,768,235,864,245.3C960,256,1056,235,1152,213.3C1248,192,1344,171,1392,160L1440,149.3L1440,0L0,0Z"
                    />
                  </svg>

                  <h4 className="card-title">{card.title}</h4>
                  <div className="price-circle">
                    <p className="price">{card.price}</p><sub>/mo</sub>
                  </div>
                </div>

                <div className="card-content">
                  <ul className="features text-start mx-5">
                    {card.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheckCircle className="checkcircle-card" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="start-button mb-4"
                    onClick={() => handleNavigate(card.link)}
                  >
                    START NOW <IoIosArrowForward style={{ fontSize: "15px" }} />
                  </button>
                </div>

                <div className="card-bottom">
                  <svg
                    className="bottom-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 400"
                  >
                    <path
                      fill="#FE8200"
                      fillOpacity="0.1"
                      d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,234.7C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,400L0,400Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container> */}

<Container fluid className='fitness-card-conteiner'>
      <Row className="section2-row m-0">
        <h2 className='service-head'>MEMBERSHIP PLANS</h2>
      </Row>
      <Row className="pricing-card-container section2-row p-0 m-0">
        {plans.map((card) => (
          <Col key={card.planId} lg={3} md={6} sm={12} className="p-2">
            <div className="pricing-card mx-0 mb-4">
            <div className="card-top">
                  <svg
                    className="top-wave top-wave-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 600"
                  >
                    <path
                      fill="#cf231f"
                      fillOpacity="0.8"
                      d="M0,200L48,194.7C96,189,192,179,288,173.3C384,168,480,168,576,162.7C672,157,768,147,864,157.3C960,168,1056,200,1152,205.3C1248,211,1344,189,1392,178.7L1440,168L1440,0L0,0Z"
                    />
                  </svg>

                  <svg
                    className="top-wave top-wave-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 500"
                  >
                    <path
                      fill="#e45755"
                      fillOpacity="0.7"
                      d="M0,320L48,307.3C96,294,192,264,288,245.3C384,226,480,218,576,213.3C672,208,768,221,864,245.3C960,269,1056,309,1152,311C1248,313,1344,269,1392,250.7L1440,232L1440,0L0,0Z"
                    />
                  </svg>

                  <svg
                    className="top-wave top-wave-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 400"
                  >
                    <path
                      fill="#f3a3a1"
                      fillOpacity="0.3"
                      d="M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,192C672,213,768,235,864,245.3C960,256,1056,235,1152,213.3C1248,192,1344,171,1392,160L1440,149.3L1440,0L0,0Z"
                    />
                  </svg>

                  <h4 className="card-title">{card.title}</h4>
                  <div className="price-circle">
                    <p className="price">₹{card.price}</p><sub>/mo</sub>
                  </div>
                </div>
              

              {/* Content Section */}
              <div className="card-content">
                <ul className="features text-start mx-5">
                  <li><FaCheckCircle className="checkcircle-card" /> Duration: {card.duration}</li>
                  <li><FaCheckCircle className="checkcircle-card" /> Personal trainer: {card.personalTrainer}</li>
                  <li><FaCheckCircle className="checkcircle-card" /> People: {card.peopleCount}</li>
                  <li><FaCheckCircle className="checkcircle-card" /> Visits: {card.visits}</li>
                </ul>
                <button className="start-button mb-4" onClick={() => handleNavigate(card.link)}>
                  START NOW <IoIosArrowForward style={{ fontSize: "15px" }} />
                </button>
              </div>

              {/* Bottom Section */}
              <div className="card-bottom">
                  <svg
                    className="bottom-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 400"
                  >
                    <path
                      fill="#FE8200"
                      fillOpacity="0.1"
                      d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,234.7C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,400L0,400Z"
                    ></path>
                  </svg>
                </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

       {/* Sticky Icon */}
       <div className="sticky-icon" onClick={handleShowPopup}>
        <FaWhatsapp size={32} />
      </div>

      {showPopup && (
        <div className="chat-popup">
          <div className="chat-header">
            <img
              src={companylogo} // Replace with your desired logo
              alt="Company Logo"
              className="chat-logo"
            />
            <div className="chat-title">
              <h6>SG Fitness Hub</h6>
              <span className="chat-status">Online</span>
            </div>
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message received">
              Hi! How can I assist you today?
            </div>
            {/* <div className="chat-message sent">
              I need help with my account.
            </div>
            <div className="chat-message received">
              Sure, please provide more details.
            </div> */}
          </div>
          <div className="chat-footer">
            <Button
              className="whatsapp-button"
              href="https://wa.me/917262935518" // Replace with your WhatsApp number
              target="_blank"
            >
              <FaWhatsapp size={20} style={{ paddingRight: '5px' }} />WhatsApp Us
            </Button>
            {/* <p className="chat-powered" onClick={() => window.open('https://wachatapi.com', '_blank')}>Powered by WaChat API</p> */}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default HomePage
