'use client';
import { useCart } from '../../app/store';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon';
import NavItem from '../NavItem';
import { faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
  handleNav: () => void;
}

export default function SideNavBar({
  showMenu,
  setShowMenu,
  handleNav,
}: NavBarProps) {
  const [cart] = useCart((state) => [state.cart]);
  const pathname = usePathname();

  return (
    <div
      className={
        showMenu
          ? `sm:p-30 duration-250 fixed left-0 top-0 z-50 h-screen w-[65%] bg-white p-10 shadow ease-in sm:w-[30%] lg:hidden`
          : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
      }
    >
      <div className="flex flex-col py-4">
        <div onClick={handleNav} className="flex cursor-pointer justify-end">
          <Icon icon={faXmark} className="xl" />
        </div>
        <div className="flex w-full items-center justify-start">
          <ul>
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/' : '/#home'}
              label={'Home'}
              active={pathname === '/shop'}
              className="cursor-pointer py-4"
              onClick={() => setShowMenu(!showMenu)}
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#about' : '#home'}
              label={'About'}
              active={pathname === '/shop'}
              className="cursor-pointer py-4"
              onClick={() => setShowMenu(!showMenu)}
            />
            <NavItem
              key={uuidv4()}
              href={pathname === '/shop' ? '/#contact' : '#contact'}
              label={'Contact'}
              active={pathname === '/shop'}
              className="cursor-pointer py-4"
              onClick={() => setShowMenu(!showMenu)}
            />
            <NavItem
              key={uuidv4()}
              href="/shop"
              label="Shop"
              className="cursor-pointer py-4"
              onClick={() => setShowMenu(!showMenu)}
            />
            <li key={uuidv4()} className="py-4">
              <div className="relative items-center">
                <Icon icon={faCartShopping} className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute right-0 top-0 aspect-square -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 px-1 text-xs text-white">
                    <p>{cart.length}</p>
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
