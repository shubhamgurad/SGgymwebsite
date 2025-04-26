// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
// import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
// import '../sidebarCSS/post.css';
// import '../sidebarCSS/table.css';

// const ManageMembershipPlan = () => {
//   const [plans, setPlans] = useState([
//     {
//       planName: 'Basic',
//       price: '1400',
//       duration: '12',
//       personalTrainer: '0',
//       peopleCount: '1',
//       visits: 'Unlimited',
//     },
//     {
//       planName: 'Standard',
//       price: '4800',
//       duration: '12',
//       personalTrainer: '1',
//       peopleCount: '1',
//       visits: 'Unlimited',
//     },
//     {
//       planName: 'Premium',
//       price: '8300',
//       duration: '12',
//       personalTrainer: '1',
//       peopleCount: '1',
//       visits: 'Unlimited',
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     planName: '',
//     price: '',
//     duration: '',
//     personalTrainer: '',
//     peopleCount: '',
//     visits: '',
//   });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddOrUpdate = (e) => {
//     e.preventDefault();

//     const { planName, price, duration, personalTrainer, peopleCount, visits } = formData;

//     if (!planName || !price || !duration || !personalTrainer || !peopleCount || !visits) {
//       alert('Please fill in all fields');
//       return;
//     }

//     if (editingIndex !== null) {
//       const updated = [...plans];
//       updated[editingIndex] = formData;
//       setPlans(updated);
//       setEditingIndex(null);
//     } else {
//       setPlans([...plans, formData]);
//     }

//     setFormData({
//       planName: '',
//       price: '',
//       duration: '',
//       personalTrainer: '',
//       peopleCount: '',
//       visits: '',
//     });
//   };

//   const handleEdit = (index) => {
//     setFormData(plans[index]);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     if (window.confirm('Are you sure you want to delete this plan?')) {
//       const updated = [...plans];
//       updated.splice(index, 1);
//       setPlans(updated);
//       setEditingIndex(null);
//     }
//   };

//   return (
//     <>
//       <Container className="post-container">
//         <h3 className="mb-4 text-center">Manage Membership Plans</h3>

//         {/* Form */}
//         <Form onSubmit={handleAddOrUpdate} className="mb-4 post-form">
//           <Row>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Plan Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="planName"
//                   value={formData.planName}
//                   onChange={handleChange}
//                   placeholder="e.g. Basic"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Price (Monthly ₹)</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   placeholder="e.g. 1400"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Duration (Months)</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="duration"
//                   value={formData.duration}
//                   onChange={handleChange}
//                   placeholder="e.g. 12"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Personal Trainer</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="personalTrainer"
//                   value={formData.personalTrainer}
//                   onChange={handleChange}
//                   placeholder="e.g. 1"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Amount of People</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="peopleCount"
//                   value={formData.peopleCount}
//                   onChange={handleChange}
//                   placeholder="e.g. 2"
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={4} className="mb-3">
//               <Form.Group>
//                 <Form.Label>Number of Visits</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="visits"
//                   value={formData.visits}
//                   onChange={handleChange}
//                   placeholder="e.g. Unlimited"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col className="d-flex flex-column justify-content-end align-items-end">
//               <Button type="submit" variant="primary" className="post-btn">
//                 {editingIndex !== null ? 'Update' : 'Add'}
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container>

//       {/* Table */}
//       <Container className="post-container">
//         <Row className="justify-content-between align-items-center pb-3">
//           <Col className="flex align-items-center">
//             <h4 className="mb-0 text-center">All Membership Plans</h4>
//           </Col>
//         </Row>

//         <Row>
//           <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
//             <thead>
//               <tr>
//                 <th>Sr No</th>
//                 <th>Plan</th>
//                 <th>Price (₹/mo)</th>
//                 <th>Duration</th>
//                 <th>Trainer</th>
//                 <th>People</th>
//                 <th>Visits</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {plans.length === 0 ? (
//                 <tr>
//                   <td colSpan="8" className="text-center">
//                     No membership plans added yet.
//                   </td>
//                 </tr>
//               ) : (
//                 plans.map((plan, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{plan.planName}</td>
//                     <td>{plan.price}</td>
//                     <td>{plan.duration}</td>
//                     <td>{plan.personalTrainer}</td>
//                     <td>{plan.peopleCount}</td>
//                     <td>{plan.visits}</td>
//                     <td className="text-center">
//                       <FaPencilAlt
//                         size={20}
//                         // style={{ cursor: 'pointer', marginRight: '10px', color: '#007bff' }}
//                         className='editicon'
//                         onClick={() => handleEdit(index)}
//                       />
//                       <FaTrashAlt
//                       size={20}
//                         // style={{ cursor: 'pointer', color: '#dc3545' }}
//                         className='deleteicon'
//                         onClick={() => handleDelete(index)}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </Table>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default ManageMembershipPlan;




