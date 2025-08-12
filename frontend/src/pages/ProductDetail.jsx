import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';

/**
 * PUBLIC_INTERFACE
 * ProductDetail
 * Displays a single product with detailed information.
 */
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <section className="section">
        <div className="container stack">
          <h1 className="section-title">Product not found</h1>
          <p className="section-sub">The product you are looking for does not exist.</p>
          <Link to="/catalog" className="btn">Back to catalog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container detail">
        <div className="detail-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-body">
          <span className="kicker">{product.category}</span>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-price">{formatPrice(product.price)}</div>
          <p>{product.description}</p>

          <div className="pills" aria-label="Available colors">
            {product.colors.map((c) => <span key={c} className="pill">{c}</span>)}
          </div>
          <div className="pills" aria-label="Available sizes">
            {product.sizes.map((s) => <span key={s} className="pill">{s}</span>)}
          </div>
          <div className="pills" aria-label="Tags">
            {product.tags.map((t) => <span key={t} className="pill">#{t}</span>)}
          </div>

          <div className="spacer" />
          <div className="detail-actions">
            <button className="btn">Add to bag</button>
            <Link className="btn btn-ghost" to="/catalog">Continue shopping</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
