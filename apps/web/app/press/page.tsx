import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Press — AlignArtistry' };

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Press</h1>
            <p className="mt-3 text-lg text-charcoal/60">Latest news and features about AlignArtistry.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <a href="#" className="block border border-charcoal/10 p-6 hover:border-primary/30 transition-colors group">
              <p className="text-xs text-charcoal/40 uppercase tracking-wider">Vogue &middot; March 2026</p>
              <h2 className="mt-2 font-serif text-xl text-charcoal group-hover:text-primary transition-colors">
                How AlignArtistry Is Redefining Vintage-Inspired Fashion
              </h2>
              <p className="mt-2 text-charcoal/60 text-sm leading-relaxed">
                The brand&apos;s latest collection blends heirloom craftsmanship with contemporary silhouettes.
              </p>
            </a>

            <a href="#" className="block border border-charcoal/10 p-6 hover:border-primary/30 transition-colors group">
              <p className="text-xs text-charcoal/40 uppercase tracking-wider">Harper&apos;s Bazaar &middot; January 2026</p>
              <h2 className="mt-2 font-serif text-xl text-charcoal group-hover:text-primary transition-colors">
                Sustainable Luxury: A Conversation with AlignArtistry&apos;s Founder
              </h2>
              <p className="mt-2 text-charcoal/60 text-sm leading-relaxed">
                On building a brand that values quality over quantity and the planet as much as profit.
              </p>
            </a>

            <a href="#" className="block border border-charcoal/10 p-6 hover:border-primary/30 transition-colors group">
              <p className="text-xs text-charcoal/40 uppercase tracking-wider">Elle Decor &middot; November 2025</p>
              <h2 className="mt-2 font-serif text-xl text-charcoal group-hover:text-primary transition-colors">
                The Rise of Thoughtful Fashion: Why AlignArtistry Stands Out
              </h2>
              <p className="mt-2 text-charcoal/60 text-sm leading-relaxed">
                From packaging to production, a look at the brand&apos;s holistic approach to style.
              </p>
            </a>

            <div className="pt-8 text-center">
              <p className="text-charcoal/60">
                For press inquiries, contact us at <a href="mailto:press@alignartistry.com" className="text-primary hover:text-primary/80">press@alignartistry.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
