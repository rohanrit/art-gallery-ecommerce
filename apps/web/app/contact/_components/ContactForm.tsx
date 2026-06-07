'use client';
import React from 'react';

export function ContactForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you shortly.');
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
          <input id="name" required placeholder="Your name" className="w-full px-4 py-2.5 bg-cream border border-charcoal/20 rounded-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
          <input id="email" type="email" required placeholder="you@example.com" className="w-full px-4 py-2.5 bg-cream border border-charcoal/20 rounded-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30" />
        </div>
      </div>
      <div>
        <label htmlFor="order" className="block text-sm font-medium text-charcoal mb-1.5">Order Number (optional)</label>
        <input id="order" placeholder="AL-XXXXXX" className="w-full px-4 py-2.5 bg-cream border border-charcoal/20 rounded-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
        <textarea id="message" rows={5} required placeholder="How can we help?" className="w-full px-4 py-2.5 bg-cream border border-charcoal/20 rounded-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-y" />
      </div>
      <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm">
        Send Message
      </button>
    </form>
  );
}
