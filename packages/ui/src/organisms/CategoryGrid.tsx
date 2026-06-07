import React from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string | null;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
}

export function CategoryGrid({ categories, title }: CategoryGridProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-8 sm:mb-10 text-center">
            {title}
          </h2>
        )}

        {categories.length === 0 ? (
          <div className="text-center py-16 text-charcoal/40">
            <p className="text-lg">No categories yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <a
                key={category.id}
                href={`/${category.slug}`}
                className={`group relative overflow-hidden bg-charcoal ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ minHeight: index === 0 ? '480px' : '220px' }}
              >
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-charcoal/10">
                    <span className="font-serif text-3xl text-white/20">{category.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-white">
                    {category.name}
                  </h3>
                  <span className="inline-block mt-2 text-sm text-white/80 group-hover:text-white transition-colors uppercase tracking-wider">
                    Shop Now
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
