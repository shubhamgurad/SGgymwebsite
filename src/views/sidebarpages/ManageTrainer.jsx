// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
// import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
// import '../sidebarCSS/post.css';
// import '../sidebarCSS/table.css';

// const ManageTrainer = () => {
//   const [trainers, setTrainers] = useState([
//     {
//       trainerName: 'Manoj Pawar',
//       trainerContact: '9876543210',
//       trainerSpecialty: 'Yoga',
//     },
//     {
//       trainerName: 'Manushi Donde',
//       trainerContact: '1234567890',
//       trainerSpecialty: 'Cardio',
//     },
//     {
//       trainerName: 'Vidya Shinde',
//       trainerContact: '5551234567',
//       trainerSpecialty: 'Zumba(Dance)',
//     },
//     {
//       trainerName: 'Sanket Godavi',
//       trainerContact: '7890123456',
//       trainerSpecialty: 'Strength',
//     },
//     {
//       trainerName: 'Shubham Pawar',
//       trainerContact: '8977654789',
//       trainerSpecialty: 'Strength',
//     },
//     {
//       trainerName: 'Sagar Pachorkar',
//       trainerContact: '8745347890',
//       trainerSpecialty: 'Cardio',
//     },
//     {
//       trainerName: 'Vishal Jadhav',
//       trainerContact: '9087654567',
//       trainerSpecialty: 'Zumba',
//     },
//     {
//       trainerName: 'Yogita Pawar',
//       trainerContact: '7678908765',
//       trainerSpecialty: 'Yoga',
//     },
//   ]);
  
//   const [formData, setFormData] = useState({
//     trainerName: '',
//     trainerContact: '',
//     trainerSpecialty: '',
//   });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddOrUpdateTrainer = (e) => {
//     e.preventDefault();

//     if (!formData.trainerName || !formData.trainerContact || !formData.trainerSpecialty) {
//       alert('Please fill in all fields');
//       return;
//     }

//     if (editingIndex !== null) {
//       const updatedTrainers = [...trainers];
//       updatedTrainers[editingIndex] = formData;
//       setTrainers(updatedTrainers);
//       setEditingIndex(null);
//     } else {
//       setTrainers([...trainers, formData]);
//     }

//     setFormData({
//       trainerName: '',
//       trainerContact: '',
//       trainerSpecialty: '',
//     });
//   };

//   const handleEdit = (index) => {
//     setFormData(trainers[index]);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     if (window.confirm('Are you sure you want to delete this trainer?')) {
//       const updatedTrainers = [...trainers];
//       updatedTrainers.splice(index, 1);
//       setTrainers(updatedTrainers);
//     }
//   };

//   return (
//     <>
//     <Container className="post-container">
//       <h3 className="mb-4 text-center">Manage Trainer</h3>

//       {/* Add/Edit Trainer Form */}
//       <Form onSubmit={handleAddOrUpdateTrainer} className="mb-4 post-form">
//         <Row>
//           <Col md={4} className="mb-3">
//             <Form.Group>
//               <Form.Label>Trainer Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="trainerName"
//                 value={formData.trainerName}
//                 onChange={handleChange}
//                 placeholder="Enter trainer name"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4} className="mb-3">
//             <Form.Group>
//               <Form.Label>Trainer Contact</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="trainerContact"
//                 value={formData.trainerContact}
//                 onChange={handleChange}
//                 placeholder="Enter contact number"
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4} className="mb-3">
//             <Form.Group>
//               <Form.Label>Specialty</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="trainerSpecialty"
//                 value={formData.trainerSpecialty}
//                 onChange={handleChange}
//                 placeholder="e.g., Yoga, Strength, Cardio"
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//             <Col className="d-flex flex-column justify-content-end align-items-end">
//                 <Button type="submit" variant="primary" className="post-btn">
//                 {editingIndex !== null ? 'Update' : 'Add'}
//                 </Button>
//             </Col>
//         </Row>    
//       </Form>
//     </Container>

