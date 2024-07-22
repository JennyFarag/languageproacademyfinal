import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/LanguageSelection.css';

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected language: ${selectedLanguage}`);
    
  };

  return (
    <Container className="language-selection">
      <Row>
        <Col>
          <h1>Trouvez votre ressource idéale.</h1>
          <p>Répondez à quelques questions et nous sélectionnerons des ressources selon vos envies et vos besoins</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="languageSelect">
              <Form.Label>Que voulez-vous apprendre ?</Form.Label>
              <Form.Control as="select" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="">Select a language</option>
                <option value="english">Anglais</option>
                <option value="french">Français</option>
                <option value="spanish">Espagnol</option>
                <option value="italian">Italien</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="start-button">
              Let's Start
            </Button>
          </Form>
          <a href="/choose">Faire mon propre choix parmi les ressources disponibles</a>
        </Col>
      </Row>
    </Container>
  );
};

export default LanguageSelection;
