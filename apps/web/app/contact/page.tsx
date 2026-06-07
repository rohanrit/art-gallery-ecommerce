import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';
import { ContactForm } from './_components/ContactForm';

export const metadata = { title: 'Contact Us — AlignArtistry' };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Contact Us</h1>
            <p className="mt-3 text-lg text-charcoal/60">We&apos;d love to hear from you.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="font-serif text-lg text-charcoal">Email</h3>
                <p className="mt-1 text-sm text-charcoal/60">
                  <a href="mailto:hello@alignartistry.com" className="text-primary hover:text-primary/80">hello@alignartistry.com</a>
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-charcoal">Phone</h3>
                <p className="mt-1 text-sm text-charcoal/60">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-charcoal">Visit</h3>
                <p className="mt-1 text-sm text-charcoal/60">123 Lafayette Street<br />New York, NY 10012</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
