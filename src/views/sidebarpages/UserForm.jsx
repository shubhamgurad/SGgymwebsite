// import React, { useEffect, useState } from "react";
// import { Container, Card, Form, Button, Row, Col, Image } from "react-bootstrap";

// const UserDashboardForm = () => {
//   const [userDetails, setUserDetails] = useState({});
//   const [formData, setFormData] = useState({
//     profileImage: null,
//     dob: "",
//     age: "",
//     profession: "",
//     fitnessLevel: "",
//     medicalConditions: "",
//     emergencyContactName: "",
//     emergencyContactNumber: "",
//     weight: "",
//     height: "",
//     membershipPlan: "",
//     startDate: "",
//     workoutPreference: "",
//     goal: "",
//   });

//   useEffect(() => {
//     const dummyUser = {
//       name: "Shubham Malode",
//       email: "shubhammalode@gmail.com",
//       mobile: "1234567890",
//     };
//     setUserDetails(dummyUser);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, profileImage: file }));
//   };

//   const handleSave = () => {
//     console.log("Saved Form Data", formData);
//     alert("Details Saved Successfully!");
//   };

//   return (
//     <Container className="mt-4">
//       <h3 className="mb-4">Welcome, {userDetails.name}</h3>

//       <Card className="p-3 mb-4">
//         <h5>User Details</h5>
//         <p><strong>Name:</strong> {userDetails.name}</p>
//         <p><strong>Email:</strong> {userDetails.email}</p>
//         <p><strong>Mobile:</strong> {userDetails.mobile}</p>
//       </Card>

//       <Card className="p-3 mb-4">
//         <h5>Personal Information</h5>
//         <Form>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="dob">
//                 <Form.Label>Date of Birth</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="age">
//                 <Form.Label>Age</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="profession">
//                 <Form.Label>Profession</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="profession"
//                   placeholder="e.g., Software Developer"
//                   value={formData.profession}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="profileImage">
//                 <Form.Label>Profile Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 {formData.profileImage && (
//                   <Image
//                     src={URL.createObjectURL(formData.profileImage)}
//                     alt="Preview"
//                     thumbnail
//                     className="mt-2"
//                     width={100}
//                   />
//                 )}
//               </Form.Group>
//             </Col>
//           </Row>
//         </Form>
//       </Card>

//       <Card className="p-3 mb-4">
//         <h5>Health & Fitness Details</h5>
//         <Form>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="fitnessLevel">
//                 <Form.Label>Current Fitness Level</Form.Label>
//                 <Form.Select
//                   name="fitnessLevel"
//                   value={formData.fitnessLevel}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="Beginner">Beginner</option>
//                   <option value="Intermediate">Intermediate</option>
//                   <option value="Advanced">Advanced</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="medicalConditions">
//                 <Form.Label>Medical Conditions (Optional)</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="medicalConditions"
//                   placeholder="e.g., Asthma, Diabetes"
//                   value={formData.medicalConditions}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="weight">
//                 <Form.Label>Weight (in kg)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="height">
//                 <Form.Label>Height (in cm)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="emergencyContactName">
//                 <Form.Label>Emergency Contact Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="emergencyContactName"
//                   value={formData.emergencyContactName}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="emergencyContactNumber">
//                 <Form.Label>Emergency Contact Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="emergencyContactNumber"
//                   value={formData.emergencyContactNumber}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//         </Form>
//       </Card>

//       <Card className="p-3 mb-4">
//         <h5>Membership & Goals</h5>
//         <Form>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="membershipPlan">
//                 <Form.Label>Membership Plan</Form.Label>
//                 <Form.Select
//                   name="membershipPlan"
//                   value={formData.membershipPlan}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="Silver">Silver</option>
//                   <option value="Gold">Gold</option>
//                   <option value="Platinum">Platinum</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="startDate">
//                 <Form.Label>Preferred Start Date</Form.Label>
//                 <Form.Control
//                   type="date"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="workoutPreference">
//                 <Form.Label>Workout Preference</Form.Label>
//                 <Form.Select
//                   name="workoutPreference"
//                   value={formData.workoutPreference}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="Gym">Gym</option>
//                   <option value="Yoga">Yoga</option>
//                   <option value="Zumba">Zumba</option>
//                   <option value="Personal Training">Personal Training</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//                 <Form.Group controlId="goal">
//                     <Form.Label>Health & Fitness Goals</Form.Label>
//                     <Form.Select
//                     name="goal"
//                     value={formData.goal}
//                     onChange={handleChange}
//                     >
//                     <option value="">Select</option>
//                     <option value="Weight Gain">Weight Gain</option>
//                     <option value="Weight Loss">Weight Loss</option>
//                     <option value="Muscle Gain">Muscle Gain</option>
//                     <option value="Improve Stamina">Improve Stamina</option>
//                     <option value="Increase Flexibility">Increase Flexibility</option>
//                     <option value="Overall Fitness">Overall Fitness</option>
//                     <option value="Rehabilitation">Rehabilitation</option>
//                     <option value="Stress Relief">Stress Relief</option>
//                     <option value="Cardiovascular Health">Cardiovascular Health</option>
//                     </Form.Select>
//                 </Form.Group>
//             </Col>
//           </Row>
//         </Form>
//       </Card>

