'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useModal } from 'app/store';
import Button from '@/components/Button';

interface SideCartProps {
  handleSideCart: () => void;
}

export default function SideCart({ handleSideCart }: SideCartProps) {
  const router = useRouter();
  const [isSideCartOpen, setSideCartOpen] = useModal((state) => [
    state.isSideCartOpen,
    state.setSideCartOpen,
  ]);

  React.useEffect(() => {
    console.log('SideCart rendered, isSideCartOpen:', isSideCartOpen);
  }, [isSideCartOpen]);

  function backToShop() {
    router.push('/shop');
    handleSideCart();
  }

  return (
    <div
      className={
        isSideCartOpen
          ? `sm:p-30 duration-250 fixed right-0 top-0 z-50 h-screen w-[65%] bg-white p-10 shadow ease-in sm:w-[30%]`
          : 'fixed right-[-100%] top-0 p-10 duration-500 ease-in'
      }
    >
      <div className="">
        <div className="">
          <div className="">
            <h1>SideCart</h1>
            <Button
              onClick={handleSideCart}
              label={'Close Cart'}
              className="h-16 w-52 rounded-full bg-black text-white"
            />
            <Button
              onClick={() => backToShop()}
              label={'Continue Shopping'}
              className="h-16 w-52 rounded-full bg-black text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
