import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <Container className="faq-page">
      <div className="faq-hero">
        <h1>FAQ</h1>
        <p>Home &gt; FAQ</p>
      </div>
      <div className="faq-content">
        <Row>
          <Col md={6}>
            <img src={`${process.env.PUBLIC_URL}/faq1.png`} alt="Support" className="img-fluid faq-image" />
          </Col>
          <Col md={6}>
            <h2 className="faq-heading">General Questions</h2>
            <p className="faq-description">
              Find answers to common questions about our courses and services. If you need further assistance, feel free to reach out to us.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Do the courses include study materials?</Accordion.Header>
                <Accordion.Body>
                  Yes, all courses come with study materials tailored to each proficiency level.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Are There Any Prerequisites?</Accordion.Header>
                <Accordion.Body>
                  No, our courses are designed for all levels, from beginners to advanced learners.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I switch between courses?</Accordion.Header>
                <Accordion.Body>
                  Yes, you can switch between courses as needed to match your learning progress.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="section">
          <Col md={6}>
            <h2 className="section-heading">Payment Questions</h2>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What Payment Methods Are Accepted?</Accordion.Header>
                <Accordion.Body>
                  We accept credit cards and PayPal.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can I Get a Refund?</Accordion.Header>
                <Accordion.Body>
                  No, refunds are not available.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Do you offer discounts for bulk purchases?</Accordion.Header>
                <Accordion.Body>
                  Yes, we offer different packages depending on the level you are looking for: Beginner, Intermediate, and Advanced.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <h2 className="section-heading">Technical Requirements</h2>
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>What Are the System Requirements?</Accordion.Header>
                <Accordion.Body>
                  You will need a stable internet connection and a device with a web browser.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Can I Access the Courses on Mobile?</Accordion.Header>
                <Accordion.Body>
                  Yes, our courses are accessible on mobile devices.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Do I need any special software to access the courses?</Accordion.Header>
                <Accordion.Body>
                  No special software is required. A modern web browser is sufficient.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <hr />
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-envelope contact-icon"></i>
            <div>
              <p className="contact-title">Email Address:</p>
              <p className="contact-details">languageproAcademy@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone contact-icon"></i>
            <div>
              <p className="contact-title">Phone Number:</p>
              <p className="contact-details">613-989-0007</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
