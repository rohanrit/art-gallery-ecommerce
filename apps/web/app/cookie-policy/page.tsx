import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Cookie Policy — AlignArtistry' };

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Cookie Policy</h1>
            <p className="mt-2 text-sm text-charcoal/40">Last updated: June 2026</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal space-y-6 text-charcoal/70 leading-relaxed">
            <p>
              This Cookie Policy explains how AlignArtistry uses cookies and similar technologies to recognize you
              when you visit our website. It explains what these technologies are and why we use them.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely
              used to make websites work more efficiently and provide information to the site owners.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-charcoal">Essential Cookies:</strong> Required for the website to function properly, such as maintaining your session and remembering cart items.</li>
              <li><strong className="text-charcoal">Analytics Cookies:</strong> Help us understand how visitors interact with our site so we can improve performance and user experience.</li>
              <li><strong className="text-charcoal">Functional Cookies:</strong> Remember your preferences and settings to provide a personalized experience.</li>
              <li><strong className="text-charcoal">Marketing Cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness.</li>
            </ul>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can block or delete cookies,
              but please note that some features of our website may not function properly without them.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Updates</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated effective date.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Contact</h2>
            <p>
              If you have questions about our use of cookies, please email <a href="mailto:privacy@alignartistry.com" className="text-primary hover:text-primary/80">privacy@alignartistry.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