//       <div className="d-flex justify-content-end mb-3">
//         <Button variant="primary" onClick={handleSave} className="post-btn">
//           Save
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default UserDashboardForm;



import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from '../../BaseURL';
import '../sidebarCSS/post.css';

const UserDashboardForm = () => {
  const [userDetails, setUserDetails] = useState({});
  const [formData, setFormData] = useState({
    profileImage: null,
    dob: "",
    age: "",
    profession: "",
    fitnessLevel: "",
    medicalConditions: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    weight: "",
    height: "",
    membershipPlan: "",
    startDate: "",
    workoutPreference: "",
    goal: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const userId = userData?.userId;

        if (!userId) {
          console.error("User ID not found in localStorage.");
          return;
        }

        const res = await axios.get(`${BASE_URL}/users/getuser/${userId}`);
        setUserDetails(res.data);
        // Pre-fill formData with any existing profile data (optional)
        setFormData((prev) => ({
          ...prev,
          ...res.data.profile, // Adjust depending on backend data structure
        }));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profileImage: file }));
  };

  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append("email", userDetails.email); // assuming email is unique key

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          data.append(key, value);
        }
      });

      const response = await axios.post(`${BASE_URL}/users/update-profile`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save user data");
    }
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Welcome, {userDetails.fullName}</h3>

      <Card className="p-3 mb-4">
        <h5>User Details</h5>
        <p><strong>Name:</strong> {userDetails.fullName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Mobile:</strong> {userDetails.phone}</p>
        <p><strong>Gender:</strong> {userDetails.gender}</p>
      </Card>

      <Card className="p-3 mb-4">
        <h5>Personal Information</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="profession">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" name="profession" value={formData.profession} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="profileImage">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                {formData.profileImage && (
                  <Image
                    src={typeof formData.profileImage === "string" ? formData.profileImage : URL.createObjectURL(formData.profileImage)}
                    thumbnail
                    className="mt-2"
                    width={100}
                  />
                )}
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-3 mb-4">
        <h5>Health & Fitness Details</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fitnessLevel">
                <Form.Label>Current Fitness Level</Form.Label>
                <Form.Select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="medicalConditions">
                <Form.Label>Medical Conditions (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  name="medicalConditions"
                  placeholder="e.g., Asthma, Diabetes"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="weight">
                <Form.Label>Weight (in kg)</Form.Label>
                <Form.Control
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="height">
                <Form.Label>Height (in cm)</Form.Label>
                <Form.Control
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="emergencyContactName">
                <Form.Label>Emergency Contact Name</Form.Label>
                <Form.Control
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="emergencyContactNumber">
                <Form.Label>Emergency Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="emergencyContactNumber"
                  value={formData.emergencyContactNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-3 mb-4">
        <h5>Membership & Goals</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="membershipPlan">
                <Form.Label>Membership Plan</Form.Label>
                <Form.Select name="membershipPlan" value={formData.membershipPlan} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="startDate">
                <Form.Label>Preferred Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="workoutPreference">
                <Form.Label>Workout Preference</Form.Label>
                <Form.Select name="workoutPreference" value={formData.workoutPreference} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Gym">Gym</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Zumba">Zumba</option>
                  <option value="Personal Training">Personal Training</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="goal">
                <Form.Label>Health & Fitness Goals</Form.Label>
                <Form.Select name="goal" value={formData.goal} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Weight Gain">Weight Gain</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="Improve Stamina">Improve Stamina</option>
                  <option value="Increase Flexibility">Increase Flexibility</option>
                  <option value="Overall Fitness">Overall Fitness</option>
                  <option value="Rehabilitation">Rehabilitation</option>
                  <option value="Stress Relief">Stress Relief</option>
                  <option value="Cardiovascular Health">Cardiovascular Health</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" className="post-btn" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Container>
  );
};

export default UserDashboardForm;
