import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import FacetedSearch from '../components/FacetedSearch';
import CustomCalendar from '../components/Calendar';
import '../styles/Courses.css';

const resources = [
  // English Courses
  { id: 1, title: 'English For Beginner', level: 'beginner', language: 'english', price: '$120/Lifetime', lessons: 10, description: 'You will learn basic vocabulary, essential verbs, numbers, and simple sentence structures to start conversing in your new language.', image: `${process.env.PUBLIC_URL}/learnenglish.png` },
  { id: 2, title: 'English For Intermediate', level: 'intermediate', language: 'english', price: '$130/Lifetime', lessons: 10, description: 'You will improve your grammar, expand your vocabulary, and practice constructing more complex sentences to enhance your conversational skills.', image: `${process.env.PUBLIC_URL}/learnenglish.png` },
  { id: 3, title: 'Intensive English Course', level: 'advanced', language: 'english', price: '$140/Lifetime', lessons: 10, description: 'You will work on reading comprehension, advanced grammar, and engage in discussions on various topics to achieve fluency.', image: `${process.env.PUBLIC_URL}/learnenglish.png` },
  // French Courses
  { id: 4, title: 'French For Beginner', level: 'beginner', language: 'french', price: '$120/Lifetime', lessons: 10, description: 'You will learn basic vocabulary, essential verbs, numbers, and simple sentence structures to start conversing in your new language.', image: `${process.env.PUBLIC_URL}/learnfrench.png` },
  { id: 5, title: 'French For Intermediate', level: 'intermediate', language: 'french', price: '$130/Lifetime', lessons: 10, description: 'You will improve your grammar, expand your vocabulary, and practice constructing more complex sentences to enhance your conversational skills.', image: `${process.env.PUBLIC_URL}/learnfrench.png` },
  { id: 6, title: 'Intensive French Course', level: 'advanced', language: 'french', price: '$140/Lifetime', lessons: 10, description: 'You will work on reading comprehension, advanced grammar, and engage in discussions on various topics to achieve fluency.', image: `${process.env.PUBLIC_URL}/learnfrench.png` },
  // Spanish Courses
  { id: 7, title: 'Spanish For Beginner', level: 'beginner', language: 'spanish', price: '$120/Lifetime', lessons: 10, description: 'You will learn basic vocabulary, essential verbs, numbers, and simple sentence structures to start conversing in your new language.', image: `${process.env.PUBLIC_URL}/learnspanish.png` },
  { id: 8, title: 'Spanish For Intermediate', level: 'intermediate', language: 'spanish', price: '$130/Lifetime', lessons: 10, description: 'You will improve your grammar, expand your vocabulary, and practice constructing more complex sentences to enhance your conversational skills.', image: `${process.env.PUBLIC_URL}/learnspanish.png` },
  { id: 9, title: 'Intensive Spanish Course', level: 'advanced', language: 'spanish', price: '$140/Lifetime', lessons: 10, description: 'You will work on reading comprehension, advanced grammar, and engage in discussions on various topics to achieve fluency.', image: `${process.env.PUBLIC_URL}/learnspanish.png` },
  // Italian Courses
  { id: 10, title: 'Italian For Beginner', level: 'beginner', language: 'italian', price: '$120/Lifetime', lessons: 10, description: 'You will learn basic vocabulary, essential verbs, numbers, and simple sentence structures to start conversing in your new language.', image: `${process.env.PUBLIC_URL}/learnitalian.png` },
  { id: 11, title: 'Italian For Intermediate', level: 'intermediate', language: 'italian', price: '$130/Lifetime', lessons: 10, description: 'You will improve your grammar, expand your vocabulary, and practice constructing more complex sentences to enhance your conversational skills.', image: `${process.env.PUBLIC_URL}/learnitalian.png` },
  { id: 12, title: 'Intensive Italian Course', level: 'advanced', language: 'italian', price: '$140/Lifetime', lessons: 10, description: 'You will work on reading comprehension, advanced grammar, and engage in discussions on various topics to achieve fluency. ', image: `${process.env.PUBLIC_URL}/learnitalian.png` },
];

const Courses = () => {
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: '',
  });

  const handleSearch = (newFilters) => {
    if (!newFilters.language || !newFilters.level) {
      setShowModal(true);
      return;
    }
    const filteredResults = resources.filter(resource =>
      (!newFilters.language || resource.language === newFilters.language) &&
      (!newFilters.level || resource.level === newFilters.level)
    );
    setResults(filteredResults);
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => !field)) {
      alert('Please fill in all fields.');
      return;
    }
    setShowModal(false);
    setShowConfirmModal(true);
  };

  const handleConfirmClose = () => {
    setShowConfirmModal(false);
    setShowModal(true);
  };
  
  const handleUndo = () => {
    setShowConfirmModal(false);
    
  };

  return (
    <Container className="courses-page">
      <Row>
        <Col md={8}>
          <div className="courses-hero">
            <h1>Our Courses</h1>
            <p>Home &gt; Courses</p>
          </div>
          <FacetedSearch onSearch={handleSearch} />
          <div className="search-results">
            <ul className="result-list">
              {results.map(result => (
                <li key={result.id} className="result-item">
                  <Card className="result-card">
                    <Card.Img variant="top" src={result.image} />
                    <Card.Body>
                      <Card.Title>{result.title}</Card.Title>
                      <Card.Text>
                        {result.price}<br />
                        {result.lessons} Lessons<br />
                        {result.description}
                      </Card.Text>
                      <Button variant="primary" onClick={() => handleEnroll(result)}>Enroll Now</Button>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <CustomCalendar />
        </Col>
      </Row>

      {/* Enrollment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll in {selectedCourse?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Course Price: {selectedCourse?.price}</p>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            </Form.Group>
            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control as="select" name="paymentMethod" value={formData.paymentMethod} onChange={handleFormChange} required>
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={handleConfirmClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your registration for {selectedCourse?.title} has been received. We will contact you shortly for more informaiton.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUndo}>
            Undo Registration
          </Button>
          <Button variant="primary" onClick={handleConfirmClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Courses;
