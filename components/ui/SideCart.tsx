'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useModal, useCart } from 'app/store';
import Button from '@/components/Button';
import ScrollArea from '@/components/ScrollArea';
import Icon from '@/components/Icon';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface SideCartProps {
  handleSideCart: () => void;
}

export default function SideCart({ handleSideCart }: SideCartProps) {
  const router = useRouter();
  const cart = useCart((state) => state.cart);
  const emptyCart = useCart((state) => state.emptyCart);
  const [isSideCartOpen, setSideCartOpen] = useModal((state) => [
    state.isSideCartOpen,
    state.setSideCartOpen,
  ]);

  async function checkout() {
    const lineItems = cart.map((item) => {
      return { price: item.price_id, quantity: item.quantity };
    });
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      body: JSON.stringify({ lineItems }),
    });
    const data = await response.json();
    router.push(data.session.url);
  }

  const sideCartRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      sideCartRef.current &&
      !sideCartRef.current.contains(e.target as Node)
    ) {
      handleSideCart();
    }
  };

  useEffect(() => {
    if (isSideCartOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isSideCartOpen]);

  function backToShop() {
    router.push('/shop');
    handleSideCart();
  }

  return (
    <div
      ref={sideCartRef}
      className={
        isSideCartOpen
          ? `duration-250 fixed right-0 top-0 z-50 h-screen w-[65%] bg-white p-4 shadow ease-in sm:w-[30%]`
          : 'fixed right-[-100%] top-0 p-10 duration-500 ease-in'
      }
    >
      <div className="grid-col-1  grid h-full">
        <div className="flex h-full flex-col items-center justify-center py-4">
          <h1 className="mr-4 w-2/3 border-b-4 text-center font-heading text-3xl leading-relaxed">
            Your Cart
          </h1>

          <div className="relative w-full overflow-y-auto">
            <ScrollArea />
          </div>
          <div className="mt-auto flex flex-row justify-end gap-4">
            <div className="grid-col-1 grid gap-2">
              <Button
                onClick={() => backToShop()}
                label={'BACK TO SHOP'}
                className="h-8 w-40 rounded-full bg-black text-center font-sans font-semibold text-white hover:shadow-lg"
              />
              <Button
                label={'CHECKOUT'}
                onClick={() => {
                  checkout();
                  setSideCartOpen();
                }}
                className="h-8 w-40 rounded-full bg-green-600 text-center font-sans font-semibold text-white hover:opacity-75"
              />
            </div>
            <div className="grid-col-1 grid">
              <Button
                onClick={() => emptyCart()}
                label={<Icon icon={faShoppingCart} className="text-3xl" />}
                className="text-black shadow-none"
              />
              <p className="text-center font-sans text-xs font-semibold">
                Empty
              </p>
              <p className="text-center font-sans text-xs font-semibold">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
