import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'FAQ — AlignArtistry' };

const faqs = [
  { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, and Apple Pay.' },
  { q: 'How long does shipping take?', a: 'Standard shipping takes 5–8 business days. Express (2–3 days) and Next Day shipping are also available. See our <a href="/shipping-returns" class="text-primary hover:text-primary/80">Shipping & Returns</a> page for details.' },
  { q: 'What is your return policy?', a: 'We accept returns within 30 days of delivery. Items must be unworn with tags attached. Visit our <a href="/shipping-returns" class="text-primary hover:text-primary/80">Shipping & Returns</a> page for the full policy.' },
  { q: 'Do you offer free shipping?', a: 'Yes! Standard shipping is free on all orders over $150.' },
  { q: 'How do I find my size?', a: 'Check out our <a href="/size-guide" class="text-primary hover:text-primary/80">Size Guide</a> for detailed measurements and fit recommendations.' },
  { q: 'Can I change or cancel my order?', a: 'We process orders quickly. If you need to change or cancel, please <a href="/contact" class="text-primary hover:text-primary/80">contact us</a> within 1 hour of placing your order.' },
  { q: 'Do you ship internationally?', a: 'We currently ship within the United States and Canada. International shipping to select destinations is coming soon.' },
  { q: 'How can I track my order?', a: 'Once your order ships, you\'ll receive a confirmation email with a tracking number.' },
  { q: 'Are your products sustainable?', a: 'We\'re committed to sustainable practices — using eco-friendly materials, ethical production, and carbon-neutral shipping. Learn more on our <a href="/sustainability" class="text-primary hover:text-primary/80">Sustainability</a> page.' },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">FAQ</h1>
            <p className="mt-3 text-lg text-charcoal/60">Frequently asked questions.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-charcoal/10">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-charcoal font-medium hover:text-primary transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-charcoal/40 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-charcoal/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
