import React, { ReactNode } from 'react';

const CartWrapper = (children: ReactNode) => {
  return <div>{children}</div>;
};

const cartTitle = (title: string) => {
  <div>
    <h1>{title}</h1>
  </div>;
};

const cartItemScroll = () => {};
const cartDetails = () => {};
const checkoutButton = () => {};

export default {
  CartWrapper,
  cartTitle,
  cartItemScroll,
  cartDetails,
  checkoutButton,
};
