import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BASE_URL } from '../../BaseURL'; // Ensure BASE_URL is correctly set
import '../sidebarCSS/post.css';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleDescriptionChange = (value) => setDescription(value);

  const handleAddPost = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      toast.error('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post(`${BASE_URL}/blogs/createblog`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setTitle('');
      setDescription('');
      setImage(null);
      document.getElementById('imageInput').value = '';

      toast.success(response.data.message || 'Blog added successfully!');
    } catch (error) {
      console.error('Error adding post:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Error adding post! Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <Container className="post-container">
        <h2 className="my-4 text-center">Add Blog</h2>

        <Form onSubmit={handleAddPost} className="mb-4 post-form">
          <Form.Group controlId="formImage">
            <Form.Label>Blog Image</Form.Label>
            <Form.Control
              id="imageInput"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </Form.Group>

          <Form.Group controlId="formTitle">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter title"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Blog Description</Form.Label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Write description here..."
            />
          </Form.Group>

          <Row className="justify-content-center mt-3">
            <Col xs="auto">
              <Button type="submit" className="post-btn">
                Add Blog
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Post;
