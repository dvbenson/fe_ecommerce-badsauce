'use client';
import React, { useEffect, useRef } from 'react';
import useHasHydrated from 'hooks/zustand';
import { useCart, useModal } from '../../app/store';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon';
import NavItem from '../NavItem';
import { faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  handleNav: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleCart: () => number;
  handleSideCart: () => void;
}

export default function SideNavBar({
  handleNav,
  handleCart,
  handleSideCart,
}: NavBarProps) {
  const hasHydrated = useHasHydrated();
  const [showSideNav, setShowSideNav] = useModal((state) => [
    state.showSideNav,
    state.setShowSideNav,
  ]);
  const [cart] = useCart((state) => [state.cart]);
  const pathname = usePathname();

  const sideNavRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setShowSideNav();
    }
  };

  useEffect(() => {
    if (showSideNav) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showSideNav]);

  return (
    <div
      ref={sideNavRef}
      className={
        showSideNav
          ? `sm:p-30 duration-250 fixed left-0 top-0 z-50 h-screen w-[65%] bg-white p-10 shadow ease-in sm:w-[30%] lg:hidden`
          : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
      }
    >
      <div className="flex flex-col py-4">
        <div onClick={handleNav} className="flex cursor-pointer justify-end">
          <Icon icon={faXmark} className="text-2xl" />
        </div>
        <div className="mt-4 flex w-full items-center justify-start">
          <ul>
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/' : '/#home'}
              label={'Home'}
              active={pathname === '/shop'}
              className="ml-4 cursor-pointer py-4 font-sans text-lg  font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4"
              onClick={() => setShowSideNav()}
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#about' : '#home'}
              label={'About'}
              active={pathname === '/shop'}
              className="ml-4  cursor-pointer py-4 font-sans text-lg  font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4"
              onClick={() => setShowSideNav()}
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#contact' : '#contact'}
              label={'Contact'}
              active={pathname === '/shop'}
              className="ml-4  cursor-pointer py-4 font-sans text-lg font-medium  hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4"
              onClick={() => setShowSideNav()}
            />
            <NavItem
              key={uuidv4()}
              href="/shop"
              label="Shop"
              className="ml-4 cursor-pointer py-4 font-sans text-lg font-medium  hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4"
              onClick={() => setShowSideNav()}
            />
            <li key={uuidv4()} className="ml-4 py-4">
              <div
                className="relative items-center"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  handleNav(e);
                  handleSideCart();
                }}
              >
                <Icon
                  icon={faCartShopping}
                  className="cursor-pointer text-3xl group-hover:text-slate-500"
                />
                <span className="pointer-events-none absolute right-7 top-1 grid aspect-square h-6 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-blue-400  font-sans text-white shadow">
                  <p>{hasHydrated && handleCart()}</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
