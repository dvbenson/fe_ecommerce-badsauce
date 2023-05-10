'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useModal } from 'app/store';
import { useCart } from 'app/store';
import Button from '@/components/Button';
import ScrollArea from '@/components/ScrollArea';

interface SideCartProps {
  handleSideCart: () => void;
}

export default function SideCart({ handleSideCart }: SideCartProps) {
  const router = useRouter();
  const emptyCart = useCart((state) => state.emptyCart);
  const [isSideCartOpen, setSideCartOpen] = useModal((state) => [
    state.isSideCartOpen,
    state.setSideCartOpen,
  ]);

  const sideCartRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any) => {
    if (sideCartRef.current && !sideCartRef.current.contains(event.target)) {
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
      window.addEventListener('mousedown', handleOutsideClick);
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
          <h1 className="w-2/3 border-b-4 text-center text-3xl leading-relaxed">
            Your Cart
          </h1>

          <div className="relative w-full overflow-y-auto">
            <ScrollArea />
          </div>
          <div className="mt-auto flex flex-col justify-end">
            <div className="grid-col-1 grid  gap-2">
              {/* TODO: add close button for side cart on mobile */}
              {/* <div className="flex flex-row justify-between">
                <Button
                  onClick={handleSideCart}
                  label={'CLOSE'}
                  className="h-8 w-24 rounded-full bg-red-600 text-center font-semibold text-white hover:shadow-lg"
                />
                <Button
                  onClick={() => emptyCart()}
                  label={'EMPTY'}
                  className="h-8 w-24 rounded-full bg-red-600 text-center font-semibold text-white hover:shadow-lg"
                />
              </div> */}
              <Button
                onClick={() => backToShop()}
                label={'CONTINUE BROWSING'}
                className="h-8 w-52 rounded-full bg-black text-center font-semibold text-white hover:shadow-lg"
              />
              <Link href="/shop/checkout">
                <Button
                  label={'CHECKOUT'}
                  className="h-8 w-52 rounded-full bg-green-600 text-center font-semibold text-white hover:opacity-75"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
