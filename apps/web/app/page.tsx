import React from 'react';
import { Navbar, Footer, HeroSection, CategoryGrid, ProductGrid } from '@alignartistry/ui';

const sampleCategories = [
  { id: '1', name: 'Dresses', slug: 'dresses', image: null },
  { id: '2', name: 'Shoes', slug: 'shoes', image: null },
  { id: '3', name: 'Vintage', slug: 'vintage', image: null },
  { id: '4', name: 'Accessories', slug: 'accessories', image: null },
];

const sampleProducts = [
  { id: '1', name: 'Floral Meadow Dress', slug: 'floral-meadow-dress', price: 189.00, compareAt: 249.00, images: [], isNew: true },
  { id: '2', name: 'Wool Cashmere Blend Coat', slug: 'wool-cashmere-coat', price: 395.00, images: [] },
  { id: '3', name: 'Leather Ankle Boots', slug: 'leather-ankle-boots', price: 275.00, images: [], isNew: true },
  { id: '4', name: 'Silk Scarf Collection', slug: 'silk-scarf', price: 85.00, compareAt: 120.00, images: [] },
  { id: '5', name: 'Linen Wide Leg Pants', slug: 'linen-wide-leg-pants', price: 165.00, images: [] },
  { id: '6', name: 'Handcrafted Leather Bag', slug: 'leather-bag', price: 320.00, images: [], isNew: true },
  { id: '7', name: 'Cashmere Turtleneck', slug: 'cashmere-turtleneck', price: 210.00, images: [] },
  { id: '8', name: 'Gold Hoop Earrings', slug: 'gold-hoop-earrings', price: 65.00, images: [] },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection
          title="Where Vintage Charm Meets Modern Style"
          subtitle="Discover our curated collection of timeless pieces, thoughtfully designed for the contemporary wardrobe."
          ctaText="Explore New Arrivals"
          ctaHref="/new-arrivals"
        />

        <CategoryGrid categories={sampleCategories} title="Shop by Category" />

        <ProductGrid title="New Arrivals" products={sampleProducts} />

        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4">
              Timeless Design, Naturally
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Every piece is thoughtfully crafted with sustainable materials and a
              commitment to quality that transcends seasons.
            </p>
            <a
              href="/about"
              className="inline-block mt-8 px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground
                         hover:bg-primary-foreground hover:text-primary transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Our Story
            </a>
          </div>
        </section>

        <ProductGrid title="Featured Products" products={sampleProducts.slice(0, 4)} columns={4} />
      </main>

      <Footer />
    </>
  );
}
