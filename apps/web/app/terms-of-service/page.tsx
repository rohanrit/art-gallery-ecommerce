import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Terms of Service — AlignArtistry' };

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Terms of Service</h1>
            <p className="mt-2 text-sm text-charcoal/40">Last updated: June 2026</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal space-y-6 text-charcoal/70 leading-relaxed">
            <p>
              By accessing or using the AlignArtistry website, you agree to be bound by these Terms of Service.
              If you do not agree, please do not use our site.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Use of the Site</h2>
            <p>
              You agree to use our website for lawful purposes only. You must not use the site in any way that violates
              applicable laws or regulations.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Products and Pricing</h2>
            <p>
              We strive to display accurate product descriptions and pricing. However, we reserve the right to correct
              any errors and update prices at any time without prior notice.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Orders</h2>
            <p>
              By placing an order, you agree to provide accurate and complete information. We reserve the right to
              refuse or cancel any order at our discretion.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and designs — is the property of AlignArtistry
              and is protected by copyright and trademark laws.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Limitation of Liability</h2>
            <p>
              AlignArtistry shall not be liable for any indirect, incidental, or consequential damages arising from
              your use of this website or any products purchased through it.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Changes</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be posted on this page with an
              updated effective date.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Contact</h2>
            <p>
              For questions about these Terms, please email <a href="mailto:legal@alignartistry.com" className="text-primary hover:text-primary/80">legal@alignartistry.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
