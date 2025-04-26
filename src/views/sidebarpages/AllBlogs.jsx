import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Form, Col, Pagination, Image, Modal } from 'react-bootstrap';
import { FaToggleOn, FaToggleOff, FaEye, FaTrash, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleDown, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../sidebarCSS/table.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BASE_URL } from '../../BaseURL';
import moment from 'moment';

export default function AllPosts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [editedPost, setEditedPost] = useState({
        title: '',
        description: '',
        image: null,
        imagePreview: '',
    });
    const [showImageModal, setShowImageModal] = useState(false);
    const [imagePreview, setImagePreview] = useState('');

    // Fetch posts from the backend
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/blogs/getblog`);

            if (Array.isArray(response.data)) {
                // Ensure that image URLs are properly appended if necessary
                const postsWithImages = response.data.map(post => ({
                    ...post,
                    imageUrl: `${BASE_URL}/uploads/${post.image}` // Assuming image field is stored in 'post.image'
                }));

                setPosts(postsWithImages); // Update state with posts including full image URLs
            } else {
                console.error('Fetched blogs are not an array:', response.data);
                toast.error('Failed to fetch blogs. Invalid data structure.');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            toast.error('Error fetching blogs.');
        }
    };

    // Filter posts based on title, date range, and status
    const filteredPosts = posts.filter(post => {
        const matchesTitle = post.title.toLowerCase().includes(searchName.toLowerCase());
        const matchesStatus = statusFilter === 'all' || post.status === statusFilter;

        // Date filtering logic
        const postDate = new Date(post.createdAt); // Assuming posts have a createdAt field
        const matchesDate =
            (!dateFrom || postDate >= new Date(dateFrom)) && (!dateTo || postDate <= new Date(dateTo));

        return matchesTitle && matchesStatus && matchesDate;
    });

    // Paginate posts
    const itemsPerPage = 10;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedPosts = filteredPosts.slice(startIdx, startIdx + itemsPerPage);

    // Handle status toggle
    const handleStatusChange = async (blogId, status) => {
        const newStatus = status === 'active' ? 'inactive' : 'active';

        try {
            // Make the API request to update the post status
            const response = await fetch(`${BASE_URL}/blogs/update-status/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }), // Ensure the correct key here
            });

            if (response.ok) {
                // If the status update is successful, update the state locally
                setPosts(prevPosts =>
                    prevPosts.map(post =>
                        post._id === blogId  // Ensure you're comparing post._id, not blogId
                            ? { ...post, status: newStatus }
                            : post
                    )
                );
                toast.success("Blog status updated successfully.");
            } else {
                const data = await response.json();
                toast.error(data.message || 'Failed to update blog status.');
            }
        } catch (error) {
            console.error("Error updating blog status:", error);
            toast.error('An error occurred while updating the blog status.');
        }
    };

    // Delete a post
    const handleDeletePost = (blogId) => {
        // Full URL with localhost if backend is on a different port
        const url = `${BASE_URL}/blogs/delblog/${blogId}`;
        console.log('Deleting blog with URL:', url); // Log the URL
        if (window.confirm("Are you sure you want to delete this offer?")) {
        axios.delete(url)
            .then(response => {
                console.log('Blog deleted', response);
                setPosts(posts.filter(post => post._id !== blogId)); // Update local state after deletion
                toast.success("Blog deleted successfully.");
            })
            .catch(error => {
                console.error('Error deleting blog:', error.response ? error.response.data : error.message);
                toast.error("Error deleting blog.");
            });
        }
    };

    // Open edit modal
    const handleEditPost = (blogId) => {
        const postToEdit = posts.find(post => post._id === blogId);
        if (postToEdit) {
            setCurrentPost(postToEdit);
            setEditedPost({ ...postToEdit });
            setShowEditModal(true);
        }
    };

    const handleSaveChanges = async () => {
        const formData = new FormData();
        formData.append('title', editedPost.title);
        formData.append('description', editedPost.description);
        if (editedPost.image) {
            formData.append('image', editedPost.image);
        }

        console.log("FormData to send:");
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        try {
            const response = await axios.put(
                `${BASE_URL}/blogs/editblog/${editedPost._id}`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );
            console.log('Blog updated successfully', response.data);
            fetchPosts(); // Refresh posts list
            setShowEditModal(false);
            toast.success("Blog updated successfully.");
        } catch (error) {
            console.error('Error updating blog:', error.response ? error.response.data : error.message);
            toast.error("Error updating blog.");
        }
    };

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

    // Pagination logic
    useEffect(() => {
        setTotalPages(Math.ceil(filteredPosts.length / itemsPerPage));
    }, [filteredPosts]);

    const handlePreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    const handleLastPage = () => setCurrentPage(totalPages);

    // Show image in a modal
    const handleImageClick = (image) => {
        setImagePreview(image);
        setShowImageModal(true);
    };

    return (
        <Container className="mainTableContainer">
            <Row className="justify-content-between align-items-center pb-3">
                <Col xs="auto" className="flex align-items-center">
                    <h3 className="mb-0">All Blogs</h3>
                </Col>
            </Row>
            <Row className="mb-2 d-flex align-items-center">
                <Col md={3}>
                    <Form.Group controlId="searchName">
                        <Form.Label className="searchbar">Search by Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search by title"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className='searchbox'
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="dateFrom">
                        <Form.Label className="searchbar">From Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            className='searchbox'
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="dateTo">
                        <Form.Label className="searchbar">To Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            className='searchbox'
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="statusFilter">
                        <Form.Label className="searchbar">Filter by Status</Form.Label>
                        <Form.Control
                            as="select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className='searchbox'
                        >
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '5%' }}>Sr No</th>
                            <th style={{ width: '8%' }}>Image</th>
                            <th style={{ width: '47%' }}>Title</th>
                            <th style={{ width: '20%' }}>Date</th>
                            {/* <th style={{ width: '41%' }}>Description</th> */}
                            <th style={{ width: '10%', textAlign: 'center' }}>Status</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedPosts.map((post, index) => (
                            <tr key={post._id}>
                                <td style={{ textAlign: 'center' }}>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                <td>
                                    <Image
                                        src={`${BASE_URL}/uploads/${post.image}`}
                                        className="common-image"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleImageClick(post.image)} // Click to show image modal
                                    />
                                </td>
                                <td>{post.title}</td>
                                <td>{moment(post.createdAt).format('YYYY-MM-DD')}</td>
                                {/* <td>{post.description}</td> */}
                                {/* <td>{truncateDescription(post.description, 15)}</td> */}
                                <td style={{ textAlign: 'center' }}>
                                    <Button
                                        variant="link"
                                        className="p-0"
                                        onClick={() => handleStatusChange(post._id, post.status)}  // Use post._id here
                                    >
                                        {post.status === "inactive" ? (
                                            <FaToggleOff size={20} color="gray" />
                                        ) : (
                                            <FaToggleOn size={20} color="green" />
                                        )}
                                    </Button>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button variant="link" className="p-0" onClick={() => handleEditPost(post._id)}>
                                        <FaPencilAlt size={20} title="View" className="editicon" />
                                    </Button>
                                    <Button variant="link" className="p-0" onClick={() => handleDeletePost(post._id)}>
                                        <FaTrash size={20} title="Delete" style={{ marginLeft: "3px" }} className='deleteicon' />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            <Row className="justify-content-between mb-3">
                <Col className="text-center">
                    <Button
                        className="ms-2 pagedown pagination-button"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <FaAngleDoubleLeft /> Previous
                    </Button>
                    <span className="px-2" style={{ fontSize: '13px' }}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        className="ms-2 pagedown pagination-button"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next <FaAngleDoubleRight />
                    </Button>
                    <Button
                        className="ms-2 pagedown pagination-button"
                        onClick={handleLastPage}
                        disabled={currentPage === totalPages}
                    >
                        Last <FaAngleDoubleDown />
                    </Button>
                </Col>
            </Row>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
                <Modal.Header className="p-2 px-3" closeButton>
                    <Modal.Title style={{ fontSize: '20px', fontWeight: '600' }}>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="image" className="mt-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) =>
                                    setEditedPost((prev) => ({
                                        ...prev,
                                        image: e.target.files[0],
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="title" className="mt-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPost.title || ''}
                                onChange={(e) =>
                                    setEditedPost((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="description" className="mt-3">
                            <Form.Label>Blog Description</Form.Label>
                            <ReactQuill
                                value={editedPost.description || ''}
                                onChange={(value) =>
                                    setEditedPost((prev) => ({
                                        ...prev,
                                        description: value,
                                    }))
                                }
                                placeholder="Write your blog content here..."
                            />
                        </Form.Group>
                    </Form>
                    <Row className="d-flex justify-content-center mt-3 text-center">
                        <Col>
                            <Button
                                size="sm"
                                style={{
                                    background: 'var(--primary-color)',
                                    border: 'none',
                                    padding: '3px 10px',
                                }}
                                onClick={handleSaveChanges}
                            >
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            {/* Image Modal */}
            <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
                <Modal.Body>
                    <Image src={`${BASE_URL}/uploads/${imagePreview}`} height={280} />
                </Modal.Body>
            </Modal>

            <ToastContainer />
        </Container>
    );
}
