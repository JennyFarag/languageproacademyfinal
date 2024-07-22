import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/Forums.css';

const Forums = () => {
  const [questions, setQuestions] = useState([
    { id: 1, user: 'Robert', teacher: 'Spanish', question: 'What are the most common irregular verbs in Spanish and how do you conjugate them?', isExample: true },
    { id: 2, user: 'Sophie', teacher: 'French', question: 'What is the difference between "leur" and "leurs"? Can you provide examples?', isExample: true }
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('English');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Name is required';
    } else if (username.trim().split(/\s+/).length < 1) {
      newErrors.username = 'Name must be at least 1 word';
    }
    
    if (!newQuestion.trim()) {
      newErrors.newQuestion = 'Question is required';
    } else if (newQuestion.trim().split(/\s+/).length < 5) {
      newErrors.newQuestion = 'Question must be at least 5 words';
    }
    
    if (!selectedTeacher) newErrors.selectedTeacher = 'Teacher selection is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newQuestionObj = {
        id: questions.length + 1,
        user: username,
        teacher: selectedTeacher,
        question: newQuestion,
        isExample: false
      };
      setQuestions([...questions, newQuestionObj]);
      setNewQuestion('');
      setUsername('');
      setSelectedTeacher('English');
      setErrors({});
    }
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <Container className="forums-page">
      <Row>
        <Col>
          <div className="header">
            <h1 className="section-title">Forums</h1>
          </div>
          <p>Ask questions to our language teachers and get help with your language learning.</p>
          <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group controlId="username">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name"
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="newQuestion">
              <Form.Label>Your Question</Form.Label>
              <Form.Control
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter your question"
                isInvalid={!!errors.newQuestion}
              />
              <Form.Control.Feedback type="invalid">{errors.newQuestion}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="teacherSelect">
              <Form.Label>Select Teacher</Form.Label>
              <Form.Control
                as="select"
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                isInvalid={!!errors.selectedTeacher}
              >
                <option value="">Select</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Italian</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.selectedTeacher}</Form.Control.Feedback>
            </Form.Group>
            <Button className="btn-purple" type="submit">
              Submit Question
            </Button>
          </Form>
          {questions.map((q) => (
            <Card key={q.id} className="mb-3">
              <Card.Body>
                <Card.Title>{q.user} asked the {q.teacher} teacher</Card.Title>
                <Card.Text>{q.question}</Card.Text>
                {!q.isExample && (
                  <Button className="btn-purple" onClick={() => handleDelete(q.id)}>
                    Delete
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Forums;
