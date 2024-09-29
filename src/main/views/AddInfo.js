import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PortFolio = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        age: '',
        address: '',
        primary_education: '',
        institutename1: '',
        secondary_education: '',
        institutename2: '',
        companyName: '',
        currentRole: '',
    });

    const [showCompanyFields, setShowCompanyFields] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSwitchChange = () => {
        setShowCompanyFields(!showCompanyFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save data in localStorage
        localStorage.setItem('user', JSON.stringify(formData));

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            role: '',
            age: '',
            address: '',
            primary_education: '',
            institutename1: '',
            secondary_education: '',
            institutename2: '',
            companyName: '',
            currentRole: '',
        });

        console.log(formData);
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Full Name"
                                name="name"
                                value={formData.name} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Number"
                                name="phone"
                                value={formData.phone} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCurrentRole">
                            <Form.Label>Current Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Current Role"
                                name="role"
                                value={formData.role} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Age"
                                name="age"
                                value={formData.age} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                name="address"
                                value={formData.address} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formprimaryeducation">
                            <Form.Label>Primary Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Primary Education"
                                name="primary_education"
                                value={formData.primary_education} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="forminstitutename1">
                            <Form.Label>Institute Name (Primary Education)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Institution Name"
                                name="institutename1"
                                value={formData.institutename1} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formsecondaryeducation">
                            <Form.Label>Secondary Education</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Secondary Education"
                                name="secondary_education"
                                value={formData.secondary_education} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="forminstitutename2">
                            <Form.Label>Institute Name (Secondary Education)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Institution Name"
                                name="institutename2"
                                value={formData.institutename2} // Binding value to formData
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Currently Employed?"
                            onChange={handleSwitchChange}
                            checked={showCompanyFields}
                        />

                        {showCompanyFields && (
                            <>
                                <Form.Group className="mb-3" controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Company Name"
                                        name="companyName"
                                        value={formData.companyName} // Binding value to formData
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formCurrentRole">
                                    <Form.Label>Current Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Current Role"
                                        name="currentRole"
                                        value={formData.currentRole} // Binding value to formData
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </>
                        )}

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PortFolio;
