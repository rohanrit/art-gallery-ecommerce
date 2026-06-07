'use client';
import React from 'react';
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

function CartSummary() {
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

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">Checkout</h1>
            <p className="mt-2 text-charcoal/60">Enter your shipping details to continue.</p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <form
                className="lg:col-span-3 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = '/billing';
                }}
              >
                <div className="bg-white border border-charcoal/10 p-6 sm:p-8">
                  <h2 className="font-serif text-xl text-charcoal mb-6">Shipping Information</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="First Name" required placeholder="Jane" />
                    <Input label="Last Name" required placeholder="Doe" />
                  </div>

                  <div className="mt-4">
                    <Input label="Email Address" type="email" required placeholder="jane@example.com" />
                  </div>

                  <div className="mt-4">
                    <Input label="Phone Number" type="tel" required placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="mt-4">
                    <Input label="Street Address" required placeholder="123 Main Street" />
                  </div>

                  <div className="mt-4">
                    <Input label="Apartment / Suite (optional)" placeholder="Apt 4B" />
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input label="City" required placeholder="New York" />
                    <Input label="State" required placeholder="NY" />
                    <Input label="ZIP Code" required placeholder="10001" />
                  </div>

                  <div className="mt-4">
                    <Input label="Country" required placeholder="United States" />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a href="/cart" className="text-sm text-charcoal/60 hover:text-primary transition-colors uppercase tracking-wider">
                    &larr; Back to Cart
                  </a>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-medium
                               hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                  >
                    Continue to Billing
                  </button>
                </div>
              </form>

              <div className="lg:col-span-2">
                <CartSummary />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
