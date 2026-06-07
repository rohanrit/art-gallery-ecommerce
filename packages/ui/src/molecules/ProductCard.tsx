import React from 'react';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAt?: number | null;
  images: string[];
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.compareAt && product.compareAt > product.price;

  return (
    <div className="group relative bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[3/4] relative overflow-hidden bg-cream">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-charcoal/20">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1">
            New
          </span>
        )}

        <button
          className="absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal text-sm font-medium py-2.5
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Quick View
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-base text-charcoal font-medium truncate">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-charcoal font-medium">
            ${Number(product.price).toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-charcoal/40 text-sm line-through">
              ${Number(product.compareAt).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
