import React from 'react';

const categories = ["All", "Shirts", "Jackets", "T-Shirts", "Trousers", "Jeans", "Shorts", "Footwear", "Accessories", "Women's Tops"];

export default function Header({ search, setSearch, activeCategory, setActiveCategory, cartCount, onOpenCart }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">THREAD<span>HOUSE</span></div>

          <div className="search-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="header-actions">
            <button className="icon-btn" onClick={onOpenCart} aria-label="Open cart">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>

        <div className="category-strip">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
