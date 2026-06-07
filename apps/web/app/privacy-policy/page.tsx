import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Privacy Policy — AlignArtistry' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Privacy Policy</h1>
            <p className="mt-2 text-sm text-charcoal/40">Last updated: June 2026</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal space-y-6 text-charcoal/70 leading-relaxed">
            <p>
              AlignArtistry (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Information We Collect</h2>
            <p>
              We collect personal information you voluntarily provide, such as your name, email address, shipping address,
              and payment details when you make a purchase or contact us.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">How We Use Your Information</h2>
            <p>
              We use your information to process orders, communicate with you about your purchases, send marketing
              communications (with your consent), and improve our website and services.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your data with trusted third-party service providers
              who assist us in operating our website and processing payments, subject to confidentiality agreements.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie
              preferences through your browser settings. See our <a href="/cookie-policy" className="text-primary hover:text-primary/80">Cookie Policy</a> for more details.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. To exercise these rights,
              please <a href="/contact" className="text-primary hover:text-primary/80">contact us</a>.
            </p>

            <h2 className="font-serif text-xl text-charcoal mt-8 mb-2">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please email us at <a href="mailto:privacy@alignartistry.com" className="text-primary hover:text-primary/80">privacy@alignartistry.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
