import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/LearningResources.css';
import InteractiveTest from '../components/InteractiveTest';

const LearningResources = () => {
  return (
    <Container className="learning-resources-page">
      <h1>Learning Resources</h1>
      <InteractiveTest />
    </Container>
  );
};

export default LearningResources;
