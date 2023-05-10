'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useModal } from 'app/store';
import Button from '@/components/Button';
import ScrollArea from '@/components/ScrollArea';

interface SideCartProps {
  handleSideCart: () => void;
}

export default function SideCart({ handleSideCart }: SideCartProps) {
  const router = useRouter();
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
          ? `sm:p-30 duration-250 fixed right-0 top-0 z-50 h-screen w-[65%] bg-white p-10 shadow ease-in sm:w-[30%]`
          : 'fixed right-[-100%] top-0 p-10 duration-500 ease-in'
      }
    >
      <div className="grid-col-1 grid h-full">
        <div className="flex h-full flex-col items-center justify-center p-1">
          <h1 className="text-3xl">Your Cart</h1>
          <div className="flex-grow overflow-y-auto">
            <ScrollArea />
          </div>
          <div className="mt-auto flex flex-col justify-end">
            <div className="grid-col-1 grid gap-2">
              <Button
                onClick={handleSideCart}
                label={'CLOSE CART'}
                className="h-8 w-52 rounded-full bg-black text-center font-semibold text-white hover:shadow-lg"
              />
              <Button
                onClick={() => backToShop()}
                label={'CONTINUE BROWSING'}
                className="h-8 w-52 rounded-full bg-black text-center font-semibold text-white hover:shadow-lg"
              />
              <Link href="/shop/checkout">
                <Button
                  label={'CHECKOUT'}
                  className="h-8 w-52 rounded-full bg-green-600 text-center font-semibold text-white hover:shadow-lg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
