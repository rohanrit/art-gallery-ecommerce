import React from 'react';
import { ProductCard } from '../molecules/ProductCard';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAt?: number | null;
  images: string[];
  isNew?: boolean;
}

interface ProductGridProps {
  title: string;
  products: Product[];
  columns?: 3 | 4;
  viewAllHref?: string;
}

export function ProductGrid({ title, products, columns = 4, viewAllHref }: ProductGridProps) {
  const gridCols = columns === 4
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3';

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal">
            {title}
          </h2>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="text-sm text-charcoal/60 hover:text-primary transition-colors uppercase tracking-wider"
            >
              View All
            </a>
          )}
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 text-charcoal/40">
            <p className="text-lg">No products yet.</p>
          </div>
        ) : (
          <div className={`grid ${gridCols} gap-4 sm:gap-6 lg:gap-8`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
