'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full h-24 shadow border-t-0 z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16">
        <div className="ml-4">
          <p className="text-3xl">BADSAUCE</p>
        </div>
        <div className="mr-4 hidden lg:flex">
          <ul className="hidden lg:flex flex-row gap-5">
            <li className="p-4">
              <a href="#home">Home</a>
            </li>
            <li className="p-4">
              <a href="#about">About</a>
            </li>
            <li className="p-4">
              <a href="#contact">Contact</a>
            </li>
            <li className="p-4">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="p-4">Cart</li>
          </ul>
        </div>
        <div onClick={handleNav} className="pl-24 cursor-pointer lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl sm:text-4xl sm:mr-2"
          />
        </div>
      </div>
      <div
        className={
          showMenu
            ? `fixed left-0 top-0 w-[65%] sm:w-[30%] lg:hidden h-screen p-10 sm:p-30 ease-in duration-250 z-50 bg-white shadow`
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex flex-col py-4">
          <div onClick={handleNav} className="flex justify-end cursor-pointer">
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </div>
          <div className="flex w-full justify-start items-center">
            <ul>
              <li
                className="py-4 cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                Home
              </li>
              <li className="p-4">
                <a href="#home">Home</a>
              </li>
              <li className="p-4">
                <a href="#about">About</a>
              </li>
              <li className="p-4">
                <a href="#contact">Contact</a>
              </li>
              <li className="p-4">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="py-4">Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
