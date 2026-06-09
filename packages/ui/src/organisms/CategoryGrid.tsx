import React from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  images: string[];
}

interface DiscountBlock {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
  discount?: DiscountBlock;
}

export function CategoryGrid({ categories, title, discount }: CategoryGridProps) {
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
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 sm:gap-6 sm:min-h-[600px] lg:min-h-[700px]">
            {categories.map((category, index) => (
              <a
                key={category.id}
                href={`/${category.slug}`}
                className={`group relative overflow-hidden bg-charcoal shadow-sm ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                } ${
                  index === 1 ? 'sm:col-start-3 sm:row-start-1' : ''
                } ${
                  index === 2 ? 'sm:col-start-3 sm:row-start-2' : ''
                } ${
                  index === 3 ? 'sm:col-start-3 sm:row-start-3' : ''
                } min-h-[200px] sm:min-h-0`}
              >
                {category.images && category.images.length > 0 ? (
                  <img
                    src={category.images[0]}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-charcoal/10">
                    <span className="font-serif text-3xl text-white/20">{category.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 transition-all duration-500 group-hover:-translate-y-1 opacity-0 group-hover:opacity-100">
                  <h3 className="font-serif text-xl sm:text-2xl text-white">
                    {category.name}
                  </h3>
                  <span className="inline-block mt-2 text-sm text-white/80 group-hover:text-white transition-all duration-300 uppercase tracking-wider group-hover:tracking-[0.1em]">
                    Shop Now
                  </span>
                </div>
              </a>
            ))}

            {discount && (
              <a
                href={discount.ctaHref || '/sale'}
                className="group relative overflow-hidden min-h-[200px] sm:min-h-0 sm:col-span-2 sm:col-start-1 sm:row-start-3 shadow-sm"
                style={
                  discount.backgroundImage
                    ? {
                        backgroundImage: `url(${discount.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-serif text-3xl sm:text-4xl text-white mb-2 transition-transform duration-500 group-hover:scale-105">
                    {discount.title}
                  </p>
                  {discount.description && (
                    <p className="text-white/80 text-base sm:text-lg mb-4 max-w-xs">
                      {discount.description}
                    </p>
                  )}
                  <span className="inline-block px-6 py-2 bg-white text-charcoal text-sm uppercase tracking-wider font-medium transition-all duration-300 group-hover:bg-charcoal group-hover:text-white shadow-lg">
                    {discount.ctaText || 'Shop Sale'}
                  </span>
                </div>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
