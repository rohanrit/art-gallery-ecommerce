import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar, Footer, FadeIn, ProductGrid } from '@alignartistry/ui';
import { getProductBySlug, products } from '@/lib/data';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return;
  return { title: `${product.name} — AlignArtistry` };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const hasDiscount = product.compareAt && product.compareAt > product.price;
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="aspect-[3/4] relative overflow-hidden bg-cream">
              {product.images[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-charcoal/20">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                {product.isNew && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1">
                    New
                  </span>
                )}
                {hasDiscount && product.category && (
                  <a
                    href={`/${product.category}`}
                    className="text-xs text-charcoal/50 uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    {product.category}
                  </a>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
                {product.name}
              </h1>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl text-charcoal font-medium">
                  ${Number(product.price).toFixed(2)}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-charcoal/40 line-through">
                    ${Number(product.compareAt).toFixed(2)}
                  </span>
                )}
              </div>

              {product.description && (
                <p className="mt-6 text-base text-charcoal/70 leading-relaxed">
                  {product.description}
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-primary text-primary-foreground px-8 py-3.5 font-medium
                             hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                >
                  Add to Cart
                </button>
                <button
                  className="flex-initial px-8 py-3.5 border border-charcoal/20 text-charcoal font-medium
                             hover:bg-charcoal hover:text-white transition-colors uppercase tracking-wider text-sm"
                >
                  Wishlist
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-charcoal/10">
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-charcoal/50 uppercase tracking-wider">Material</dt>
                    <dd className="mt-1 text-charcoal font-medium">Premium Quality</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50 uppercase tracking-wider">Fit</dt>
                    <dd className="mt-1 text-charcoal font-medium">True to Size</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50 uppercase tracking-wider">Shipping</dt>
                    <dd className="mt-1 text-charcoal font-medium">Free over $150</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50 uppercase tracking-wider">Returns</dt>
                    <dd className="mt-1 text-charcoal font-medium">30-Day Policy</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>

        <FadeIn variant="fade-in-right">
          <ProductGrid title="You May Also Like" products={related} />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
