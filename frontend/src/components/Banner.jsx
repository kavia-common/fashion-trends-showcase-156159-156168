import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

/**
 * PUBLIC_INTERFACE
 * Banner
 * A minimal, auto-rotating carousel that showcases featured items.
 */
export default function Banner() {
  const slides = useMemo(() => products.filter(p => p.featured).slice(0, 5), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="banner">
      <div className="container">
        <div className="banner-card" aria-roledescription="carousel">
          <div
            className="banner-track"
            style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
          >
            {slides.map((s) => (
              <article className="banner-slide" key={s.id} aria-label={s.name}>
                <div className="banner-media" aria-hidden="true">
                  <img src={s.image} alt="" />
                </div>
                <div className="banner-content">
                  <span className="kicker">FEATURED • {s.category}</span>
                  <h2 className="banner-title">{s.name}</h2>
                  <p className="banner-desc">{s.description}</p>
                  <div className="banner-cta">
                    <Link className="btn" to={`/product/${s.id}`}>View Details</Link>
                    <Link className="btn btn-ghost" to="/catalog">Explore Catalog</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="banner-dots" role="tablist" aria-label="Featured items">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                aria-label={`Slide ${i + 1}`}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
