'use client';
import React, { ReactNode } from 'react';
import { useCart } from 'app/store';
import CartWrapper from '../CartItems';

export default function Cart() {
  const cart = useCart((state) => state.cart);

  return (
    <main>
      <CartWrapper></CartWrapper>
    </main>
  );
}
