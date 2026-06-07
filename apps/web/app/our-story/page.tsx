import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Our Story — AlignArtistry' };

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Our Story</h1>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              AlignArtistry was born from a simple belief: fashion should feel personal, timeless, and intentional.
              What started as a small curated collection of vintage-inspired pieces has grown into a destination for those
              who appreciate quality, craftsmanship, and design that transcends trends.
            </p>
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              Our founder, inspired by the elegance of bygone eras and the clean lines of modern design, set out to create
              a brand that bridges the gap between vintage charm and contemporary style. Every piece in our collection is
              thoughtfully selected or designed with an eye for detail, ensuring that each garment tells its own story.
            </p>
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              Today, we continue to grow — but our values remain the same. We believe in sustainable practices, ethical
              production, and creating pieces that you&apos;ll love for years to come. Thank you for being part of our journey.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
