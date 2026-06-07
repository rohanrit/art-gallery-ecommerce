'use client';
import React, { useState } from 'react';
import { Navbar, Footer } from '@alignartistry/ui';
import { products as allProducts, type Product } from '@/lib/data';

const initialWishlist = allProducts.filter((p) => ['1', '3', '6', '8'].includes(p.id));

function WishlistCard({ product, onRemove }: { product: Product; onRemove: () => void }) {
  const hasDiscount = product.compareAt && product.compareAt > product.price;

  return (
    <div className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-white border border-charcoal/10">
      <a href={`/products/${product.slug}`} className="w-24 h-32 sm:w-28 sm:h-36 shrink-0 bg-cream overflow-hidden">
        {product.images[0] ? (
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-charcoal/20">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </a>

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <a href={`/products/${product.slug}`} className="font-serif text-lg text-charcoal hover:text-primary transition-colors">
            {product.name}
          </a>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-charcoal font-medium">${Number(product.price).toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-charcoal/40 line-through">${Number(product.compareAt).toFixed(2)}</span>
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <a
            href={`/products/${product.slug}`}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium
                       hover:bg-primary/90 transition-colors uppercase tracking-wider"
          >
            View Item
          </a>
          <button
            onClick={onRemove}
            className="px-4 py-2 border border-charcoal/20 text-charcoal text-sm font-medium
                       hover:bg-charcoal hover:text-white transition-colors uppercase tracking-wider"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
              Wishlist
            </h1>
            <p className="mt-2 text-charcoal/60">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-charcoal/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p className="mt-4 text-lg text-charcoal/60">Your wishlist is empty.</p>
                <a
                  href="/new-arrivals"
                  className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-medium
                             hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                >
                  Browse New Arrivals
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {wishlist.map((product) => (
                  <WishlistCard
                    key={product.id}
                    product={product}
                    onRemove={() => setWishlist((prev) => prev.filter((p) => p.id !== product.id))}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
