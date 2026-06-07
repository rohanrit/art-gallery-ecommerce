import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Shipping & Returns — AlignArtistry' };

export default function ShippingReturnsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Shipping &amp; Returns</h1>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Shipping</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>We offer free standard shipping on all orders over $150. Orders are processed within 1&ndash;2 business days.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-charcoal/10">
                        <th className="text-left py-2 font-medium text-charcoal">Method</th>
                        <th className="text-left py-2 font-medium text-charcoal">Cost</th>
                        <th className="text-left py-2 font-medium text-charcoal">Estimated Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-charcoal/10">
                        <td className="py-2">Standard</td>
                        <td className="py-2">$5.99 (Free over $150)</td>
                        <td className="py-2">5&ndash;8 business days</td>
                      </tr>
                      <tr className="border-b border-charcoal/10">
                        <td className="py-2">Express</td>
                        <td className="py-2">$15.99</td>
                        <td className="py-2">2&ndash;3 business days</td>
                      </tr>
                      <tr>
                        <td className="py-2">Next Day</td>
                        <td className="py-2">$25.99</td>
                        <td className="py-2">1 business day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>We currently ship within the United States and Canada. International shipping is available for select destinations.</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-4">Returns</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with tags attached.</p>
                <p>To initiate a return, please <a href="/contact" className="text-primary hover:text-primary/80">contact us</a> with your order number. We&apos;ll provide a prepaid return label.</p>
                <p>Refunds are processed within 5&ndash;7 business days after we receive your return. Original shipping charges are non-refundable.</p>
                <p>For exchanges, please place a new order and return the original item for a full refund.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
