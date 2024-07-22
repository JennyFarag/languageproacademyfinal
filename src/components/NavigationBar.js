import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar style={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: 'none' }} expand="lg" className="navbar-custom">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo">
            <img src="/navlogo.png" alt="LanguagePro Academy" className="d-inline-block align-top" style={{ height: '60px' }} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link>{t('navigation.home')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{t('navigation.about')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
              <Nav.Link>{t('navigation.courses')}</Nav.Link>
            </LinkContainer>
            <NavDropdown title={t('navigation.learningResources')} id="learning-resources-dropdown">
              <LinkContainer to="/resources/articles">
                <NavDropdown.Item>{t('navigation.articles')}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/resources/practice-tests">
                <NavDropdown.Item>{t('navigation.practiceTests')}</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title={t('navigation.pages')} id="pages-dropdown">
              <LinkContainer to="/faq">
                <NavDropdown.Item>{t('navigation.faq')}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/forums">
                <NavDropdown.Item>{t('navigation.forums')}</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavDropdown.Item>{t('navigation.blog')}</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/contact">
              <Nav.Link className="d-flex align-items-center">
                {t('navigation.contact')} <span role="img" aria-label="envelope" style={{ color: 'black', marginLeft: '4px' }}>✉️</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <div className="d-flex align-items-center ms-auto">
            <span className="phone-number d-flex align-items-center me-3">
              613-989-0007
              <i className="fas fa-phone-alt phone-icon"></i>
            </span>
            <LinkContainer to="/register">
              <Button variant="primary" className="register-button"><strong>{t('navigation.registerNow')}</strong></Button>
            </LinkContainer>
            <NavDropdown title={<><i className="fas fa-globe"></i></>} id="language-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('fr')}>French</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('es')}>Spanish</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
