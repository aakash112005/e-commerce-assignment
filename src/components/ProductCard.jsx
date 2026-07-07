import React from 'react';

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="product-card">
      <div className="product-media">
        {product.tags?.[0] && <span className="product-tag">{product.tags[0]}</span>}
        <img src={`/assets/${product.image}`} alt={product.name} loading="lazy" />
        <button className="quick-add" onClick={() => onOpen(product)}>
          Quick view
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
