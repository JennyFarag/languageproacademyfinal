import React, { useState } from 'react';
import '../styles/PracticeTests.css';
import Levels from '../components/Levels';
import Quiz from '../components/Quiz';
import { Modal, Button } from 'react-bootstrap';

const PracticeTests = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setSelectedLevel(null); 
  };

  const handleStartClick = () => {
    if (!selectedLanguage) {
      setShowModal(true);
    } else {
      setSelectedLevel(null);
    }
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="practice-tests">
      <div className="practice-tests-content">
        <h1>Practice Tests</h1>
        <p>
          Enhance your language skills by taking our practice tests, designed for all proficiency levels. 
          Start with Level 1 and 2 to solidify your grammar foundation, progress to Level 3 for vocabulary building, 
          and reach Level 4 to master reading comprehension. Each level is tailored to help you improve and succeed.
        </p>
        <div className="practice-tests-selection">
          <label>
            Select a language:
            <select className="custom-select" value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Italian">Italian</option>
            </select>
          </label>
          <button className="start-button" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
        {selectedLanguage && !selectedLevel && (
          <div className="levels-container">
            <Levels language={selectedLanguage} onLevelSelect={handleLevelSelect} />
          </div>
        )}
        {selectedLevel && (
          <div className="quiz-container">
            <Quiz language={selectedLanguage} level={selectedLevel} />
          </div>
        )}
      </div>
      <img src={`${process.env.PUBLIC_URL}/practicetest.png`} alt="Practice Test" className="practice-tests-image" />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Language Not Selected</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select a language before starting the practice test.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PracticeTests;
