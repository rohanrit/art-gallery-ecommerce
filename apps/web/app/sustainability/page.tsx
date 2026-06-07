import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Sustainability — AlignArtistry' };

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Sustainability</h1>
            <p className="mt-3 text-lg text-charcoal/60">Our commitment to a better future.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Ethical Sourcing</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We partner with suppliers who share our commitment to fair labor practices and environmental stewardship.
                Our materials are sourced from certified sustainable farms and mills that prioritize animal welfare, reduced
                water usage, and minimal chemical processing.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Eco-Friendly Materials</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Whenever possible, we use organic cotton, recycled fibers, and low-impact dyes. Our packaging is made
                from recycled materials and is fully recyclable. We continuously explore innovative fabrics that reduce
                our environmental footprint without compromising quality.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Waste Reduction</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We produce in small batches to minimize overproduction and waste. Any excess fabric is donated to local
                textile recycling programs or repurposed into limited-edition accessories. We encourage our customers to
                love their pieces longer through our care and repair guides.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Carbon Neutral Shipping</h2>
              <p className="text-charcoal/70 leading-relaxed">
                All orders are shipped carbon neutral through verified offset programs. We are working toward a fully
                circular supply chain and are committed to transparency in our sustainability journey.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
