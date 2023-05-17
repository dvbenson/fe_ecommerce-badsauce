'use client';
import { useCart, useModal } from '../../app/store';
import useHasHydrated from 'hooks/zustand';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import SideNavBar from '@/components/ui/SideNavBar';
import SideCart from '@/components/ui/SideCart';
import Logo from '@/components/Logo';
import NavItem from '@/components/NavItem';
import Icon from '@/components/Icon';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const hasHydrated = useHasHydrated();
  const cart = useCart((state) => state.cart);
  const [showSideNav, setShowSideNav] = useModal((state) => [
    state.showSideNav,
    state.setShowSideNav,
  ]);
  const [isSideCartOpen, setSideCartOpen] = useModal((state) => [
    state.isSideCartOpen,
    state.setSideCartOpen,
  ]);
  const pathname = usePathname();

  const handleNav = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowSideNav();
  };

  const handleSideCart = () => {
    setSideCartOpen();
  };

  const handleCart = () => {
    return cart.reduce((totalItems, item) => {
      return totalItems + item.quantity;
    }, 0);
  };
  //move to util file
  function getHref(pathname: string, target: string): string {
    if (pathname === '/') {
      return `#${target}`;
    } else if (pathname.includes('/products')) {
      return `/#${target}`;
    } else {
      return `/#${target}`;
    }
  }

  return (
    <nav className="fixed z-50 h-24 w-full border-t-0 bg-white">
      <div className="2x1:px-16 flex h-full w-full items-center justify-between px-4 ">
        <Logo />
        <div className="mr-4 hidden lg:flex">
          <ul className="hidden flex-row gap-5 lg:flex">
            <NavItem
              key={uuidv4()}
              href={getHref(pathname, 'home')}
              label={'Home'}
              active={pathname === '/shop'}
              className="p-4 font-sans font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-lg"
            />
            <NavItem
              key={uuidv4()}
              href={getHref(pathname, 'about')}
              label={'About'}
              active={pathname === '/shop'}
              className="p-4 font-sans font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-lg"
            />
            <NavItem
              key={uuidv4()}
              href={getHref(pathname, 'contact')}
              label={'Contact'}
              active={pathname === '/shop'}
              className="p-4 font-sans font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-lg"
            />

            <NavItem
              key={uuidv4()}
              href="/shop"
              label="Shop"
              className="p-4 font-sans font-medium hover:underline hover:decoration-blue-200 hover:decoration-4 hover:underline-offset-4 lg:text-lg"
            />

            <li key={uuidv4()} className="font-sans font-medium">
              <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  handleSideCart();
                }}
                className="group relative grid cursor-pointer place-items-center p-3"
              >
                <Icon
                  icon={faCartShopping}
                  className="cursor-pointer text-3xl group-hover:text-slate-500"
                />

                <span className="pointer-events-none absolute right-2.5 top-1/4 grid aspect-square h-6 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-blue-400  font-sans text-white shadow">
                  <p>{hasHydrated && handleCart()}</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer pl-24 lg:hidden">
          <Icon icon={faBars} className="text-2xl sm:mr-2 sm:text-4xl" />
        </div>
      </div>
      {isSideCartOpen && <SideCart handleSideCart={handleSideCart} />}
      <SideNavBar
        handleNav={handleNav}
        handleCart={handleCart}
        handleSideCart={handleSideCart}
      />
    </nav>
  );
}
