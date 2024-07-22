import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/InteractiveTest.css'; 

const InteractiveTest = () => {
  const [language, setLanguage] = useState('English');

  return (
    <Container className="interactive-test">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Trouvez votre prof idéal.</h1>
          <p>Répondez à quelques questions et nous sélectionnerons des professeurs selon vos envies et vos besoins.</p>
          <Form.Group controlId="formLanguageSelect" className="mt-4">
            <Form.Label>Que voulez-vous apprendre ?</Form.Label>
            <Form.Control 
              as="select" 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Italian</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" className="mt-4">
            Let's Start
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InteractiveTest;
