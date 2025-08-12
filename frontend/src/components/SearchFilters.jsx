import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SearchFilters
 * Search and filter UI for the catalog page.
 */
export default function SearchFilters({
  values,
  categories,
  onChange,
  onReset
}) {
  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()} aria-label="Search and filters">
      <input
        className="input"
        type="search"
        placeholder="Search products..."
        value={values.query}
        onChange={(e) => onChange({ query: e.target.value })}
        aria-label="Search products"
      />
      <select
        className="select"
        value={values.category}
        onChange={(e) => onChange({ category: e.target.value })}
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <input
        className="input"
        type="number"
        min="0"
        placeholder="Min price"
        value={values.priceMin ?? ''}
        onChange={(e) => onChange({ priceMin: e.target.value ? Number(e.target.value) : undefined })}
        aria-label="Minimum price"
      />
      <input
        className="input"
        type="number"
        min="0"
        placeholder="Max price"
        value={values.priceMax ?? ''}
        onChange={(e) => onChange({ priceMax: e.target.value ? Number(e.target.value) : undefined })}
        aria-label="Maximum price"
      />
      <div className="flex">
        <select
          className="select"
          value={values.sort}
          onChange={(e) => onChange({ sort: e.target.value })}
          aria-label="Sort"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating</option>
        </select>
        <button className="btn btn-ghost" type="button" onClick={onReset}>Reset</button>
      </div>
    </form>
  );
}
