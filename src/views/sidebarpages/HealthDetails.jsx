// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// const HealthForm = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [formData, setFormData] = useState({
//     fitnessLevel: "Intermediate",
//     medicalConditions: "None",
//     weight: "65",
//     height: "170",
//     emergencyContactName: "Priya Sharma",
//     emergencyContactNumber: "9876543210"
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleEditToggle = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     console.log("Saved Data:", formData);
//     alert("Health details updated successfully!");
//   };

//   return (
//     <Container className="mt-4">
//       <Card>
//         <Card.Body>
//           <Card.Title className="mb-3">Health & Fitness Details</Card.Title>
//           <Form>
//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Group controlId="fitnessLevel">
//                   <Form.Label>Current Fitness Level</Form.Label>
//                   <Form.Select
//                     name="fitnessLevel"
//                     value={formData.fitnessLevel}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                   >
//                     <option value="">Select</option>
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Col>

//               <Col md={6}>
//                 <Form.Group controlId="medicalConditions">
//                   <Form.Label>Medical Conditions (Optional)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="medicalConditions"
//                     value={formData.medicalConditions}
//                     onChange={handleChange}
//                     placeholder="e.g., Asthma, Diabetes"
//                     disabled={!isEditing}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Group controlId="weight">
//                   <Form.Label>Weight (in cm)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="weight"
//                     value={formData.weight}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={6}>
//                 <Form.Group controlId="height">
//                   <Form.Label>Height (in cm)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="height"
//                     value={formData.height}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Group controlId="emergencyContactName">
//                   <Form.Label>Emergency Contact Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="emergencyContactName"
//                     value={formData.emergencyContactName}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={6}>
//                 <Form.Group controlId="emergencyContactNumber">
//                   <Form.Label>Emergency Contact Number</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="emergencyContactNumber"
//                     value={formData.emergencyContactNumber}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <div className="d-flex justify-content-end mt-4">
//               {isEditing ? (
//                 <Button variant="success" onClick={handleSave} className="post-btn">
//                   Save Changes
//                 </Button>
//               ) : (
//                 <Button variant="primary" onClick={handleEditToggle} className="post-btn">
//                   Edit
//                 </Button>
//               )}
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default HealthForm;



import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../BaseURL';
import '../sidebarCSS/post.css';

const HealthForm = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const userId = storedUserData?.userId;
  const userEmail = storedUserData?.email;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fitnessLevel: "",
    medicalConditions: "",
    weight: "",
    height: "",
    emergencyContactName: "",
    emergencyContactNumber: ""
  });

  // Fetch user data on mount
  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/getuser/${userId}`);
        const data = res.data;

        setFormData({
          fitnessLevel: data.fitnessLevel || "",
          medicalConditions: data.medicalConditions || "",
          weight: data.weight || "",
          height: data.height || "",
          emergencyContactName: data.emergencyContactName || "",
          emergencyContactNumber: data.emergencyContactNumber || ""
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to load user health data.");
      }
    };

    if (userId) {
      fetchHealthData();
    }
  }, [userId]);

  // Form change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Edit and Save logic
  const handleEditToggle = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      await axios.post(`${BASE_URL}/users/update-profile`, {
        userId,
        email: userEmail,
        ...formData
      });

      alert("Health details updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save health data.");
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Health & Fitness Details</Card.Title>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="fitnessLevel">
                  <Form.Label>Current Fitness Level</Form.Label>
                  <Form.Select
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleChange}
                    disabled={!isEditing}
                  >
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
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    placeholder="e.g., Asthma, Diabetes"
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-4">
              {isEditing ? (
                <Button variant="success" className="post-btn" onClick={handleSave}>
                  Save Changes
                </Button>
              ) : (
                <Button variant="primary" className="post-btn" onClick={handleEditToggle}>
                  Edit
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HealthForm;
