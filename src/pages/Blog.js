import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <Container className="blog-page">
      <div className="blog-hero" role="banner">
        <h1>Blog</h1>
        <p>Home &gt; Blog</p>
      </div>
      <div className="latest-blogs" role="main">
        <h2>Latest Blog & Articles</h2>
        <p>Explore our insightful articles and blog posts to enhance your language learning experience. Stay updated with the latest tips, strategies, and stories from language experts and learners.</p>
        <Row>
          <Col md={4}>
            <Card className="blog-card" role="article" aria-labelledby="blog1-title" aria-describedby="blog1-description">
              <Card.Img variant="top" src="/blog1.png" alt="Graphic depicting language learning resources" />
              <Card.Body>
                <Card.Title id="blog1-title">100 Best Language Learning Blogs and Websites in 2024</Card.Title>
                <Card.Text id="blog1-description">
                  <p>July 12, 2024</p>
                  <p>Top language learning blogs offering diverse resources, tips, and strategies to enhance your learning journey.</p>
                </Card.Text>
                <Button variant="link" className="read-more" href="https://education.feedspot.com/language_learning_blogs/" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="blog-card" role="article" aria-labelledby="blog2-title" aria-describedby="blog2-description">
              <Card.Img variant="top" src="/blog2.png" alt="Silhouettes of people communicating" />
              <Card.Body>
                <Card.Title id="blog2-title">How to learn a new language with smart and useful goals</Card.Title>
                <Card.Text id="blog2-description">
                  <p>June 6, 2024</p>
                  <p>This blog emphasizes setting vision and path goals to achieve language learning success. It highlights strategies for creating effective and practical goals.</p>
                </Card.Text>
                <Button variant="link" className="read-more" href="https://www.fluentlanguage.co.uk/blog" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="blog-card" role="article" aria-labelledby="blog3-title" aria-describedby="blog3-description">
              <Card.Img variant="top" src="/blog3.png" alt="Hello in multiple languages" />
              <Card.Body>
                <Card.Title id="blog3-title">Fluent Forever- The Science of Language Learning</Card.Title>
                <Card.Text id="blog3-description">
                  <p>December 10, 2022</p>
                  <p>Insights on effective methods and practical tips for language learners, emphasizing pronunciation, vocabulary, and grammar.</p>
                </Card.Text>
                <Button variant="link" className="read-more" href="https://blog.fluent-forever.com" target="_blank">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Blog;
