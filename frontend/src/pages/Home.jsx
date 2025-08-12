import React from 'react';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Home
 * Homepage featuring banner carousel and featured products section.
 */
export default function Home() {
  const featured = products.filter(p => p.featured).slice(0, 8);

  return (
    <div>
      <Banner />
      <section className="section">
        <div className="container section-header">
          <div>
            <h3 className="section-title">Featured Styles</h3>
            <div className="section-sub">Handpicked pieces trending this season.</div>
          </div>
          <Link to="/catalog" className="btn btn-ghost">View all</Link>
        </div>
        <div className="container">
          <ProductGrid products={featured} />
        </div>
      </section>
    </div>
  );
}
