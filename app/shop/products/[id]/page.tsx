'use client';
import Image from 'next/image';
import React from 'react';
import { useCart } from 'src/store';
import { useRouter } from 'next/navigation';

export default function page() {
  const product = useCart((state) => state.product);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid ">
        <div className="max-h-[450px] max-w-[450px]">
          <Image
            src={product.product_img[0]}
            alt={product.product_name}
            width={600}
            height={600}
            className="h-auto w-auto p-4"
          />
          <div className="">
            <h1 className="text-2xl font-bold">{product.product_name}</h1>
            <p className="text-lg">{product.product_price / 100}</p>
            <p className="text-lg">{product.product_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
