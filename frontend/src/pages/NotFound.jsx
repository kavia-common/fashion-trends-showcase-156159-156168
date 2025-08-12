import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * NotFound
 * Simple 404 page.
 */
export default function NotFound() {
  return (
    <section className="section">
      <div className="container stack">
        <h1 className="section-title">Page not found</h1>
        <p className="section-sub">The page you are looking for doesn’t exist.</p>
        <Link to="/" className="btn">Go home</Link>
      </div>
    </section>
  );
}
