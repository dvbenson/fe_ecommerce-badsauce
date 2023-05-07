'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed z-50 h-24 w-full border-t-0 bg-white shadow">
      <div className="2x1:px-16 flex h-full w-full items-center justify-between px-4 ">
        <div className="ml-4">
          <p className="text-3xl">BADSAUCE</p>
        </div>
        <div className="mr-4 hidden lg:flex">
          <ul className="hidden flex-row gap-5 lg:flex">
            <li className="p-4">
              {pathname === '/shop' ? (
                <Link href="/">Home</Link>
              ) : (
                <a href="#home">Home</a>
              )}
            </li>
            <li className="p-4">
              {pathname === '/shop' ? (
                <Link href="/#about">About</Link>
              ) : (
                <a href="#about">About</a>
              )}
            </li>
            <li className="p-4">
              {pathname === '/shop' ? (
                <Link href="/#contact">Contact</Link>
              ) : (
                <a href="#contact">Contact</a>
              )}
            </li>
            <li className="p-4">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="p-4">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer pl-24 lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl sm:mr-2 sm:text-4xl"
          />
        </div>
      </div>
      <div
        className={
          showMenu
            ? `sm:p-30 duration-250 fixed left-0 top-0 z-50 h-screen w-[65%] bg-white p-10 shadow ease-in sm:w-[30%] lg:hidden`
            : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
        }
      >
        <div className="flex flex-col py-4">
          <div onClick={handleNav} className="flex cursor-pointer justify-end">
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </div>
          <div className="flex w-full items-center justify-start">
            <ul>
              <li
                className="cursor-pointer py-4"
                onClick={() => setShowMenu(false)}
              >
                {pathname === '/shop' ? (
                  <Link href="/">Home</Link>
                ) : (
                  <a href="#home">Home</a>
                )}
              </li>
              <li
                className="cursor-pointer py-4"
                onClick={() => setShowMenu(false)}
              >
                {pathname === '/shop' ? (
                  <Link href="/#about">About</Link>
                ) : (
                  <a href="#about">About</a>
                )}
              </li>
              <li className="py-4" onClick={() => setShowMenu(false)}>
                {pathname === '/shop' ? (
                  <Link href="/#contact">Contact</Link>
                ) : (
                  <a href="#contact">Contact</a>
                )}
              </li>
              <li className="py-4" onClick={() => setShowMenu(false)}>
                <Link href="/shop">Shop</Link>
              </li>
              <li className="py-4">
                <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
