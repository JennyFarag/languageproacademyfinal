import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import '../styles/CourseDetails.css'; 

const CourseDetails = () => {
  return (
    <Container className="course-details-page">
      <Row>
        <Col md={8} className="about-section">
          <h2 className="purple-title section-title">About this course</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <Card className="video-card small-card">
            <div className="video-wrapper">
              <Card.Img variant="top" src="path_to_image.jpg" />
              <div className="play-button">
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </div>
            </div>
            <Card.Body>
              <Button variant="primary" className="join-course-button">Join Course</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2 className="purple-title section-title">What You’ll Learn</h2>
          <Row>
            <Col md={6}>
              <ul>
                <li>Basic communication in English in everyday situations.</li>
                <li>Develop excellent understanding and listening skills for this level.</li>
                <li>Will learn more than 1000 common words and phrases.</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>You will develop excellent understanding and listening skills for this level.</li>
                <li>Basic communication in English in everyday situations.</li>
                <li>You will learn more than 1000 common words and phrases.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <h2 className="purple-title section-title">Curriculum</h2>
          <p className="text-right">10 Lessons/Lifetime</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Introduction</Accordion.Header>
              <Accordion.Body>
                <p>Lesson details...</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Beginner English</Accordion.Header>
              <Accordion.Body>
                <p>Lesson details...</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Vocabulary</Accordion.Header>
              <Accordion.Body>
                <p>Lesson details...</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Practice Exercises</Accordion.Header>
              <Accordion.Body>
                <p>Lesson details...</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={4}>
          <Card className="support-line-card">
            <Card.Body>
              <h5>Support Line</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <p>613-876-6642</p>
              <p>languageproAcademy@gmail.com</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <h2 className="purple-title section-title">Additional Information</h2>
          <p>
            This is an additional section to add more content and make the page longer. You can add as many
            sections as you need to provide detailed information about the course.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
