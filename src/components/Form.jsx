import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function FormRegistry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [professionId, setProfessionId] = useState('');
  const [specialtyId, setSpecialtyId] = useState('');

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleProfessionChange = (e) => setProfessionId(e.target.value);
  const handleSpecialtyChange = (e) => setSpecialtyId(e.target.value);

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!city) newErrors.city = 'City is required.';
    if (!professionId) newErrors.profession = 'Please select a profession.';
    if (!specialtyId) newErrors.specialty = 'Please select a specialty.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              name,
              email,
              city,
              profession_ids: [professionId],
              specialty_ids: [specialtyId],
            },
          }),
        });

        await response.json();

        if (response.ok) {
          alert('Registration successful!');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server Error!');
      }
    }
  };

  return (
    <Container>
      <Form
        className="pt-4 d-flex justify-content-center flex-column"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Name</Form.Label>
            <Col className="ms-3 w-50">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="ms-3 w-50"
                value={name}
                onChange={handleNameChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Col>
          </Col>
        </Row>

        {/* Profession Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Profession</Form.Label>
            <Col className="ms-3 w-50">
              <Form.Select
                aria-label="Select your profession"
                className="ms-3 w-50"
                value={professionId}
                onChange={handleProfessionChange}
                isInvalid={!!errors.profession}
              >
                <option>Select</option>
                <option value="1">Medical Student</option>
                <option value="2">Doctor</option>
                <option value="3">Institution</option>
                <option value="4">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.profession}
              </Form.Control.Feedback>
            </Col>
          </Col>
        </Row>

        {/* Speciality Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Speciality</Form.Label>
            <Col className="ms-3 w-50">
              <Form.Select
                aria-label="Select your speciality"
                className="ms-3 w-50"
                value={specialtyId}
                onChange={handleSpecialtyChange}
                isInvalid={!!errors.specialty}
              >
                <option>Select</option>
                <option value="1">Cardiology</option>
                <option value="2">Internal Medicine</option>
                <option value="3">Surgery</option>
                <option value="4">Gynecology</option>
                <option value="5">Neurology</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.specialty}
              </Form.Control.Feedback>
            </Col>
          </Col>
        </Row>

        {/* Email Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Email</Form.Label>
            <Col className="ms-3 w-50">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="ms-3 w-50"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Col>
        </Row>

        {/* City Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">City</Form.Label>
            <Col className="ms-3 w-50">
              <Form.Control
                type="text"
                placeholder="Enter your city"
                className="ms-3 w-50"
                value={city}
                onChange={handleCityChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Col>
          </Col>
        </Row>

        {/* Submit Button */}
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Submit"
              className="bg-primary"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default FormRegistry;
