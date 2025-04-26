import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../frontPagesCSS/blogpage.css'; // Import the CSS file
import { BASE_URL } from '../../BaseURL';
import { useNavigate } from "react-router-dom";
import Header from "../frontPages/header.jsx";
import Footer from "../frontPages/footer.jsx";

const BlogPage = () => {
    const [blogData, setBlogData] = useState([]);
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
                setBlogData(activePosts.slice(-4)); // Get last 4 active posts
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <Header />
            <Container fluid className="blog-container mt-2">
                <Row>
                    <Col className="mb-2">
                        <h1 className="text-center mt-3 mb-2 blog-heading text-black">Explore Experts Posts & Articles</h1>
                        <p className="blog-description">Stay updated with tips, tutorials, and solutions to enhance your web hosting and WordPress experience.</p>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={4}>
                    {blogData.map((blog, index) => (
                        <Col key={index} className="mb-4 blog-card1">
                            <Card className="blog-card h-100">
                                <Card.Img variant="top" src={blog.image ? `${BASE_URL}/uploads/${blog.image}` : ''} alt={blog.title} />
                                <Card.Body>
                                    <Card.Title className="text-start">{blog.title}</Card.Title>
                                    <Card.Text className="text-start blog-description">{limitWords(blog.description, 15)}</Card.Text>
                                    <Button
                                        className="blog-btn"
                                        onClick={() => navigate(`/blog/${blog.title.toLowerCase().split(' ').join('-')}`, {
                                            state: { blogId: blog.blogId }
                                        })}
                                    >
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default BlogPage;