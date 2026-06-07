import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Careers — AlignArtistry' };

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Careers</h1>
            <p className="mt-3 text-lg text-charcoal/60">Join our team and help shape the future of fashion.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We&apos;re always looking for passionate, creative individuals who share our love for timeless design and
              sustainable practices. At AlignArtistry, you&apos;ll work with a dedicated team in a collaborative environment
              that values innovation, craftsmanship, and inclusivity.
            </p>

            <div className="mt-12 space-y-6">
              <div className="border border-charcoal/10 p-6">
                <h2 className="font-serif text-xl text-charcoal">Creative Director</h2>
                <p className="mt-2 text-sm text-charcoal/60">New York, NY &middot; Full-Time</p>
                <p className="mt-3 text-charcoal/70 leading-relaxed">
                  Lead our design vision and oversee the creative direction of all collections. 5+ years experience in
                  fashion design required.
                </p>
                <a href="mailto:careers@alignartistry.com" className="mt-4 inline-block text-sm text-primary hover:text-primary/80 uppercase tracking-wider font-medium">
                  Apply Now &rarr;
                </a>
              </div>

              <div className="border border-charcoal/10 p-6">
                <h2 className="font-serif text-xl text-charcoal">Sustainability Coordinator</h2>
                <p className="mt-2 text-sm text-charcoal/60">Remote &middot; Full-Time</p>
                <p className="mt-3 text-charcoal/70 leading-relaxed">
                  Drive our sustainability initiatives and help us achieve our environmental goals. Background in
                  environmental science or sustainable fashion preferred.
                </p>
                <a href="mailto:careers@alignartistry.com" className="mt-4 inline-block text-sm text-primary hover:text-primary/80 uppercase tracking-wider font-medium">
                  Apply Now &rarr;
                </a>
              </div>

              <div className="border border-charcoal/10 p-6">
                <h2 className="font-serif text-xl text-charcoal">E-Commerce Marketing Manager</h2>
                <p className="mt-2 text-sm text-charcoal/60">New York, NY &middot; Full-Time</p>
                <p className="mt-3 text-charcoal/70 leading-relaxed">
                  Own our digital marketing strategy across email, social, and paid channels. 3+ years in e-commerce
                  marketing required.
                </p>
                <a href="mailto:careers@alignartistry.com" className="mt-4 inline-block text-sm text-primary hover:text-primary/80 uppercase tracking-wider font-medium">
                  Apply Now &rarr;
                </a>
              </div>
            </div>

            <p className="mt-12 text-sm text-charcoal/50 text-center">
              Don&apos;t see a role that fits? Send your resume to <a href="mailto:careers@alignartistry.com" className="text-primary hover:text-primary/80">careers@alignartistry.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
