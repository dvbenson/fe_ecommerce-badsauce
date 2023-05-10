'use client';
import React from 'react';
import { useCart } from 'app/store';

export default function page() {
  const cart = useCart((state) => state.cart);

  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p>CART ITEMS GO HERE</p>
      </div>
    </main>
  );
}
