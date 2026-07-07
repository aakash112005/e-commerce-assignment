import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, sortBy, setSortBy, onOpen }) {
  return (
    <div>
      <div className="toolbar">
        <span className="result-count">{products.length} product{products.length !== 1 ? 's' : ''}</span>
        <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A–Z</option>
        </select>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <p>No products match your filters. Try clearing a few and searching again.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} />
          ))}
        </div>
      )}
    </div>
  );
}
