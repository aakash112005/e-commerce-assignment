import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Filters from './components/Filters.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import ProductModal from './components/ProductModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import products from './data/products.js';

const MAX_PRICE = Math.ceil(Math.max(...products.map((p) => p.price)) / 10) * 10;

export default function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceLimit, setPriceLimit] = useState(MAX_PRICE);
  const [sortBy, setSortBy] = useState('featured');

  const [activeProduct, setActiveProduct] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceLimit(MAX_PRICE);
    setActiveCategory('All');
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesTopCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSidebarCategory =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchesSize =
        selectedSizes.length === 0 || p.sizes.some((s) => selectedSizes.includes(s));
      const matchesPrice = p.price <= priceLimit;

      return matchesSearch && matchesTopCategory && matchesSidebarCategory && matchesSize && matchesPrice;
    });

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [search, activeCategory, selectedCategories, selectedSizes, priceLimit, sortBy]);

  const addToCart = (product, size, qty) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === size ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, size, qty }];
    });
    setToast(`Added "${product.name}" (${size}) to cart`);
    setCartOpen(true);
  };

  const updateQty = (id, size, qty) => {
    setCart((prev) => prev.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i)));
  };

  const removeItem = (id, size) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="app-shell">
      <Header
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <Hero />

      <main className="container">
        <div className="shop-layout">
          <Filters
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            maxPrice={MAX_PRICE}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            selectedSizes={selectedSizes}
            toggleSize={toggleSize}
            clearAll={clearAll}
          />

          <ProductGrid
            products={filteredProducts}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onOpen={setActiveProduct}
          />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>© 2026 Threadhouse. Frontend demo store.</span>
          <span>Built with React · No backend attached</span>
        </div>
      </footer>

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        subtotal={subtotal}
      />

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
