'use client';
import { useState } from 'react';
import { useCart } from '../../app/store';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import SideNavBar from '@/components/ui/SideNavBar';
import Logo from '@/components/Logo';
import NavItem from '@/components/NavItem';
import Icon from '@/components/Icon';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [cart] = useCart((state) => [state.cart]);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setShowMenu(!showMenu);
  };

  const handleCart = () => {
    return cart.reduce((totalItems, item) => {
      return totalItems + item.quantity;
    }, 0);
  };

  return (
    <nav className="fixed z-50 h-24 w-full border-t-0 bg-white shadow">
      <div className="2x1:px-16 flex h-full w-full items-center justify-between px-4 ">
        <Logo />
        <div className="mr-4 hidden lg:flex">
          <ul className="hidden flex-row gap-5 lg:flex">
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/' : '/#home'}
              label={'Home'}
              active={pathname === '/shop'}
              className="p-4"
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#about' : '#home'}
              label={'About'}
              active={pathname === '/shop'}
              className="p-4"
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#contact' : '#contact'}
              label={'Contact'}
              active={pathname === '/shop'}
              className="p-4"
            />
            <NavItem key={uuidv4()} href="/shop" label="Shop" className="p-4" />
            <li key={uuidv4()} className="p-4">
              <div className="group relative grid cursor-pointer place-items-center">
                <Icon
                  icon={faCartShopping}
                  className="cursor-pointer text-3xl group-hover:text-slate-500"
                />
                {cart.length > 0 && (
                  <span className="pointer-events-none absolute right-0 top-0 grid aspect-square h-6 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-red-600  text-white shadow">
                    <p className="text-sm font-medium">{handleCart()}</p>
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer pl-24 lg:hidden">
          <Icon icon={faBars} className="text-2xl sm:mr-2 sm:text-4xl" />
        </div>
      </div>
      <SideNavBar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleNav={handleNav}
        handleCart={handleCart}
      />
    </nav>
  );
}
