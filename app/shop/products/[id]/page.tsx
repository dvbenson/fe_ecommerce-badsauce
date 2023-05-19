'use client';
import React from 'react';
import { useCart, CartItem } from 'app/store';
import { useRouter } from 'next/navigation';
import ImageFrame from '@/components/ImageFrame';
import DefaultLayout from '@/components/ui/DefaultLayout';
import ProductDetails from '@/components/ProductDetails';
import QuantityControl from '@/components/QuantityControl';
import Button from '@/components/Button';

export default function ProductPage() {
  const router = useRouter();
  const product = useCart((state) => state.product);
  const [quantityCount, setQuantityCount] = useCart((state) => [
    state.quantityCount,
    state.setQuantityCount,
  ]);
  const addItemToCart = useCart((state) => state.addItemToCart);

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
      <main className="mb-16 flex min-h-screen items-center justify-center">      
        <div className="mt-24 ">
          <div className="flex flex-col items-center justify-center gap-4 p-4 sm:flex-row sm:gap-20">
            <ImageFrame
              src={product.product_img[0]}
              alt={product.product_name}
              width={500}
              height={500}
              className={'max-w-[300px] sm:max-w-[400px] md:max-w-[500px] shadow-xl'}
              variant=""
            />
            <div
              id="non-img-container"
              className="grid-col-1 grid place-items-center gap-4 px-4"
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
                  onClick={handleBackToShop}
                  label={'BACK TO SHOP'}
                  className="h-8 w-52 rounded-full bg-zinc-800 font-sans font-semibold text-white shadow-lg sm:h-10 sm:text-xl"
                />
                <Button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleAddToCart();
                    setQuantityCount({ newQuantityCount: 1 });
                    handleBackToShop(e);
                  }}
                  label={'ADD TO CART'}
                  className="h-8 w-52  rounded-full bg-blue-500 font-sans text-lg font-semibold text-white shadow-lg sm:h-10 sm:text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
