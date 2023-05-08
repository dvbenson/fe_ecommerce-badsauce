import React from 'react';
import Button from './Button';
import Icon from './Icon';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuantityControlProps {}

export default function QuantityControl() {
  return (
    <div
      id="buttons-quantity-wrapper"
      className="grid-col-1 grid items-center justify-center gap-4"
    >
      <h2 className="font-bold">Quantity</h2>
      <div id="buttons-quantity" className="grid grid-cols-3 gap-2">
        <Button
          label={<Icon icon={faMinus} className="text-black" />}
          className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md"
        />
        <span>0</span>
        <Button
          label={<Icon icon={faPlus} className="text-black" />}
          className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md"
        />
      </div>
    </div>
  );
}