import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import '../sidebarCSS/post.css';
import '../sidebarCSS/table.css';
import { BASE_URL } from '../../BaseURL';

const ManageMembershipPlan = () => {
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({
    planName: '',
    price: '',
    duration: '',
    personalTrainer: '',
    peopleCount: '',
    visits: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingPlanId, setEditingPlanId] = useState(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/plans/getAllPlan`);
      setPlans(res.data);
    } catch (err) {
      console.error('Error fetching plans:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    const { planName, price, duration, personalTrainer, peopleCount, visits } = formData;

    if (!planName || !price || !duration || !personalTrainer || !peopleCount || !visits) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (editingIndex !== null) {
        await axios.put(`${BASE_URL}/plans/updatePlan/${editingPlanId}`, formData);
      } else {
        await axios.post(`${BASE_URL}/plans/createPlan`, formData);
      }
      setFormData({
        planName: '',
        price: '',
        duration: '',
        personalTrainer: '',
        peopleCount: '',
        visits: '',
      });
      setEditingIndex(null);
      setEditingPlanId(null);
      fetchPlans();
    } catch (err) {
      console.error('Error adding/updating plan:', err);
    }
  };

  const handleEdit = (index) => {
    const selectedPlan = plans[index];
    setFormData(selectedPlan);
    setEditingIndex(index);
    setEditingPlanId(selectedPlan.planId);
  };

  const handleDelete = async (index) => {
    const planId = plans[index].planId;
    if (window.confirm('Are you sure you want to delete this plan?')) {
      try {
        await axios.delete(`${BASE_URL}/plans/delPlan/${planId}`);
        fetchPlans();
      } catch (err) {
        console.error('Error deleting plan:', err);
      }
    }
  };

  return (
    <>
      <Container className="post-container">
        <h3 className="mb-4 text-center">Manage Membership Plans</h3>
        <Form onSubmit={handleAddOrUpdate} className="mb-4 post-form">
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Plan Name</Form.Label>
                <Form.Control
                  type="text"
                  name="planName"
                  value={formData.planName}
                  onChange={handleChange}
                  placeholder="Enter plan name"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Price (Monthly ₹)</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Duration (Months)</Form.Label>
                <Form.Control
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Enter duration"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Personal Trainer</Form.Label>
                <Form.Control
                  type="text"
                  name="personalTrainer"
                  value={formData.personalTrainer}
                  onChange={handleChange}
                  placeholder="Enter personal trainer"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Amount of People</Form.Label>
                <Form.Control
                  type="text"
                  name="peopleCount"
                  value={formData.peopleCount}
                  onChange={handleChange}
                  placeholder="Enter people count"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Number of Visits</Form.Label>
                <Form.Control
                  type="text"
                  name="visits"
                  value={formData.visits}
                  onChange={handleChange}
                  placeholder="Enter visits"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex flex-column justify-content-end align-items-end">
              <Button type="submit" variant="primary" className="post-btn">
                {editingIndex !== null ? 'Update' : 'Add'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="post-container">
        <Row className="justify-content-between align-items-center pb-3">
          <Col className="flex align-items-center">
            <h4 className="mb-0 text-center">All Membership Plans</h4>
          </Col>
        </Row>

        <Row>
          <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Plan</th>
                <th>Price (₹/mo)</th>
                <th>Duration</th>
                <th>Trainer</th>
                <th>People</th>
                <th>Visits</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">No membership plans added yet.</td>
                </tr>
              ) : (
                plans.map((plan, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{plan.planName}</td>
                    <td>{plan.price}</td>
                    <td>{plan.duration}</td>
                    <td>{plan.personalTrainer}</td>
                    <td>{plan.peopleCount}</td>
                    <td>{plan.visits}</td>
                    <td className="text-center">
                      <FaPencilAlt className="editicon" size={20} onClick={() => handleEdit(index)} />
                      <FaTrashAlt className="deleteicon" size={20} onClick={() => handleDelete(index)} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default ManageMembershipPlan;
