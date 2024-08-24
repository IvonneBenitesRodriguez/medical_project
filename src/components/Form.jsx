import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function FormRegistry() {
  return (
    <Container>
      <Form className="pt-4 d-flex justify-content-center flex-column">
        {/* Name Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="ms-3 w-50"
            />
          </Col>
        </Row>

        {/* Profession Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Profession</Form.Label>
            <Form.Select
              aria-label="Select your profession"
              className="ms-3 w-50"
            >
              <option>Select</option>
              <option value="1">Medical Student</option>
              <option value="2">Doctor</option>
              <option value="3">Institution</option>
              <option value="4">Other</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Speciality Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Speciality</Form.Label>
            <Form.Select
              aria-label="Select your speciality"
              className="ms-3 w-50"
            >
              <option>Select</option>
              <option value="1">Cardiology</option>
              <option value="2">Internal Medicine</option>
              <option value="3">Surgery</option>
              <option value="4">Gynecology</option>
              <option value="5">Neurology</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Email Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="ms-3 w-50"
            />
          </Col>
        </Row>

        {/* City Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              className="ms-3 w-50"
            />
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
