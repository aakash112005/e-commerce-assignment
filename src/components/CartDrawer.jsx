import React from 'react';

export default function CartDrawer({ isOpen, onClose, items, updateQty, removeItem, subtotal }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3>Your cart ({items.length})</h3>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">Your cart is empty. Go find something good.</div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <img src={`/assets/${item.image}`} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-meta">Size {item.size} · ${item.price.toFixed(2)}</div>
                  <div className="cart-item-row">
                    <div className="qty-control">
                      <button onClick={() => updateQty(item.id, item.size, Math.max(1, item.qty - 1))}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(item.id, item.size)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-subtotal-row total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-note">Shipping and taxes calculated at checkout.</div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => alert('This is a frontend demo — checkout is not connected to a payment backend.')}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
