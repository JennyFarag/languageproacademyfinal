import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setMessage('You have successfully subscribed!');
      setIsSubscribed(true);
      setShowModal(true);
    } else {
      setMessage('Please enter a valid email address.');
      setShowModal(true);
    }
  };

  const handleUnsubscribe = () => {
    setIsSubscribed(false);
    setEmail('');
    setMessage('You have unsubscribed.');
    setShowModal(true);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-logo">
            <h4 className="footer-title">LanguagePro Academy</h4>
            <p>Join us at LanguagePro Academy and embark on your journey to mastering new languages in an engaging and supportive environment.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-3 footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about#teachers">Teacher</Link></li>
            </ul>
          </div>
          <div className="col-md-3 footer-links">
            <h5>Useful Links</h5>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/register">Register Now</Link></li>
            </ul>
          </div>
          <div className="col-md-3 footer-subscribe">
            <h5>Stay Connected</h5>
            <Form onSubmit={handleSubscribe}>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary mt-2">Send</Button>
            </Form>
            <div className="contact-info mt-3">
              <p><i className="fas fa-map-marker-alt"></i> 175 Albert way Rd K8A 0L4</p>
              <p><i className="fas fa-envelope"></i> languageproAcademy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
          {isSubscribed && (
            <Button variant="danger" onClick={handleUnsubscribe}>
              Unsubscribe
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
