// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// const MembershipForm = () => {
//   const [isEditing, setIsEditing] = useState(false);

//   const [formData, setFormData] = useState({
//     membershipPlan: "Gold",
//     startDate: "2025-04-08",
//     workoutPreference: "Yoga",
//     goal: "Muscle Gain"
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleEditToggle = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     console.log("Membership Data Saved:", formData);
//     alert("Membership details updated successfully!");
//   };

//   return (
//     <Container className="mt-4">
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
//                   disabled={!isEditing}
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
//                   disabled={!isEditing}
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
//                   disabled={!isEditing}
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
//               <Form.Group controlId="goal">
//                 <Form.Label>Health & Fitness Goals</Form.Label>
//                 <Form.Select
//                   name="goal"
//                   value={formData.goal}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 >
//                   <option value="">Select</option>
//                   <option value="Weight Gain">Weight Gain</option>
//                   <option value="Weight Loss">Weight Loss</option>
//                   <option value="Muscle Gain">Muscle Gain</option>
//                   <option value="Improve Stamina">Improve Stamina</option>
//                   <option value="Increase Flexibility">Increase Flexibility</option>
//                   <option value="Overall Fitness">Overall Fitness</option>
//                   <option value="Rehabilitation">Rehabilitation</option>
//                   <option value="Stress Relief">Stress Relief</option>
//                   <option value="Cardiovascular Health">Cardiovascular Health</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>

//           <div className="d-flex justify-content-end mt-3">
//             {isEditing ? (
//               <Button variant="success" onClick={handleSave} className="post-btn">
//                 Save Changes
//               </Button>
//             ) : (
//               <Button variant="primary" onClick={handleEditToggle} className="post-btn">
//                 Edit
//               </Button>
//             )}
//           </div>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default MembershipForm;




import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../BaseURL';

const MembershipForm = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = userData?.userId;

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    membershipPlan: '',
    startDate: '',
    workoutPreference: '',
    goal: ''
  });

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/getuser/${userId}`);
      const user = res.data;

      setFormData({
        membershipPlan: user.membershipPlan || '',
        startDate: user.preferredStartDate?.split('T')[0] || '',
        workoutPreference: user.workoutPreference || '',
        goal: user.healthGoals || ''
      });
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.post(`${BASE_URL}/users/update-profile`, {
        userId,
        membershipPlan: formData.membershipPlan,
        startDate: formData.startDate,
        workoutPreference: formData.workoutPreference,
        goal: formData.goal
      });

      alert('Membership details updated successfully!');
      setIsEditing(false);
    } catch (err) {
      console.error('Update error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-3 mb-4">
        <h5>Membership & Goals</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="membershipPlan">
                <Form.Label>Membership Plan</Form.Label>
                <Form.Select
                  name="membershipPlan"
                  value={formData.membershipPlan}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
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
                  disabled={!isEditing}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="workoutPreference">
                <Form.Label>Workout Preference</Form.Label>
                <Form.Select
                  name="workoutPreference"
                  value={formData.workoutPreference}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
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
                <Form.Select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
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

          <div className="d-flex justify-content-end mt-3">
            {isEditing ? (
              <Button variant="success" onClick={handleSave} className="post-btn">
                Save Changes
              </Button>
            ) : (
              <Button variant="primary" onClick={handleEditToggle} className="post-btn">
                Edit
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default MembershipForm;
