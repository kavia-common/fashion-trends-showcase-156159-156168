import React, { useMemo, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import SearchFilters from '../components/SearchFilters';
import { categories as allCategories, products as allProducts } from '../data/products';

/**
 * PUBLIC_INTERFACE
 * Catalog
 * Catalog page with search and filtering options showing products in a grid layout.
 */
export default function Catalog() {
  const [filters, setFilters] = useState({
    query: '',
    category: '',
    priceMin: undefined,
    priceMax: undefined,
    sort: 'featured'
  });

  const onChange = (patch) => setFilters(prev => ({ ...prev, ...patch }));
  const onReset = () => setFilters({ query: '', category: '', priceMin: undefined, priceMax: undefined, sort: 'featured' });

  const { products, count } = useMemo(() => {
    let arr = [...allProducts];

    if (filters.query) {
      const q = filters.query.toLowerCase();
      arr = arr.filter(p => `${p.name} ${p.category} ${p.tags.join(' ')}`.toLowerCase().includes(q));
    }
    if (filters.category) arr = arr.filter(p => p.category === filters.category);
    if (typeof filters.priceMin === 'number') arr = arr.filter(p => p.price >= filters.priceMin);
    if (typeof filters.priceMax === 'number') arr = arr.filter(p => p.price <= filters.priceMax);

    switch (filters.sort) {
      case 'price-asc': arr.sort((a, b) => a.price - b.price); break;
      case 'price-desc': arr.sort((a, b) => b.price - a.price); break;
      case 'rating-desc': arr.sort((a, b) => b.rating - a.rating); break;
      default: arr.sort((a, b) => Number(b.featured) - Number(a.featured)); // featured
    }

    return { products: arr, count: arr.length };
  }, [filters]);

  return (
    <section className="section">
      <div className="container stack">
        <header className="section-header">
          <div>
            <h1 className="section-title">Catalog</h1>
            <div className="section-sub">{count} products</div>
          </div>
        </header>

        <SearchFilters
          values={filters}
          categories={allCategories}
          onChange={onChange}
          onReset={onReset}
        />

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
