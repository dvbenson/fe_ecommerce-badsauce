'use client';
import { useCart } from 'app/store';
import React, { useEffect } from 'react';
import Button from './Button';
import Icon from './Icon';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuantityControlProps {
  product_price: number;
}

export default function QuantityControl({
  product_price,
}: QuantityControlProps) {
  const [quantityCount, setQuantityCount] = useCart((state) => [
    state.quantityCount,
    state.setQuantityCount,
  ]);
  const [totalAmount, setTotalAmount] = useCart((state) => [
    state.totalAmount,
    state.setTotalAmount,
  ]);

  function handleMinus() {
    if (quantityCount >= 1) {
      setQuantityCount({ newQuantityCount: quantityCount - 1 });
    }
  }

  function handlePlus() {
    setQuantityCount({ newQuantityCount: quantityCount + 1 });
  }

  useEffect(() => {
    handleTotalAmount();
  }, [quantityCount]);

  function handleTotalAmount() {
    const newTotalAmount = ((product_price / 100) * quantityCount).toFixed(2);
    setTotalAmount({ newTotalAmount });
  }

  const currentTotal = ((product_price / 100) * quantityCount).toFixed(2);
  return (
    <>
      <div
        id="buttons-quantity-wrapper"
        className="grid-col-1 grid items-center justify-center gap-4"
      >
        <h2 className="font-bold">Quantity</h2>
        <div id="buttons-quantity" className="grid grid-cols-3 gap-2">
          <Button
            onClick={() => handleMinus()}
            label={<Icon icon={faMinus} className="text-black" />}
            className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md"
          />
          <span>{quantityCount}</span>
          <Button
            onClick={() => handlePlus()}
            label={<Icon icon={faPlus} className="text-black" />}
            className="h-8 w-8 rounded-full bg-gray-200 text-center shadow-md"
          />
        </div>
      </div>
      <div id="total-price-display" className="grid grid-cols-1 gap-2">
        <h2 className="font-bold">Total</h2>
        <p>£ {currentTotal}</p>
      </div>
    </>
  );
}
