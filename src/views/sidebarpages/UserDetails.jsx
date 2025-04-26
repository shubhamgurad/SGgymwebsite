// import React, { useState } from 'react';
// import { Container, Row, Col, Table, Modal, Button, Form } from 'react-bootstrap';
// import { FaEye, FaPencilAlt } from 'react-icons/fa';
// import '../sidebarCSS/table.css';

// const mockUsers = [
//   {
//     id: 1,
//     name: 'Rajesh Kumar',
//     email: 'rajesh.kumar@example.in',
//     mobile: '9876543210',
//     dob: '1985-02-20',
//     gender: 'Male',
//     fitnessLevel: 'Advanced',
//     medicalCondition: 'None',
//     membershipPlan: 'Platinum',
//     preferredStartDate: '2025-04-12',
//     workoutPreferences: 'Strength Training, HIIT',
//   },
//   {
//     id: 2,
//     name: 'Anjali Sharma',
//     email: 'anjali.sharma@example.in',
//     mobile: '9123456780',
//     dob: '1992-08-15',
//     gender: 'Female',
//     fitnessLevel: 'Intermediate',
//     medicalCondition: 'Thyroid',
//     membershipPlan: 'Gold',
//     preferredStartDate: '2025-04-18',
//     workoutPreferences: 'Yoga, Cardio',
//   },
//   {
//     id: 3,
//     name: 'Vikram Desai',
//     email: 'vikram.desai@example.in',
//     mobile: '9001122334',
//     dob: '1989-11-30',
//     gender: 'Male',
//     fitnessLevel: 'Beginner',
//     medicalCondition: 'None',
//     membershipPlan: 'Silver',
//     preferredStartDate: '2025-04-20',
//     workoutPreferences: 'Functional Training, Cardio',
//   },
//   {
//     id: 4,
//     name: 'Priya Mehta',
//     email: 'priya.mehta@example.in',
//     mobile: '9988776655',
//     dob: '1995-06-10',
//     gender: 'Female',
//     fitnessLevel: 'Intermediate',
//     medicalCondition: 'Asthma',
//     membershipPlan: 'Gold',
//     preferredStartDate: '2025-04-25',
//     workoutPreferences: 'Zumba, Pilates',
//   },
//   {
//     id: 5,
//     name: 'Amit Joshi',
//     email: 'amit.joshi@example.in',
//     mobile: '9112233445',
//     dob: '1990-01-05',
//     gender: 'Male',
//     fitnessLevel: 'Beginner',
//     medicalCondition: 'Diabetes',
//     membershipPlan: 'Basic',
//     preferredStartDate: '2025-04-30',
//     workoutPreferences: 'Walking, Yoga',
//   },
// ];

// const UserDetails = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editedUser, setEditedUser] = useState({});

//   const handleView = (user) => {
//     setSelectedUser(user);
//     setIsEditMode(false);
//     setShowModal(true);
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setEditedUser({ ...user });
//     setIsEditMode(true);
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setSelectedUser(null);
//     setIsEditMode(false);
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     console.log('Updated User:', editedUser); // Replace this with actual update logic
//     setSelectedUser(editedUser);
//     setIsEditMode(false);
//     setShowModal(false);
//   };

//   return (
//     <Container className="mainTableContainer">
//       <Row className="justify-content-between align-items-center pb-3">
//         <Col xs="auto">
//           <h3 className="mb-0">User Details</h3>
//         </Col>
//       </Row>

