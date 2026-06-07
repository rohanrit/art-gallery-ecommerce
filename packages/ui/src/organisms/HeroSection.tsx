import React from 'react';
import { Button } from '../atoms/Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText = 'Shop Now',
  ctaHref = '/new-arrivals',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-charcoal">
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary/30" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 sm:mt-10">
          <a href={ctaHref}>
            <Button variant="primary" size="lg" className="bg-white text-charcoal hover:bg-white/90">
              {ctaText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
