import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import '../frontPagesCSS/blogpage.css';
import { BASE_URL } from '../../BaseURL';
import Header from "../frontPages/header.jsx";
import Footer from "../frontPages/footer.jsx";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogTitle } = useParams(); // Access dynamic blogTitle from the route
  const location = useLocation();
  const { blogId } = location.state || {}; // Access postId passed via state
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/getblog/${blogId}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog details:', error.message);
      }
    };
    if (blogId) fetchBlog();
  }, [blogId]);

  if (!blogId) {
    return <p className="text-center">No blog details available.</p>;
  }

  if (!blog) {
    return <p className="text-center">Loading blog details...</p>;
  }

  return (
    <>
    <Header/>
    <Container fluid style={{background:'white', paddingBottom:'20px'}} className='dtl-blog-container'>
      <Row
        className="dtl-blog-heading"
        style={{
          backgroundImage: blog.image ? `url(${BASE_URL}/uploads/${blog.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: 'white',
        }}
      >
        <div className="black-overlay"></div>
        <Col md={6} className="dtl-heading-content">
          <h2 className="text-center blog-head">{blog.title}</h2>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="dtl-blog">
          <div
            className="dtl-blog-description px-3 text-justify"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
          <div className="text-center">
            <Button onClick={() => navigate('/blogs')} className="actbtn">
              Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default BlogDetails;