//       <Row>
//         <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
//           <thead>
//             <tr>
//               <th style={{ textAlign: 'center' }}>Sr No</th>
//               <th style={{ textAlign: 'center' }}>Name</th>
//               <th style={{ textAlign: 'center' }}>Email</th>
//               <th style={{ textAlign: 'center' }}>Mobile</th>
//               <th style={{ textAlign: 'center' }}>Fitness Level</th>
//               <th style={{ textAlign: 'center' }}>Membership Plan</th>
//               <th style={{ textAlign: 'center' }}>Preferred Start Date</th>
//               <th style={{ textAlign: 'center' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mockUsers.map((user, index) => (
//               <tr key={user.id}>
//                 <td style={{ textAlign: 'center' }}>{index + 1}</td>
//                 <td style={{ textAlign: 'center' }}>{user.name}</td>
//                 <td style={{ textAlign: 'center' }}>{user.email}</td>
//                 <td style={{ textAlign: 'center' }}>{user.mobile}</td>
//                 <td style={{ textAlign: 'center' }}>{user.fitnessLevel}</td>
//                 <td style={{ textAlign: 'center' }}>{user.membershipPlan}</td>
//                 <td style={{ textAlign: 'center' }}>{user.preferredStartDate}</td>
//                 <td className="text-center">
//                   <FaEye size={20} className="downoladIcon" title="View" onClick={() => handleView(user)} />
//                   <FaPencilAlt size={20} className="editicon ms-3" title="Edit" onClick={() => handleEdit(user)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Row>

