'use client';
import React from 'react';
import { useCart } from 'app/store';
import { v4 as uuidv4 } from 'uuid';

export default function ScrollArea() {
  const cart = useCart((state) => state.cart);
  return (
    <div className="flex flex-col">
      <div className="h-full max-h-[calc(100vh-16rem)] snap-proximity overflow-y-auto">
        <ul className="flex list-none flex-col items-center justify-center gap-2">
          {cart.map((item) => (
            <li key={uuidv4()} className="snap-center">
              <div>{item.price_id}</div>
              <div>{item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
