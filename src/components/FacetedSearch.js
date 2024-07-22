import React, { useState } from 'react';
import { Form, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import '../styles/FacetedSearch.css';

const FacetedSearch = ({ onSearch }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleCheckboxChange = (setState, value) => {
    setState(prevValue => (prevValue === value ? '' : value));
  };

  const handleSearch = () => {
    onSearch({ language: selectedLanguage, level: selectedLevel });
  };

  const languageBanners = {
    english: 'English',
    french: 'French',
    spanish: 'Spanish',
    italian: 'Italian',
  };

  return (
    <div>
      <div className="faceted-search-container">
        <Row className="faceted-search-row align-items-center">
          <Col className="faceted-search-col d-flex align-items-center">
            <Form.Label className="faceted-search-label">Language</Form.Label>
            <DropdownButton title={selectedLanguage || 'Select a language'} variant="outline-secondary" className="faceted-search-dropdown">
              {Object.keys(languageBanners).map(language => (
                <Dropdown.Item
                  as="button"
                  key={language}
                  onClick={() => handleCheckboxChange(setSelectedLanguage, language)}
                  className="dropdown-item-checkbox"
                >
                  <Form.Check
                    type="checkbox"
                    label={languageBanners[language]}
                    checked={selectedLanguage === language}
                    onChange={() => handleCheckboxChange(setSelectedLanguage, language)}
                  />
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col className="faceted-search-col d-flex align-items-center">
            <Form.Label className="faceted-search-label">Levels</Form.Label>
            <DropdownButton title={selectedLevel || 'Select a level'} variant="outline-secondary" className="faceted-search-dropdown">
              {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                <Dropdown.Item
                  as="button"
                  key={level}
                  onClick={() => handleCheckboxChange(setSelectedLevel, level.toLowerCase())}
                  className="dropdown-item-checkbox"
                >
                  <Form.Check
                    type="checkbox"
                    label={level}
                    checked={selectedLevel === level.toLowerCase()}
                    onChange={() => handleCheckboxChange(setSelectedLevel, level.toLowerCase())}
                  />
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col className="d-flex align-items-center">
            <Button variant="primary" onClick={handleSearch} className="faceted-search-button">Search</Button>
          </Col>
        </Row>
      </div>
      {selectedLanguage && (
        <div className="language-banner-container">
          <Row className="language-banner-row">
            <Col className="language-banner">
              <h2>{languageBanners[selectedLanguage]}</h2>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default FacetedSearch;
