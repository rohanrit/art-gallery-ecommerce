'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImages?: string[];
  autoPlayInterval?: number;
}

export function HeroSection({
  title,
  subtitle,
  ctaText = 'Shop Now',
  ctaHref = '/new-arrivals',
  backgroundImages,
  autoPlayInterval = 5000,
}: HeroSectionProps) {
  const hasSlider = backgroundImages && backgroundImages.length > 0;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    if (!hasSlider) return;
    setCurrent((prev) => (prev + 1) % backgroundImages.length);
  }, [hasSlider, backgroundImages?.length]);

  useEffect(() => {
    if (!hasSlider || backgroundImages.length < 2) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [hasSlider, backgroundImages?.length, autoPlayInterval, next]);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-charcoal">
      {hasSlider ? (
        backgroundImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))
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
          <a
            href={ctaHref}
            className="inline-block px-6 py-2 bg-white text-charcoal text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:bg-charcoal hover:text-white"
          >
            {ctaText}
          </a>
        </div>

        {hasSlider && backgroundImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {backgroundImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
