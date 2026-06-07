export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAt?: number | null;
  images: string[];
  isNew?: boolean;
  category?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  images: string[];
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Dresses',
    slug: 'dresses',
    images: [
      'https://loremflickr.com/800/1000/dress,fashion',
      'https://loremflickr.com/800/1000/gown,fashion',
      'https://loremflickr.com/800/1000/cocktail-dress,fashion',
    ],
  },
  {
    id: '2',
    name: 'Shoes',
    slug: 'shoes',
    images: [
      'https://loremflickr.com/800/1000/shoes,fashion',
      'https://loremflickr.com/800/1000/heels,fashion',
      'https://loremflickr.com/800/1000/boots,fashion',
    ],
  },
  {
    id: '3',
    name: 'Vintage',
    slug: 'vintage',
    images: [
      'https://loremflickr.com/800/1000/vintage,fashion',
      'https://loremflickr.com/800/1000/retro,fashion',
      'https://loremflickr.com/800/1000/antique,fashion',
    ],
  },
  {
    id: '4',
    name: 'Accessories',
    slug: 'accessories',
    images: [
      'https://loremflickr.com/800/1000/accessories,fashion',
      'https://loremflickr.com/800/1000/jewelry,fashion',
      'https://loremflickr.com/800/1000/handbag,fashion',
    ],
  },
];

export const products: Product[] = [
  { id: '1', name: 'Floral Meadow Dress', slug: 'floral-meadow-dress', price: 189.00, compareAt: 249.00, images: ['https://loremflickr.com/600/800/dress,fashion'], isNew: true, category: 'dresses', description: 'A stunning floral meadow dress crafted from lightweight cotton. Features a flowing silhouette with delicate embroidery.' },
  { id: '2', name: 'Wool Cashmere Blend Coat', slug: 'wool-cashmere-coat', price: 395.00, images: ['https://loremflickr.com/600/800/coat,fashion'], category: 'vintage', description: 'Luxurious wool cashmere blend coat with a timeless tailored fit. Perfect for layering over any outfit.' },
  { id: '3', name: 'Leather Ankle Boots', slug: 'leather-ankle-boots', price: 275.00, images: ['https://loremflickr.com/600/800/boots,fashion'], isNew: true, category: 'shoes', description: 'Handcrafted leather ankle boots with a comfortable stacked heel. Durable and stylish for everyday wear.' },
  { id: '4', name: 'Silk Scarf Collection', slug: 'silk-scarf', price: 85.00, compareAt: 120.00, images: ['https://loremflickr.com/600/800/scarf,fashion'], category: 'accessories', description: 'Luxurious silk scarf featuring hand-rolled edges and an artisanal print. Adds elegance to any ensemble.' },
  { id: '5', name: 'Linen Wide Leg Pants', slug: 'linen-wide-leg-pants', price: 165.00, images: ['https://loremflickr.com/600/800/pants,fashion'], category: 'vintage', description: 'Breathable linen wide leg pants with an elastic waistband. Effortlessly chic for warm-weather styling.' },
  { id: '6', name: 'Handcrafted Leather Bag', slug: 'leather-bag', price: 320.00, images: ['https://loremflickr.com/600/800/handbag,fashion'], isNew: true, category: 'accessories', description: 'Artisan-crafted leather bag with brass hardware and a spacious interior. A timeless investment piece.' },
  { id: '7', name: 'Cashmere Turtleneck', slug: 'cashmere-turtleneck', price: 210.00, images: ['https://loremflickr.com/600/800/turtleneck,fashion'], category: 'vintage', description: 'Ultra-soft cashmere turtleneck sweater with a relaxed ribbed finish. Essential for cozy sophistication.' },
  { id: '8', name: 'Gold Hoop Earrings', slug: 'gold-hoop-earrings', price: 65.00, images: ['https://loremflickr.com/600/800/earrings,fashion'], category: 'accessories', description: 'Classic gold hoop earrings with a subtle hammered texture. Lightweight and comfortable for daily wear.' },
  { id: '9', name: 'Evening Gown', slug: 'evening-gown', price: 450.00, compareAt: 580.00, images: ['https://loremflickr.com/600/800/gown,fashion'], isNew: true, category: 'dresses', description: 'An elegant evening gown with a dramatic train and intricate beadwork. Makes a statement at any formal event.' },
  { id: '10', name: 'Leather Crossbody Bag', slug: 'leather-crossbody-bag', price: 195.00, images: ['https://loremflickr.com/600/800/crossbody-bag,fashion'], category: 'accessories', description: 'Versatile leather crossbody bag with an adjustable strap and multiple pockets. Perfect for hands-free elegance.' },
  { id: '11', name: 'Denim Jacket', slug: 'denim-jacket', price: 145.00, compareAt: 180.00, images: ['https://loremflickr.com/600/800/denim-jacket,fashion'], category: 'vintage', description: 'Classic denim jacket with a lived-in wash and brass buttons. A wardrobe staple that only gets better with age.' },
  { id: '12', name: 'Cocktail Dress', slug: 'cocktail-dress', price: 220.00, images: ['https://loremflickr.com/600/800/cocktail-dress,fashion'], isNew: true, category: 'dresses', description: 'Chic cocktail dress with a fitted bodice and flared skirt. Cut from luxurious crepe fabric for a flawless drape.' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'sale') {
    return products.filter((p) => p.compareAt && p.compareAt > p.price);
  }
  if (categorySlug === 'new-arrivals') {
    return products.filter((p) => p.isNew);
  }
  return products.filter((p) => p.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
