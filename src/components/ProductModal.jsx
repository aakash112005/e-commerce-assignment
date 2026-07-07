import React, { useState } from 'react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [warning, setWarning] = useState('');

  if (!product) return null;

  const handleAdd = () => {
    if (!size) {
      setWarning('Please select a size before adding to cart.');
      return;
    }
    onAddToCart(product, size, qty);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media">
          <img src={`/assets/${product.image}`} alt={product.name} />
        </div>
        <div className="modal-body">
          <span className="product-category">{product.category}</span>
          <h2>{product.name}</h2>
          <div className="modal-price">${product.price.toFixed(2)}</div>
          <p className="modal-desc">{product.description}</p>

          <span className="select-label">Select size</span>
          <div className="modal-sizes">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`size-chip ${size === s ? 'active' : ''}`}
                onClick={() => { setSize(s); setWarning(''); }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="size-warning">{warning}</div>

          <span className="select-label">Quantity</span>
          <div className="qty-row">
            <div className="qty-control">
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <button className="btn-primary" onClick={handleAdd}>Add to cart — ${(product.price * qty).toFixed(2)}</button>
        </div>
      </div>
    </div>
  );
}
