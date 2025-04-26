import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../sidebarCSS/form.css';

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Form Submitted!\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nUsername: ${formData.username}`
        );
    };

    return (
        <Container className="custom-form-container">
            <div className="custom-form-title-box">
                <h2 className="custom-form-title">User Form</h2>
            </div>

            <Form onSubmit={handleSubmit} className="custom-form-box">
                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="custom-form-input"
                    />
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="custom-form-input"
                    />
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="custom-form-input"
                    />
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="custom-form-input"
                    />
                </Form.Group>

                <Form.Group className="custom-form-group">
                    <Form.Label className="custom-form-label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="custom-form-input"
                    />
                </Form.Group>

                <Row className="justify-content-center mt-3">
                    <Col xs="auto">
                        <Button variant="primary" type="submit" className="custom-submit-button">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SimpleForm;
