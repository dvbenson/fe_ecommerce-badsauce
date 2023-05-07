'use client';
import { useCart } from 'app/store';
import Image from 'next/image';
import React from 'react';
import DefaultLayout from '@/components/DefaultLayout';

export default function ProductPage() {
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);

  function handleAddToCart() {
    const newItem: object = {
      quantity: 1,
      price_id: product.id,
    };
    addItemToCart({ newItem });
  }

  return (
    <DefaultLayout>
      <main className="flex min-h-screen items-center justify-center sm:relative">
        <div className=" grid-col-1 sm:grid-col-2 grid max-w-[600px] sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 p-4 sm:flex-row">
            <div
              id="img-container"
              className="max-h-[300px] max-w-[300px] sm:min-h-[300px] sm:min-w-[300px]"
            >
              <Image
                src={product.product_img[0]}
                alt={product.product_name}
                width={300}
                height={300}
                className="col-span-2 aspect-square h-auto w-full object-cover"
              />
            </div>
            <div
              id="non-img-container"
              className="grid-col-1 grid items-center justify-center gap-4"
            >
              <div
                id="product-details"
                className="grid-col-1  grid max-w-[275px] items-center justify-center"
              >
                <h1 className="text-2xl font-bold">{product.product_name}</h1>
                <p className="text-lg">£ {product.product_price / 100}</p>
                <p className="text-lg">{product.product_desc}</p>
              </div>
              <div
                id="quantity-total-container"
                className="flex flex-row items-center justify-center gap-2"
              >
                <div
                  id="buttons-quantity-wrapper"
                  className="grid-col-1 grid items-center justify-center gap-4"
                >
                  <h2 className="font-bold">Quantity</h2>
                  <div id="buttons-quantity" className="grid grid-cols-3 gap-2">
                    <button className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md">
                      -
                    </button>
                    <span>0</span>
                    <button className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md">
                      +
                    </button>
                  </div>
                </div>
                <div
                  id="total-price-display"
                  className="grid grid-cols-1 gap-2"
                >
                  <h2 className="font-bold">Total</h2>
                  <p>£ {(product.product_price / 100) * 2}</p>
                </div>
              </div>
              <div
                id="button-add-to-cart"
                className="flex justify-center gap-4"
              >
                <button
                  onClick={() => handleAddToCart}
                  className="h-16 w-52 rounded-full bg-black p-2 font-bold text-white shadow-md"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
