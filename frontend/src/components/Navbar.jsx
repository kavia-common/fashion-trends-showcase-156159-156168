import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Navbar
 * Top navigation bar with brand, primary links, and quick actions.
 */
export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="StyleSphere - Home">
          <span className="brand-title">StyleSphere</span>
          <span className="brand-pill">FASHION</span>
        </Link>

        <div className="nav-links" role="menubar">
          <NavLink to="/" className="nav-link" role="menuitem" aria-current={pathname === '/' ? 'page' : undefined}>Home</NavLink>
          <NavLink to="/catalog" className="nav-link" role="menuitem" aria-current={pathname.startsWith('/catalog') ? 'page' : undefined}>Catalog</NavLink>
          <NavLink to="/contact" className="nav-link" role="menuitem" aria-current={pathname.startsWith('/contact') ? 'page' : undefined}>Contact</NavLink>
          <a className="btn btn-ghost" href="#newsletter">Newsletter</a>
        </div>
      </div>
    </nav>
  );
}
