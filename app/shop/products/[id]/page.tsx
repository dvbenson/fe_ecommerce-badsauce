'use client';
import { useCart } from 'app/store';
import React from 'react';
import ImageFrame from '@/components/ImageFrame';
import DefaultLayout from '@/components/ui/DefaultLayout';
import ProductDetails from '@/components/ProductDetails';
import QuantityControl from '@/components/QuantityControl';
import Button from '@/components/Button';

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
        <div className="grid-col-1 sm:grid-col-2 mt-24 grid max-w-[1000px] sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform">
          <div className=" flex flex-col items-center justify-center gap-4 p-4 sm:flex-row">
            <ImageFrame
              src={product.product_img[0]}
              alt={product.product_name}
              width={500}
              height={500}
              className={'min-w-[300px] sm:min-w-[400px] md:min-w-[500px]'}
            />
            <div
              id="non-img-container"
              className="grid-col-1 grid items-center justify-center gap-4"
            >
              <ProductDetails
                productName={product.product_name}
                productDescription={product.product_desc}
                productPrice={product.product_price}
              />
              <div
                id="quantity-total-container"
                className="flex flex-row items-center justify-center gap-2"
              >
                <QuantityControl product_price={product.product_price} />
              </div>
              <div
                id="button-add-to-cart"
                className="flex justify-center gap-4"
              >
                <Button
                  onClick={() => handleAddToCart()}
                  label={'ADD TO CART'}
                  className="h-16 w-52 rounded-full bg-black font-bold text-white shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
