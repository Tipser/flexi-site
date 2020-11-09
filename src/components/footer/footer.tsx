import * as React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner-container">
      <h2>Footer</h2>
      <div className="footer-links-container">
        <div className="footer-link">
          <a href="/test">Terms</a>
        </div>
        <div className="footer-link">
          <a href="/test">Privacy Notice</a>
        </div>
        <div className="footer-link">
          <a href="/test">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
