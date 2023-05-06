'use client';
import Image from 'next/image';
import React from 'react';
import { useCart } from 'src/store';

export default function page() {
  const product = useCart((state) => state.product);

  // product data needs to be refetched

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid ">
        <div className="max-h-[450px] max-w-[450px]">
          <Image
            src={product.product_info.images[0]}
            alt={product.product_info.name}
            width={600}
            height={600}
            className="h-auto w-auto p-4"
          />
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
