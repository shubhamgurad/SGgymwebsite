// import React from "react";
// import img from '../Images/image4.png';
// import { useNavigate } from "react-router-dom";
// import { FaSignInAlt, FaUser, FaLock } from "react-icons/fa";
// import '../frontPagesCSS/login.css';

// const Login = () => {

//   const navigate = useNavigate();

//     return(
//         <div className="login_body">
//         <div className="sk_login_container">
//           <div className="illustration">
//             <img src={img} alt="Illustration" width="500" />
//           </div>
//           <div className="login-box">
//             <div className="welcome_txt"><FaSignInAlt /> Login </div>
            
//             <form>
//               <div className="input-group">
//                 <FaUser className="login-icons"/>
//                 <input type="text" placeholder="Email or Contact Number" required className="input-field" />
//               </div>
//               <div className="input-group">
//                 <FaLock className="login-icons"/>
//                 <input type="password" placeholder="Password" required className="input-field"/>
//               </div>
//               <button type="submit" className="login-btn">Login</button>
//               <div className="signup-link">
//               Don't have an account? <span className="signup-text" onClick={() => navigate('/registration')}>SignUp</span>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Login;




import React, { useState } from "react";
import img from '../Images/image4.png';
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser, FaLock } from "react-icons/fa";
import '../frontPagesCSS/login.css';
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';
import { BASE_URL } from '../../BaseURL';

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let response;
      if (credentials.usernameOrEmail.includes('@')) {
        response = await axios.post(`${BASE_URL}/users/login`, {
          email: credentials.usernameOrEmail,
          password: credentials.password
        });
      } else {
        response = await axios.post(`${BASE_URL}/admin/login`, {
          username: credentials.usernameOrEmail,
          password: credentials.password
        });
      }
  
      // console.log(response.data);  // Log the full response
  
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("token", token); // Store the token
  
        // Manually decode the JWT to get the role
        const decodedToken = token.split('.')[1]; // Get the payload part (middle section)
        const base64Url = decodedToken.replace('-', '+').replace('_', '/'); // Fix base64 URL encoding
        const decodedPayload = JSON.parse(atob(base64Url)); // Decode base64 and parse as JSON
  
        const userRole = decodedPayload.role || 'defaultRole'; // Extract role from decoded token
        localStorage.setItem("userRole", userRole); // Store the userRole
        
        // Store the full userData or adminData in localStorage
        if (response.data.userData) {
          localStorage.setItem("userData", JSON.stringify(response.data.userData)); // Store user data
        } else if (response.data.adminData) {
          localStorage.setItem("adminData", JSON.stringify(response.data.adminData)); // Store admin data
        }
  
        toast.success("Login successful!"); // Success toast

        // Navigate based on the role
        if (userRole === 'Admin') {
          navigate("/dashboard"); // Navigate to dashboard if role is Admin
        } else {
          navigate("/userform"); // Navigate to userform if role is Gymuser or other
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed"); // Error toast
    }
  };

  return (
    <div className="login_body">
      <div className="sk_login_container">
        <div className="illustration">
          <img src={img} alt="Illustration" width="500" />
        </div>
        <div className="login-box">
          <div className="welcome_txt"><FaSignInAlt /> Login </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="login-icons" />
              <input
                type="text"
                name="usernameOrEmail"
                placeholder="Email or Username"
                required
                className="input-field"
                value={credentials.usernameOrEmail}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <FaLock className="login-icons" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="input-field"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
            <div className="signup-link">
              Don't have an account?{" "}
              <span className="signup-text" onClick={() => navigate('/registration')}>
                SignUp
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Add the Toast container here */}
      <Toaster position="top-center" /> {/* Position of the toast */}
    </div>
  );
};

export default Login;
