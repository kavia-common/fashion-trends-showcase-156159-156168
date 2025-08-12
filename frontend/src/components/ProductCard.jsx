import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

/**
 * PUBLIC_INTERFACE
 * ProductCard
 * Minimal product card with media, title, price and rating.
 */
export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="card-media">
          {product.featured && <span className="card-badge">Featured</span>}
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-meta">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="rating">★ {product.rating}</span>
        </div>
      </div>
    </article>
  );
}
