import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Home &gt; About Us</p>
      </div>

      <Container className="about-page">
        <div className="about-content">
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <h2>About LanguagePro Academy</h2>
              <p>Whether you're looking to enhance your professional skills, prepare for travel, or simply enjoy the benefits of learning a new language, we have something for everyone. Our experienced instructors and supportive community are here to guide you every step of the way.</p>
              <p>Discover the joy of learning languages with LanguagePro Academy and unlock new opportunities in your personal and professional life.</p>
            </Col>
            <Col md={6}>
              <img src={`${process.env.PUBLIC_URL}/team.png`} alt="Team" className="img-fluid rounded about-image" />
            </Col>
          </Row>
        </div>

        <div className="teachers-section">
          <Container>
            <Row className="text-center mb-4">
              <Col>
                <h3 className="teachers-title">Our Teachers</h3>
                <h4>Meet with Expert Teachers</h4>
                <p>Our dedicated and experienced instructors are here to help you achieve your language learning goals. Join our classes and experience the difference.</p>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="mb-4">
                <div className="teacher-card">
                  <div className="teacher-box">
                    <img src={`${process.env.PUBLIC_URL}/english.png`} alt="English Teacher" className="teacher-img" />
                    <h5>English Teacher</h5>
                  </div>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="teacher-card">
                  <div className="teacher-box">
                    <img src={`${process.env.PUBLIC_URL}/french.png`} alt="French Teacher" className="teacher-img" />
                    <h5>French Teacher</h5>
                  </div>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="teacher-card">
                  <div className="teacher-box">
                    <img src={`${process.env.PUBLIC_URL}/spanish.png`} alt="Spanish Teacher" className="teacher-img" />
                    <h5>Spanish Teacher</h5>
                  </div>
                </div>
              </Col>
              <Col md={3} className="mb-4">
                <div className="teacher-card">
                  <div className="teacher-box">
                    <img src={`${process.env.PUBLIC_URL}/italian.png`} alt="Italian Teacher" className="teacher-img" />
                    <h5>Italian Teacher</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default About;
