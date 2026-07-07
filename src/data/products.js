// Product catalogue — image filenames match the ones you'll drop into /public/assets
// exactly as provided (case-sensitive), so no renaming is needed.

const clothingSizes = ["S", "M", "L", "XL", "XXL"];
const shoeSizes = ["39", "40", "41", "42", "43", "44", "45"];
const oneSize = ["One Size"];

const products = [
  {
    id: 1,
    image: "p1.jpg",
    name: "Abstract Floral Print Resort Shirt",
    category: "Shirts",
    price: 39.99,
    sizes: clothingSizes,
    colors: ["Multicolor"],
    description:
      "A short-sleeve shirt with a bold hand-drawn floral and abstract print in mustard, teal, and red. Notch collar, button-through front, and a relaxed drape make it an easy statement piece for warm-weather days.",
    tags: ["new", "summer"],
  },
  {
    id: 2,
    image: "p2.jpg",
    name: "Cotton Twill Trucker Jacket",
    category: "Jackets",
    price: 59.9,
    sizes: clothingSizes,
    colors: ["Beige"],
    description:
      "A boxy trucker jacket cut from sturdy cotton twill in a soft beige tone. Point collar, snap-button placket, and dual chest-level welt pockets give it a timeless workwear silhouette.",
    tags: ["bestseller"],
  },
  {
    id: 3,
    image: "p3.jpg",
    name: "Embroidered Varsity Bomber Jacket",
    category: "Jackets",
    price: 79.9,
    sizes: clothingSizes,
    colors: ["Dark Green"],
    description:
      "A faux-suede varsity jacket in deep forest green with contrast cream ribbed cuffs and hem. Finished with chest embroidery and a printed script graphic for a collegiate-inspired look.",
    tags: ["new"],
  },
  {
    id: 4,
    image: "p4.jpg",
    name: "Ringer Crewneck T-Shirt",
    category: "T-Shirts",
    price: 19.9,
    sizes: clothingSizes,
    colors: ["Grey Melange"],
    description:
      "A heavyweight piqué cotton t-shirt in heathered grey, finished with a contrast navy ribbed crew neckline and cuffs for a clean retro ringer look. An easy everyday layering piece.",
    tags: ["essential"],
  },
  {
    id: 5,
    image: "p5.jpg",
    name: "Pleated Chino Trousers",
    category: "Trousers",
    price: 49.9,
    sizes: clothingSizes,
    colors: ["Olive"],
    description:
      "Tapered chinos in an olive cotton blend with a double front pleat for room to move and a tailored finish through the leg. Belt-loop waistband with a button and hook closure.",
    tags: ["essential"],
  },
  {
    id: 6,
    image: "p6.jpg",
    name: "Washed Straight Leg Jeans — Light Blue",
    category: "Jeans",
    price: 49.9,
    sizes: clothingSizes,
    colors: ["Light Blue"],
    description:
      "Straight-leg jeans in a light, sun-washed indigo denim with soft whiskering at the thigh. Classic five-pocket construction with a mid-rise, relaxed-through-the-leg fit.",
    tags: ["bestseller"],
  },
  {
    id: 7,
    image: "p7.jpg",
    name: "Raw Denim Straight Jeans — Black",
    category: "Jeans",
    price: 49.9,
    sizes: clothingSizes,
    colors: ["Black"],
    description:
      "Unwashed raw black denim jeans with a clean, dry finish that will mold to you over time. Straight leg, five-pocket styling, and durable silver-tone hardware.",
    tags: ["new"],
  },
  {
    id: 8,
    image: "p8.jpg",
    name: "Bleached Straight Leg Jeans",
    category: "Jeans",
    price: 49.9,
    sizes: clothingSizes,
    colors: ["Light Wash"],
    description:
      "A heavily bleached, sun-faded wash gives these straight-leg jeans a lived-in character. Five-pocket styling with a relaxed fit through the hip and leg.",
    tags: [],
  },
  {
    id: 9,
    image: "P9.jpg",
    name: "Linen Blend Button-Down Shirt — Blue",
    category: "Shirts",
    price: 45.9,
    sizes: clothingSizes,
    colors: ["Blue"],
    description:
      "A breathable linen-cotton blend shirt in a rich cobalt blue. Button-down collar, patch chest pocket, and a relaxed fit make it equally suited to the office or a warm evening out.",
    tags: ["summer"],
  },
  {
    id: 10,
    image: "P10.jpg",
    name: "Linen Shirt — Coral Pink",
    category: "Shirts",
    price: 45.9,
    sizes: clothingSizes,
    colors: ["Coral Pink"],
    description:
      "Garment-washed pure linen shirt in a soft coral pink with natural slubs and texture. Classic point collar, chest pocket, and a breathable, relaxed fit for hot days.",
    tags: ["summer"],
  },
  {
    id: 11,
    image: "p11.jpg",
    name: "Denim Shirt with Chest Pocket",
    category: "Shirts",
    price: 39.9,
    sizes: clothingSizes,
    colors: ["Mid Blue"],
    description:
      "A lightweight denim shirt in a classic mid-wash blue, styled with a single chest pocket and pearl-effect snap buttons. Layers easily over a tee or wears solo.",
    tags: [],
  },
  {
    id: 12,
    image: "p12.jpg",
    name: "Pleated Bermuda Shorts",
    category: "Shorts",
    price: 35.9,
    sizes: clothingSizes,
    colors: ["Ivory"],
    description:
      "Tailored bermuda-length shorts in an ivory cotton twill with front double pleats for a roomy, relaxed drape. Belt-loop waist with button and zip fly.",
    tags: ["summer"],
  },
  {
    id: 13,
    image: "p13.jpg",
    name: "Cotton Baseball Cap",
    category: "Accessories",
    price: 17.9,
    sizes: oneSize,
    colors: ["Green"],
    description:
      "A classic six-panel baseball cap in washed cotton twill, finished in a deep forest green. Curved brim and an adjustable strap back for a comfortable, broken-in fit.",
    tags: ["essential"],
  },
  {
    id: 14,
    image: "p14.jpg",
    name: "Striped Hooded Overshirt",
    category: "Shirts",
    price: 49.9,
    sizes: clothingSizes,
    colors: ["Blue/White Stripe"],
    description:
      "A lightweight cotton overshirt in a fine blue-and-white stripe, cut with a drawstring hood and two large patch pockets. Works as a light layer over a tee on cooler evenings.",
    tags: ["new"],
  },
  {
    id: 15,
    image: "p15.jpg",
    name: "Chunky Retro Running Sneakers",
    category: "Footwear",
    price: 69.9,
    sizes: shoeSizes,
    colors: ["Grey/White"],
    description:
      "Retro-inspired running sneakers with a chunky layered sole, mesh-and-suede upper, and contrast grey panelling. Padded collar and a thick midsole for all-day comfort.",
    tags: ["bestseller"],
  },
  {
    id: 16,
    image: "p16.jpg",
    name: "Suede Slip-On Loafers",
    category: "Footwear",
    price: 59.9,
    sizes: shoeSizes,
    colors: ["Olive"],
    description:
      "Moc-toe slip-on loafers in soft olive suede with a contrast rubber sole. Elasticated side gussets for an easy on-off fit and a versatile, smart-casual finish.",
    tags: ["essential"],
  },
  {
    id: 17,
    image: "P17.jpg",
    name: "Striped Short Sleeve Resort Shirt",
    category: "Shirts",
    price: 39.9,
    sizes: clothingSizes,
    colors: ["Teal Stripe"],
    description:
      "A camp-collar resort shirt in a crisp teal-and-white stripe. Short sleeves, a single chest pocket, and a relaxed boxy fit make it a warm-weather staple.",
    tags: ["summer"],
  },
  {
    id: 18,
    image: "P18.jpg",
    name: "Striped Long Sleeve Cotton Shirt",
    category: "Shirts",
    price: 42.9,
    sizes: clothingSizes,
    colors: ["Blue Stripe"],
    description:
      "A long-sleeve cotton shirt in a classic blue-and-white stripe. Point collar, full button placket, and a clean, relaxed cut for everyday wear.",
    tags: [],
  },
  {
    id: 19,
    image: "P19.jpg",
    name: "Draped Wrap Front Top",
    category: "Women's Tops",
    price: 35.9,
    sizes: clothingSizes,
    colors: ["Light Blue"],
    description:
      "A fitted long-sleeve top in soft light blue jersey with a draped, crossover wrap neckline that falls elegantly off the shoulder. Fitted through the body for a flattering silhouette.",
    tags: ["new"],
  },
  {
    id: 20,
    image: "P20.jpg",
    name: "Crochet Lace Blouse",
    category: "Women's Tops",
    price: 45.9,
    sizes: clothingSizes,
    colors: ["Brown"],
    description:
      "An open-work crochet lace blouse in rich chocolate brown, with a scalloped hem and cuffs. Button-back fastening and a relaxed, semi-sheer fit for a bohemian finish.",
    tags: [],
  },
];

export default products;
