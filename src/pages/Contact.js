import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  const handleDelete = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setShowModal(false);
  };

  return (
    <Container className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home &gt; Contact Us</p>
      </div>
      <div className="contact-content">
        <Row>
          <Col md={6}>
            <h2>Get In Touch With Us</h2>
            <p>
            Our support team is here to help! Contact us via email at <strong>languageproAcademy@gmail.com</strong> or call us at <strong>613-989-0007</strong>. Whether you have questions, or need assistance, we're just a message or call away. We strive to respond to all inquiries promptly and ensure you have the best experience possible.
            </p>
            <div className="contact-info">
              <div className="contact-item-j">
                <div className="icon-wrapper">
                  <FaPhone className="rotated-phone-icon" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>613-989-0007</p>
                </div>
              </div>
              <div className="contact-item-j">
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>languageproAcademy@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="form-group">
                <Form.Label>Your Name *</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail" className="form-group">
                <Form.Label>Your Email *</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSubject" className="form-group">
                <Form.Label>Your Subject *</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />
                <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage" className="form-group">
                <Form.Label>Your Message *</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your message. We will get back to you at {formData.email} soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Message
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
