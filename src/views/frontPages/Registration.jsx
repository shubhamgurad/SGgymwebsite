// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Signup from '../Images/image4.png'
// import '../frontPagesCSS/registration.css';

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     membershipPlan: "Silver",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation: check if password and confirmPassword match
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     // Submit form logic here (API call or other processing)
//     console.log("Form submitted", formData);
//     alert("Registration successful!");
//   };

//   return (
//     <Container fluid className="registration">
//       <Row className="justify-content-center">
//         {/* <Col md={6} lg={4} >

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFullName" className="mb-3">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formPhone" className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword" className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formConfirmPassword" className="mb-3">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formMembershipPlan" className="mb-3">
//               <Form.Label>Membership Plan</Form.Label>
//               <Form.Select
//                 name="membershipPlan"
//                 value={formData.membershipPlan}
//                 onChange={handleChange}
//               >
//                 <option value="Silver">Silver</option>
//                 <option value="Gold">Gold</option>
//                 <option value="Platinum">Platinum</option>
//               </Form.Select>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100">
//               Register
//             </Button>
//           </Form>
//         </Col> */}
//         {/* <Col md={6} lg={4} className="signup_img">
//            <img src={Signup} alt="img" />
//         </Col> */}
//         <Col md={6} lg={5} >
//             <div className="register-container">
//             <h4 className="mb-4 text-center text_signup">Sign Up</h4>
//             <p style={{textAlign:"center"}}>One step toword your Fitness Goal...</p>
//             <form onSubmit={handleSubmit} className="register-form" id="register-form">
//                 <div>
//                     <label htmlFor="fullname" className="signup_lebal">Full Name</label>
//                     <input type="text" placeholder="Enter your Full Name" className="singup_input" required />
//                 </div>
//                 <div>
//                     <label htmlFor="email" className="signup_lebal">Email Adress</label>
//                     <input type="text" placeholder="Enter your Email" className="singup_input" required />
//                 </div>
//                 <div>
//                     <label htmlFor="phone_number" className="signup_lebal">Phone Number</label>
//                     <input type="tel" placeholder="Enter your Phone Number" className="singup_input" required />
//                 </div>
//                 <div>
//                     <label htmlFor="gender" className="signup_lebal">Gender</label>
//                     <input type="text" placeholder="Enter your gender" className="singup_input" required />
//                 </div>
//                 <div className="d-flex">
//                 <div className="me-3">
//                     <label htmlFor="password" className="signup_lebal">Password</label>
//                     <input type="password" placeholder="Enter password" className="singup_input" required />
//                 </div>
//                 <div>
//                     <label htmlFor="pass" className="signup_lebal">Confrim Password</label>
//                     <input type="password" placeholder="Enter confirm password" className="singup_input" required />
//                 </div>
//                 </div>
//                 <div>
//                     <input type="submit" value="Register" className="signup_btn" />
//                 </div>
//                 {/* <div>
//                     <p style={{textAlign:"center"}}>Already have an Accout ? <a href="/">Sign in</a> </p>
//                 </div> */}

//                 <div className="signup-link">
//                 Already have an Account? <span className="signup-text" onClick={() => navigate('/login')}>Login</span>
//             </div>
//             </form>
//             </div>
//         </Col>

//       </Row>
//     </Container>
//   );
// };

// export default SignUpForm;




import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../frontPagesCSS/registration.css";
import { BASE_URL } from "../../BaseURL";
import toast, { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        console.log("User registered:", result);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          gender: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <Container fluid className="registration">
      <Toaster position="top-center" reverseOrder={false} />
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <div className="register-container">
            <h4 className="mb-4 text-center text_signup">Sign Up</h4>
            <p style={{ textAlign: "center" }}>
              One step toward your Fitness Goal...
            </p>
            <form onSubmit={handleSubmit} className="register-form" id="register-form">
              <div>
                <label htmlFor="fullName" className="signup_lebal">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  className="singup_input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="signup_lebal">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="singup_input"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="signup_lebal">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  className="singup_input"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="signup_lebal">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  placeholder="Enter your Gender"
                  className="singup_input"
                  required
                />
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <label htmlFor="password" className="signup_lebal">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="singup_input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="signup_lebal">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="singup_input"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="signup_btn">Register</button>
              <div className="signup-link">
                Already have an Account?{" "}
                <span className="signup-text" onClick={() => navigate("/login")}>
                  Login
                </span>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
