# Threadhouse — React E-commerce Storefront

A frontend-only React (Vite) storefront for the 20 uploaded products. No backend —
cart and filter state live in React state for the session.

## Run it

```bash
npm install
npm run dev
```

Vercel :  https://e-commerce-assignment-nu.vercel.app

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
public/assets/        ← product images (already included, matching filenames used in code)
src/data/products.js  ← all product data: name, price, sizes, category, description
src/components/       ← Header, Hero, Filters, ProductGrid, ProductCard, ProductModal, CartDrawer
src/App.jsx           ← app state: search, filters, sort, cart
src/index.css         ← all styling (design tokens at the top)
```

## Features included

- Sticky header with live search + category quick-filter chips
- Sidebar filters: category checkboxes, price range slider, size chips
- Sort: featured / price asc / price desc / name A–Z
- Quick-view modal per product with size selection, quantity stepper, and validation
  (won't add to cart until a size is picked)
- Slide-out cart drawer: quantity edit, remove item, live subtotal/total
- Toast confirmation on add-to-cart
- Fully responsive (mobile, tablet, desktop)
- Empty states for no search/filter results and empty cart

## Swapping in your own images

Images already sit in `public/assets/` under their original filenames
(e.g. `p1.jpg`, `P9.jpg`, `P17.jpg` — case matches exactly). To replace any image,
just drop a new file into `public/assets/` with the same name, or update the
`image` field in `src/data/products.js`.