//     <Container className="post-container">
//          {/* Trainer Table */}
//       <Row className="justify-content-between align-items-center pb-3">
//                 <Col className="flex align-items-center">
//                     <h4 className="mb-0 text-center">All Trainers</h4>
//                 </Col>
//             </Row>
//       {/* <h5 className="mt-5">All Trainers</h5> */}
//       <Row>
//       <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
//         <thead>
//           <tr>
//             <th>Sr No</th>
//             <th>Trainer Name</th>
//             <th>Contact</th>
//             <th>Specialty</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trainers.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="text-center">
//                 No trainers added yet.
//               </td>
//             </tr>
//           ) : (
//             trainers.map((trainer, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{trainer.trainerName}</td>
//                 <td>{trainer.trainerContact}</td>
//                 <td>{trainer.trainerSpecialty}</td>
//                 <td className="text-center">
//                   <FaPencilAlt
//                     size={20}
//                     // style={{ cursor: 'pointer', marginRight: '10px', color: '#007bff' }}
//                     className='editicon'
//                     onClick={() => handleEdit(index)}
//                   />
//                   <FaTrashAlt
//                     size={20}
//                     // style={{ cursor: 'pointer', color: '#dc3545' }}
//                     className='deleteicon'
//                     onClick={() => handleDelete(index)}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//       </Row>
//     </Container>    
//     </>
//   );
// };

// export default ManageTrainer;





import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import '../sidebarCSS/post.css';
import '../sidebarCSS/table.css';
import { BASE_URL } from '../../BaseURL';

const ManageTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [formData, setFormData] = useState({
    trainerName: '',
    trainerContact: '',
    trainerSpecialty: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTrainerId, setEditingTrainerId] = useState(null);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/trainers/getAllTrainer`);
      setTrainers(res.data);
    } catch (err) {
      console.error('Error fetching trainers', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateTrainer = async (e) => {
    e.preventDefault();

    if (!formData.trainerName || !formData.trainerContact || !formData.trainerSpecialty) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (editingTrainerId) {
        // Update existing trainer
        await axios.put(`${BASE_URL}/trainers/updateTrainer/${editingTrainerId}`, formData);
      } else {
        // Add new trainer
        await axios.post(`${BASE_URL}/trainers/createTrainer`, formData);
      }
      fetchTrainers();
      setFormData({ trainerName: '', trainerContact: '', trainerSpecialty: '' });
      setEditingIndex(null);
      setEditingTrainerId(null);
    } catch (err) {
      console.error('Error saving trainer', err);
    }
  };

  const handleEdit = (index) => {
    const trainer = trainers[index];
    setFormData({
      trainerName: trainer.trainerName,
      trainerContact: trainer.trainerContact,
      trainerSpecialty: trainer.trainerSpecialty,
    });
    setEditingIndex(index);
    setEditingTrainerId(trainer.trainerId);
  };

  const handleDelete = async (index) => {
    const trainer = trainers[index];
    if (window.confirm('Are you sure you want to delete this trainer?')) {
      try {
        await axios.delete(`${BASE_URL}/trainers/delTrainer/${trainer.trainerId}`);
        fetchTrainers();
      } catch (err) {
        console.error('Error deleting trainer', err);
      }
    }
  };

  return (
    <>
      <Container className="post-container">
        <h3 className="mb-4 text-center">Manage Trainer</h3>

        <Form onSubmit={handleAddOrUpdateTrainer} className="mb-4 post-form">
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Trainer Name</Form.Label>
                <Form.Control
                  type="text"
                  name="trainerName"
                  value={formData.trainerName}
                  onChange={handleChange}
                  placeholder="Enter trainer name"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Trainer Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="trainerContact"
                  value={formData.trainerContact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Specialty</Form.Label>
                <Form.Control
                  type="text"
                  name="trainerSpecialty"
                  value={formData.trainerSpecialty}
                  onChange={handleChange}
                  placeholder="e.g., Yoga, Strength, Cardio"
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
            <h4 className="mb-0 text-center">All Trainers</h4>
          </Col>
        </Row>
        <Row>
          <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Trainer Name</th>
                <th>Contact</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {trainers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">No trainers added yet.</td>
                </tr>
              ) : (
                trainers.map((trainer, index) => (
                  <tr key={trainer.trainerId}>
                    <td>{index + 1}</td>
                    <td>{trainer.trainerName}</td>
                    <td>{trainer.trainerContact}</td>
                    <td>{trainer.trainerSpecialty}</td>
                    <td className="text-center">
                      <FaPencilAlt
                        size={20}
                        className='editicon'
                        onClick={() => handleEdit(index)}
                      />
                      <FaTrashAlt
                        size={20}
                        className='deleteicon'
                        onClick={() => handleDelete(index)}
                      />
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

export default ManageTrainer;
