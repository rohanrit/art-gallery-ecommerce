import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar, Footer, FadeIn, ProductGrid } from '@alignartistry/ui';
import {
  getProductsByCategory,
  getCategoryBySlug,
  getAllCategorySlugs,
  products,
} from '@/lib/data';

const categoryMeta: Record<string, { title: string; description: string }> = {
  'new-arrivals': { title: 'New Arrivals', description: 'Discover the latest drops — fresh styles updated just for you.' },
  sale: { title: 'Sale', description: 'Limited-time offers on your favorite pieces. Don\'t miss out.' },
};

interface PageProps {
  params: { category: string };
}

export function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return [...slugs, 'new-arrivals', 'sale'].map((category) => ({ category }));
}

export function generateMetadata({ params }: PageProps) {
  const { category } = params;
  const cat = getCategoryBySlug(category);
  const meta = categoryMeta[category];

  if (cat) {
    return { title: `${cat.name} — AlignArtistry` };
  }
  if (meta) {
    return { title: `${meta.title} — AlignArtistry` };
  }
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = params;
  const cat = getCategoryBySlug(category);
  const meta = categoryMeta[category];
  const filtered = getProductsByCategory(category);

  if (filtered.length === 0 && !cat && !meta) {
    notFound();
  }

  const displayName = cat?.name ?? meta?.title ?? category;
  const description = meta?.description ?? `Explore our curated collection of ${cat?.name?.toLowerCase() ?? category}.`;

  return (
    <>
      <Navbar />
      <main>
        <FadeIn>
          <section className="bg-cream py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">
                {displayName}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-charcoal/60 max-w-xl mx-auto">
                {description}
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ProductGrid title="" products={filtered} />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
