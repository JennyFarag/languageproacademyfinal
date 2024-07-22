import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/homeimage.png`} alt="Hero" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1>{t('home.heroTitle')}</h1>
          <p>{t('home.heroDescription')}</p>
        </div>
      </section>

      <section className="languages-section">
        <Container>
          <Row>
            <Col className="language-box">{t('home.languages.english')}</Col>
            <Col className="language-box">{t('home.languages.french')}</Col>
            <Col className="language-box">{t('home.languages.spanish')}</Col>
            <Col className="language-box">{t('home.languages.italian')}</Col>
          </Row>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <i className="fas fa-chalkboard-teacher"></i>
                <h4>{t('home.features.onlineTutoring')}</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-book"></i>
                <h4>{t('home.features.courses')}</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-unlock-alt"></i>
                <h4>{t('home.features.lifetimeAccess')}</h4>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <i className="fas fa-brain"></i>
                <h4>{t('home.features.activeLearning')}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="about-title">{t('home.about.title')}</h2>
              <h3>{t('home.about.subtitle')}</h3>
              <p>{t('home.about.description1')}</p>
              <p>{t('home.about.description2')}</p>
              <Link to="/about" className="btn btn-outline-dark more-about-button">{t('home.about.moreAboutUs')}</Link>
            </Col>
            <Col md={6}>
              <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="About us" className="about-image" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="goal-section">
        <Container>
          <Row>
            <Col md={3} className="goal-item">
              <h3>{t('home.goals.ourGoal.title')}</h3>
              <p>{t('home.goals.ourGoal.description')}</p>
            </Col>
            <Col md={1} className="chevron">
              <i className="fas fa-chevron-right"></i>
            </Col>
            <Col md={3} className="goal-item">
              <h3>{t('home.goals.ourMission.title')}</h3>
              <p>{t('home.goals.ourMission.description')}</p>
            </Col>
            <Col md={1} className="chevron">
              <i className="fas fa-chevron-right"></i>
            </Col>
            <Col md={3} className="goal-item">
              <h3>{t('home.goals.ourValues.title')}</h3>
              <p>{t('home.goals.ourValues.description')}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
