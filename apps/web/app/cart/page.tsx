'use client';
import React, { useState } from 'react';
import { Navbar, Footer } from '@alignartistry/ui';
import { products as allProducts, type Product } from '@/lib/data';

interface CartItem {
  product: Product;
  quantity: number;
}

const initialCart: CartItem[] = [
  { product: allProducts[0], quantity: 1 },
  { product: allProducts[3], quantity: 2 },
  { product: allProducts[5], quantity: 1 },
  { product: allProducts[7], quantity: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCart);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 150 ? 0 : 12;
  const total = subtotal + shipping;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">Shopping Cart</h1>
            <p className="mt-2 text-charcoal/60">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-charcoal/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="mt-4 text-lg text-charcoal/60">Your cart is empty.</p>
                <a
                  href="/new-arrivals"
                  className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-medium
                             hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                >
                  Browse New Arrivals
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-white border border-charcoal/10">
                      <a href={`/products/${item.product.slug}`} className="w-24 h-32 sm:w-28 sm:h-36 shrink-0 bg-cream overflow-hidden">
                        {item.product.images[0] && (
                          <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                        )}
                      </a>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <a
                            href={`/products/${item.product.slug}`}
                            className="font-serif text-lg text-charcoal hover:text-primary transition-colors"
                          >
                            {item.product.name}
                          </a>
                          <p className="mt-1 text-charcoal font-medium">
                            ${Number(item.product.price).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-charcoal/20">
                            <button
                              onClick={() => updateQty(item.product.id, -1)}
                              className="px-3 py-1.5 text-charcoal hover:bg-charcoal/5 transition-colors text-sm"
                              aria-label="Decrease quantity"
                            >
                              &minus;
                            </button>
                            <span className="px-3 py-1.5 text-charcoal text-sm font-medium border-x border-charcoal/20 min-w-[2.5rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.product.id, 1)}
                              className="px-3 py-1.5 text-charcoal hover:bg-charcoal/5 transition-colors text-sm"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-sm text-charcoal/40 hover:text-red-500 transition-colors uppercase tracking-wider"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-cream p-6 sm:p-8 sticky top-24">
                    <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-charcoal/60">
                        <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-charcoal/60">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? <span className="text-primary font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-charcoal/40">Free shipping on orders over $150</p>
                      )}
                      <div className="flex justify-between text-charcoal font-medium text-base pt-3 border-t border-charcoal/10">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <a
                      href="/checkout"
                      className="mt-6 block w-full px-6 py-3 bg-primary text-primary-foreground text-center font-medium
                                 hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
                    >
                      Checkout
                    </a>

                    <a
                      href="/new-arrivals"
                      className="mt-3 block w-full px-6 py-3 border border-charcoal/20 text-charcoal text-center font-medium
                                 hover:bg-charcoal hover:text-white transition-colors uppercase tracking-wider text-sm"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
