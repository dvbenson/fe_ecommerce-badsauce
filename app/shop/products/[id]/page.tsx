'use client';
import { useCart } from 'app/store';
import { useRouter } from 'next/navigation';
import React, { ReactEventHandler } from 'react';
import ImageFrame from '@/components/ImageFrame';
import DefaultLayout from '@/components/ui/DefaultLayout';
import ProductDetails from '@/components/ProductDetails';
import QuantityControl from '@/components/QuantityControl';
import Button from '@/components/Button';
import { CartItem } from 'app/store';

export default function ProductPage() {
  const router = useRouter();
  const product = useCart((state) => state.product);
  const [quantityCount, setQuantityCount] = useCart((state) => [
    state.quantityCount,
    state.setQuantityCount,
  ]);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const cart = useCart((state) => state.cart);

  //TODO: add logic so cart is checked against new item and if it already exists (by price_id) increase quantity by quantity
  // may be new function that is called first then runs handleAddToCart logic
  function handleAddToCart() {
    const newItem: CartItem = {
      quantity: quantityCount,
      price_id: product.price_id,
      product_img: product.product_img,
    };
    addItemToCart({ newItem });
  }

  const handleBackToShop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantityCount({ newQuantityCount: 1 });
    router.back();
  };

  return (
    <DefaultLayout>
      <main className="mb-16 flex min-h-screen items-center justify-center sm:relative">
        <div className="grid-col-1 sm:grid-col-2 mt-24 grid max-w-[1000px] sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-8 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:transform">
          <div className="flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:gap-20">
            <ImageFrame
              src={product.product_img[0]}
              alt={product.product_name}
              width={300}
              height={300}
              className={'min-w-[300px]'}
            />

            <div
              id="non-img-container"
              className="grid-col-1 grid place-items-center gap-4 p-4"
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
              <div className="grid-col-1 grid place-items-center gap-2">
                <Button
                  onClick={() => {
                    handleAddToCart();
                    setQuantityCount({ newQuantityCount: 1 });
                  }}
                  label={'ADD TO CART'}
                  className="h-8 w-52 rounded-full bg-black font-sans font-semibold text-white shadow"
                />

                <Button
                  onClick={handleBackToShop}
                  label={'BACK TO SHOP'}
                  className="h-8 w-52 rounded-full bg-green-600 font-sans font-semibold text-white shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
