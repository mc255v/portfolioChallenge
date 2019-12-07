import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../sass/pages/Footer.scss';

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <Link to="/" className="footer__title">foriio <span>Portfolio made easy</span></Link>
        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Discover</li>
            <li>Blog</li>
            <li>What's foriio?</li>
          </ul>
        </div>
        <p className="footer__copyright">copyright</p>
      </div>
    </Container>
  );
}

export default Footer;