import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar, Modal } from 'react-bootstrap';
import '../styles/Register.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userLevel: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleNext = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleUndo = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userLevel: '',
    });
    setStep(1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowSuccessModal(true);
      
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (step === 1) {
      if (!formData.name) errors.name = 'Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.userLevel) errors.userLevel = 'User Level is required';
    }
    if (step === 2) {
      if (!formData.password) errors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }
    return errors;
  };

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <Container className="register-page">
      <ProgressBar now={(step / 3) * 100} className="mb-4 purple-progress-bar" />
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="step">
            <h2>Step 1: Basic Information</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formUserLevel">
              <Form.Label>User Level *</Form.Label>
              <Form.Control
                as="select"
                name="userLevel"
                value={formData.userLevel}
                onChange={handleChange}
                isInvalid={!!errors.userLevel}
              >
                <option value="">Select...</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.userLevel}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <h2>Step 2: Set Password</h2>
            <Form.Group controlId="formPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <h2>Step 3: Review and Submit</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>User Level:</strong> {formData.userLevel}</p>
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
            <Button variant="secondary" onClick={handleUndo}>
              Undo
            </Button>
          </div>
        )}
        <div className="step-buttons mt-4">
          {step > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          {step < 3 && (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </Form>

      <Modal show={showSuccessModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are now registered! Thank you for joining us.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;
