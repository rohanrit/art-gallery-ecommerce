'use client';
import React, { useState } from 'react';
import { Navbar, Footer, Input } from '@alignartistry/ui';
import { products as allProducts } from '@/lib/data';

const cartItems = [
  { product: allProducts[0], quantity: 1 },
  { product: allProducts[3], quantity: 2 },
  { product: allProducts[5], quantity: 1 },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
const shipping = subtotal >= 150 ? 0 : 12;
const total = subtotal + shipping;

function OrderSummary() {
  return (
    <div className="bg-cream p-6 sm:p-8">
      <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.product.id} className="flex gap-4">
            <div className="w-16 h-20 shrink-0 bg-white overflow-hidden">
              {item.product.images[0] && (
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-charcoal font-medium truncate">{item.product.name}</p>
              <p className="text-sm text-charcoal/60">Qty: {item.quantity}</p>
              <p className="text-sm text-charcoal mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-charcoal/10 space-y-2 text-sm">
        <div className="flex justify-between text-charcoal/60">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-charcoal/60">
          <span>Shipping</span>
          <span>{shipping === 0 ? <span className="text-primary">Free</span> : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-charcoal font-medium text-base pt-2 border-t border-charcoal/10">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default function BillingPage() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <>
        <Navbar />
        <main>
          <section className="py-24 sm:py-32">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="mt-6 font-serif text-3xl sm:text-4xl text-charcoal">Order Confirmed!</h1>
              <p className="mt-3 text-charcoal/60 text-lg">Thank you for your purchase. You&apos;ll receive a confirmation email shortly.</p>
              <p className="mt-1 text-sm text-charcoal/40">Order #AL-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
              <a
                href="/new-arrivals"
                className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground font-medium
                           hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
              >
                Continue Shopping
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">Billing</h1>
            <p className="mt-2 text-charcoal/60">Enter your payment details to complete the order.</p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <form
                className="lg:col-span-3 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPlaced(true);
                }}
              >
                <div className="bg-white border border-charcoal/10 p-6 sm:p-8">
                  <h2 className="font-serif text-xl text-charcoal mb-6">Payment Details</h2>

                  <Input label="Cardholder Name" required placeholder="Jane Doe" />

                  <div className="mt-4">
                    <Input label="Card Number" required placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Input label="Expiry Date" required placeholder="MM/YY" />
                    <Input label="CVC" required placeholder="123" />
                  </div>

                  <div className="mt-4">
                    <Input label="Billing Address" required placeholder="123 Main Street" />
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input label="City" required placeholder="New York" />
                    <Input label="State" required placeholder="NY" />
                    <Input label="ZIP Code" required placeholder="10001" />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a href="/checkout" className="text-sm text-charcoal/60 hover:text-primary transition-colors uppercase tracking-wider">
                    &larr; Back to Shipping
                  </a>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-medium
                               hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                  >
                    Place Order — ${total.toFixed(2)}
                  </button>
                </div>
              </form>

              <div className="lg:col-span-2">
                <OrderSummary />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
