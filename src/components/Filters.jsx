import React from 'react';

const ALL_CATEGORIES = ["Shirts", "Jackets", "T-Shirts", "Trousers", "Jeans", "Shorts", "Footwear", "Accessories", "Women's Tops"];
const ALL_SIZES = ["S", "M", "L", "XL", "XXL", "39", "40", "41", "42", "43", "44", "45", "One Size"];

export default function Filters({
  selectedCategories, toggleCategory,
  maxPrice, priceLimit, setPriceLimit,
  selectedSizes, toggleSize,
  clearAll,
}) {
  return (
    <aside className="filters">
      <div className="filter-group">
        <h3>Category</h3>
        {ALL_CATEGORIES.map((cat) => (
          <label className="filter-option" key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h3>Price</h3>
        <div className="price-row">
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
          />
        </div>
        <div className="price-values">
          <span>$0</span>
          <span>Up to ${priceLimit}</span>
        </div>
      </div>

      <div className="filter-group">
        <h3>Size</h3>
        <div className="size-grid">
          {ALL_SIZES.map((size) => (
            <button
              key={size}
              className={`size-chip ${selectedSizes.includes(size) ? 'active' : ''}`}
              onClick={() => toggleSize(size)}
              type="button"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="clear-filters" onClick={clearAll} type="button">
        Clear all filters
      </button>
    </aside>
  );
}
