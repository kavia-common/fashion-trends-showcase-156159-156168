import React from 'react';
import ProductCard from './ProductCard';

/**
 * PUBLIC_INTERFACE
 * ProductGrid
 * Grid layout for listing products.
 */
export default function ProductGrid({ products }) {
  return (
    <div className="product-grid" role="list">
      {products.map((p) => (
        <div key={p.id} role="listitem">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
