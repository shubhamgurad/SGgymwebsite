import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Button, Form, Col, Pagination, Image } from 'react-bootstrap';
import { FaToggleOn, FaToggleOff, FaEye, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleDown, FaPlus } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FiDownload } from 'react-icons/fi'; // Assuming this icon is used
import '../sidebarCSS/table.css';

export default function CommunityUserTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [users, setUsers] = useState([
        {
            _id: 1,
            userName: "John Doe",
            mobileNo: "9876543210",
            date: "2023-12-01",
            userType: "Owner",
            profileImage: "https://via.placeholder.com/100",
            aadharImage: "https://via.placeholder.com/100",
            accStatus: "active",
            userUuid: "user-1"
        },
        {
            _id: 2,
            userName: "Jane Smith",
            mobileNo: "9123456789",
            date: "2023-11-21",
            userType: "Tenant",
            profileImage: "https://via.placeholder.com/100",
            aadharImage: "https://via.placeholder.com/100",
            accStatus: "inactive",
            userUuid: "user-2"
        }
    ]);
    const [searchName, setSearchName] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    // Filter users based on search criteria
    const filteredUsers = users.filter((user) => {
        const nameMatch = user.userName.toLowerCase().includes(searchName.toLowerCase());
        const statusMatch = statusFilter === 'all' || user.accStatus === statusFilter;
        const dateMatch =
            (!dateFrom || new Date(user.date) >= new Date(dateFrom)) &&
            (!dateTo || new Date(user.date) <= new Date(dateTo));

        return nameMatch && statusMatch && dateMatch;
    });

    // Paginate users
    const itemsPerPage = 10;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(startIdx, startIdx + itemsPerPage);

    // Change page function
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return "-----";
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Handle status toggle
    const handleStatusChange = (userUuid, status) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.userUuid === userUuid
                    ? { ...user, accStatus: status === 'active' ? 'inactive' : 'active' }
                    : user
            )
        );
    };

    useEffect(() => {
        setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
    }, [filteredUsers, itemsPerPage]);

    const handlePreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    const handleNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    const handleLastPage = () => setCurrentPage(totalPages);

    return (
        <Container className='mainTableContainer'>
            <Row className="justify-content-between align-items-center pb-3">
                <Col xs="auto" className="flex align-items-center">
                    <h3 className="mb-0">Table</h3>
                </Col>
            </Row>
            <Row className="mb-2 d-flex align-items-center">
                <Col md={3}>
                    <Form.Group controlId="searchName">
                        <Form.Label className='searchbar'>Search by Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            style={{ fontSize: '14px', padding: '3px' }}
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="dateFrom">
                        <Form.Label className='searchbar'>From Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            style={{ fontSize: '14px', padding: '3px' }}
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="dateTo">
                        <Form.Label className='searchbar'>To Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            style={{ fontSize: '14px', padding: '3px' }}
                        />
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group controlId="statusFilter">
                        <Form.Label className='searchbar'>Status</Form.Label>
                        <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ fontSize: '14px', padding: '3px' }}>
                            <option value="all">All Statuses</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Table hover striped responsive className="user-table" style={{ border: '1px solid #DBDFE6' }}>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Document</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((user, index) => (
                            <tr key={user._id}>
                                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                <td>
                                    <Image
                                        src={user.profileImage}
                                        className="common-image"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td>{user.userName}</td>
                                <td>{user.mobileNo}</td>
                                <td>{formatDate(user.date)}</td>
                                <td>{user.userType}</td>
                                <td>
                                    <Button size="sm" variant="link">
                                        <AiOutlineEye size={20} />
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant="link"
                                        className="p-0"
                                        onClick={() => handleStatusChange(user.userUuid, user.accStatus)}
                                    >
                                        {user.accStatus === "inactive" ? (
                                            <FaToggleOff size={20} color="red" />
                                        ) : (
                                            <FaToggleOn size={20} color="green" />
                                        )}
                                    </Button>
                                </td>
                                <td >
                                    <Button variant="link" className="p-0">
                                        <FaEye size={20} title="View" className="editicon" />
                                    </Button>
                                    <Button variant="link" className="p-0">
                                        <AiOutlineCloudDownload size={20} title="Download" style={{ marginLeft: "3px" }} className="downoladIcon" />
                                    </Button>
                                    <Button variant="link" className="p-0">
                                        <FiDownload size={20} title="Download" style={{ marginLeft: "3px" }} className='deleteicon' />
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
                    <span className="px-2" style={{ fontSize: '15px' }}>
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

        </Container>
    );
}
