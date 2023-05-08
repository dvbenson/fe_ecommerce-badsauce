import React from 'react';

interface TotalPriceProps {
  product_price: number;
}

export default function TotalPrice({ product_price }: TotalPriceProps) {
  return (
    <div id="total-price-display" className="grid grid-cols-1 gap-2">
      <h2 className="font-bold">Total</h2>
      <p>£ {(product_price / 100) * 2}</p>
    </div>
  );
}
