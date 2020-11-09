import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner-container">
      <h2>Footer</h2>
      <div className="footer-links-container">
        <NavLink className="footer-link" activeClassName="footer-link-active" to="/c/terms">
          Terms
        </NavLink>
        <NavLink className="footer-link" activeClassName="footer-link-active" to="/c/privacy-notice">
          Privacy Notice
        </NavLink>
        <NavLink className="footer-link" activeClassName="footer-link-active" to="/c/cookie-terms">
          Cookies
        </NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;
