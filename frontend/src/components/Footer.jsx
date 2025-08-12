import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Footer
 * Footer with brief contact info and navigation shortcuts.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="flex">
          <strong>StyleSphere</strong>
          <span className="pill">Minimal • Modern • Chic</span>
        </div>
        <small>© {year} StyleSphere. All rights reserved.</small>
        <div className="flex">
          <Link className="nav-link" to="/contact">Contact</Link>
          <a className="nav-link" href="mailto:hello@stylesphere.example">hello@stylesphere.example</a>
        </div>
      </div>
    </footer>
  );
}
