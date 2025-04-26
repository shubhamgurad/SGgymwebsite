import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../frontPagesCSS/blogpage.css';
import { BASE_URL } from '../../BaseURL';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Header from "../frontPages/header.jsx";
import Footer from "../frontPages/footer.jsx";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const navigate = useNavigate();

  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, ''); // This removes all HTML tags
  };

  const limitWords = (text, wordCount) => {
    const plainText = stripHtmlTags(text); // Strip HTML tags
    const words = plainText.split(' ');
    return words.slice(0, wordCount).join(' ') + (words.length > wordCount ? '...' : '');
  };


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/getblog`);
        const activePosts = response.data.filter(post => post.status === 'active');
        setBlogData(activePosts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage * postsPerPage < blogData.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <Header/>
    <Container fluid style={{background:'white', paddingBottom:'20px'}}>
      {/* <Row>
        <h4 className="text-center m-0 mt-0 mb-3 p-0 blog-heading1">Blogs</h4>
      </Row> */}
      <Row xs={1} sm={2} md={4} className="blog-container">
        {currentPosts.map((blog) => (
          <Col key={blog.blogId} className="mb-4 blog-card1">
            <Card className="blog-card h-100">
              <Card.Img variant="top" src={blog.image ? `${BASE_URL}/uploads/${blog.image}` : ''} alt={blog.title} />
              <Card.Body>
                <Card.Title className="text-start">{blog.title}</Card.Title>
                <Card.Text className="text-start blog-description">{limitWords(blog.description, 15)}</Card.Text>
                <Button className="blog-btn" onClick={() => navigate(`/blog/${blog.title.toLowerCase().split(' ').join('-')}`, { state: { blogId: blog.blogId } })}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Buttons */}
      <Row className="justify-content-center mt-2 mb-4">
        <Col xs="auto">
          <Button onClick={prevPage} disabled={currentPage === 1} className='actbtn'>
            <MdKeyboardDoubleArrowLeft style={{ marginRight: '3px', fontSize: '19px' }} />Back
          </Button>
        </Col>
        <Col xs="auto" className="d-flex align-items-center justify-content-center">
          <span>Page {currentPage} of {Math.ceil(blogData.length / postsPerPage)}</span>
        </Col>
        <Col xs="auto">
          <Button onClick={nextPage} disabled={currentPage * postsPerPage >= blogData.length} className='actbtn'>
            Next<MdKeyboardDoubleArrowRight style={{ marginLeft: '3px', fontSize: '19px' }} />
          </Button>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Blog;
