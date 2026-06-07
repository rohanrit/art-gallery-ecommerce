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
                {category.images && category.images.length > 0 ? (
                  <div className="w-full h-full overflow-x-auto snap-x snap-mandatory">
                    {category.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${category.name} ${imgIdx + 1}`}
                        className="w-full h-full object-cover snap-center shrink-0 transition-transform duration-500 group-hover:scale-105"
                      />
                    ))}
                  </div>
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

            {discount && (
              <a
                href={discount.ctaHref || '/sale'}
                className="relative overflow-hidden col-span-1 sm:col-span-2 lg:col-span-2 flex items-center justify-center p-8 sm:p-12 min-h-[220px] group"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90" />
                <div className="relative text-center">
                  <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
                    {discount.title}
                  </p>
                  {discount.description && (
                    <p className="text-white/80 text-base sm:text-lg mb-4">
                      {discount.description}
                    </p>
                  )}
                  <span className="inline-block px-6 py-2 bg-white text-charcoal text-sm uppercase tracking-wider font-medium transition-all duration-300 group-hover:bg-charcoal group-hover:text-white">
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