//       <Modal show={showModal} onHide={handleClose} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>{isEditMode ? 'Edit User' : 'User Full Information'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedUser && (
//             <Form>
//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       name="name"
//                       value={isEditMode ? editedUser.name : selectedUser.name}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       name="email"
//                       value={isEditMode ? editedUser.email : selectedUser.email}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Mobile</Form.Label>
//                     <Form.Control
//                       name="mobile"
//                       value={isEditMode ? editedUser.mobile : selectedUser.mobile}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Date of Birth</Form.Label>
//                     <Form.Control
//                       name="dob"
//                       value={isEditMode ? editedUser.dob : selectedUser.dob}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Gender</Form.Label>
//                     <Form.Control
//                       name="gender"
//                       value={isEditMode ? editedUser.gender : selectedUser.gender}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Fitness Level</Form.Label>
//                     <Form.Control
//                       name="fitnessLevel"
//                       value={isEditMode ? editedUser.fitnessLevel : selectedUser.fitnessLevel}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Medical Condition</Form.Label>
//                     <Form.Control
//                       name="medicalCondition"
//                       value={isEditMode ? editedUser.medicalCondition : selectedUser.medicalCondition}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label>Membership Plan</Form.Label>
//                     <Form.Control
//                       name="membershipPlan"
//                       value={isEditMode ? editedUser.membershipPlan : selectedUser.membershipPlan}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={12}>
//                   <Form.Group>
//                     <Form.Label>Preferred Start Date</Form.Label>
//                     <Form.Control
//                       name="preferredStartDate"
//                       value={isEditMode ? editedUser.preferredStartDate : selectedUser.preferredStartDate}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col md={12}>
//                   <Form.Group>
//                     <Form.Label>Workout Preferences</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={2}
//                       name="workoutPreferences"
//                       value={isEditMode ? editedUser.workoutPreferences : selectedUser.workoutPreferences}
//                       onChange={handleChange}
//                       readOnly={!isEditMode}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Form>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
//           {isEditMode && <Button variant="primary" className='mx-auto' onClick={handleSave}>Save Changes</Button>}
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default UserDetails;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Modal, Button, Form } from 'react-bootstrap';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import '../sidebarCSS/table.css';
import '../sidebarCSS/post.css';
import { BASE_URL } from '../../BaseURL';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/getalluser`); // adjust URL if different
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleView = (user) => {
    setSelectedUser(user);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser({ ...user });
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setIsEditMode(false);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${editedUser._id}`, editedUser);
      console.log('Updated User:', res.data);

      const updatedList = users.map((u) => (u._id === res.data._id ? res.data : u));
      setUsers(updatedList);
      setSelectedUser(res.data);
      setIsEditMode(false);
      setShowModal(false);
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <Container className="mainTableContainer">
      <Row className="justify-content-between align-items-center pb-3">
        <Col xs="auto">
          <h3 className="mb-0">User Details</h3>
        </Col>
      </Row>

      <Row>
        <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Sr No</th>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Email</th>
              <th style={{ textAlign: 'center' }}>Mobile</th>
              <th style={{ textAlign: 'center' }}>Fitness Level</th>
              <th style={{ textAlign: 'center' }}>Membership Plan</th>
              <th style={{ textAlign: 'center' }}>Preferred Start Date</th>
              <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ textAlign: 'center' }}>{user.fullName}</td>
                <td style={{ textAlign: 'center' }}>{user.email}</td>
                <td style={{ textAlign: 'center' }}>{user.phone}</td>
                <td style={{ textAlign: 'center' }}>{user.fitnessLevel}</td>
                <td style={{ textAlign: 'center' }}>{user.membershipPlan}</td>
                <td style={{ textAlign: 'center' }}>{user.preferredStartDate}</td>
                <td className="text-center">
                  <FaEye size={20} className="downoladIcon" title="View" onClick={() => handleView(user)} />
                  <FaPencilAlt size={20} className="editicon ms-3" title="Edit" onClick={() => handleEdit(user)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

      {/* Modal Code - unchanged except user values come from DB */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? 'Edit User' : 'User Full Information'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="fullName"
                      value={isEditMode ? editedUser.fullName : selectedUser.fullName}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      value={isEditMode ? editedUser.email : selectedUser.email}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      name="phone"
                      value={isEditMode ? editedUser.phone : selectedUser.phone}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      name="gender"
                      value={isEditMode ? editedUser.gender : selectedUser.gender}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      name="dob"
                      value={isEditMode ? editedUser.dob : selectedUser.dob}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      name="age"
                      value={isEditMode ? editedUser.age : selectedUser.age}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Profession</Form.Label>
                    <Form.Control
                      name="profession"
                      value={isEditMode ? editedUser.profession : selectedUser.profession}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Fitness Level</Form.Label>
                    <Form.Control
                      name="fitnessLevel"
                      value={isEditMode ? editedUser.fitnessLevel : selectedUser.fitnessLevel}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Weight (kg)</Form.Label>
                    <Form.Control
                      name="weight"
                      value={isEditMode ? editedUser.weight : selectedUser.weight}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Height (cm)</Form.Label>
                    <Form.Control
                      name="height"
                      value={isEditMode ? editedUser.height : selectedUser.height}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Medical Conditions</Form.Label>
                    <Form.Control
                      name="medicalConditions"
                      value={isEditMode ? editedUser.medicalConditions : selectedUser.medicalConditions}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Emergency Contact Name</Form.Label>
                    <Form.Control
                      name="emergencyContactName"
                      value={isEditMode ? editedUser.emergencyContactName : selectedUser.emergencyContactName}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Emergency Contact Number</Form.Label>
                    <Form.Control
                      name="emergencyContactNumber"
                      value={isEditMode ? editedUser.emergencyContactNumber : selectedUser.emergencyContactNumber}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Membership Plan</Form.Label>
                    <Form.Control
                      name="membershipPlan"
                      value={isEditMode ? editedUser.membershipPlan : selectedUser.membershipPlan}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Preferred Start Date</Form.Label>
                    <Form.Control
                      name="preferredStartDate"
                      value={isEditMode ? editedUser.preferredStartDate : selectedUser.preferredStartDate}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">             
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Workout Preference</Form.Label>
                    <Form.Control
                      name="workoutPreference"
                      value={isEditMode ? editedUser.workoutPreference : selectedUser.workoutPreference}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Health Goals</Form.Label>
                    <Form.Control
                      name="healthGoals"
                      value={isEditMode ? editedUser.healthGoals : selectedUser.healthGoals}
                      onChange={handleChange}
                      readOnly={!isEditMode}
                    />
                  </Form.Group>
                </Col>
              </Row>

            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {isEditMode && (
            <Button variant="primary" className="mx-auto post-btn" onClick={handleSave}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserDetails;
