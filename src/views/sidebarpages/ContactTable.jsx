import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import { BASE_URL } from '../../BaseURL';
import { FaEye } from 'react-icons/fa';
import '../sidebarCSS/table.css';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/contact/getcontacts`);
      const data = res.data?.data || [];
      setContacts(data);
    } catch (err) {
      console.error('Failed to fetch contact data.', err);
      setContacts([]);
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedMessage('');
    setShowModal(false);
  };

  return (
    <Container className="mainTableContainer">
      <Row className="justify-content-between align-items-center pb-3">
        <Col xs="auto" className="flex align-items-center">
          <h3 className="mb-0">All Contacts</h3>
        </Col>
      </Row>

      <Row>
        <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              {/* <th>Message</th> */}
              <th>Submitted At</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobile}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  <td>
                    <FaEye size={20}
                        className="downoladIcon"
                        onClick={() => handleViewMessage(contact.message)}
                        title="View Message"
                    />
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No contact data available.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>

      {/* Modal to show message */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedMessage}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ContactTable;
