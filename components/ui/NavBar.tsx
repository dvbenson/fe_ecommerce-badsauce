'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import SideNavBar from '@/components/ui/SideNavBar';
import Logo from '@/components/Logo';
import NavItem from '@/components/NavItem';
import Icon from '@/components/Icon';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setShowMenu(!showMenu);
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
              <Icon icon={faCartShopping} className="text-xl" />
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
      />
    </nav>
  );
}
