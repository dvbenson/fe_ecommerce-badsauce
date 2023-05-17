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
  const currentTotal = ((product_price / 100) * quantityCount).toFixed(2);

  useEffect(() => {
    handleTotalAmount();
  }, [quantityCount]);

  function handleMinus() {
    if (quantityCount >= 1) {
      setQuantityCount({ newQuantityCount: quantityCount - 1 });
    }
  }

  function handlePlus() {
    setQuantityCount({ newQuantityCount: quantityCount + 1 });
  }

  function handleTotalAmount() {
    const newTotalAmount = ((product_price / 100) * quantityCount).toFixed(2);
    setTotalAmount({ newTotalAmount });
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 place-items-center gap-4">
          <h2 className="w-3/4 border-b-2 border-slate-200 text-center font-sans text-lg font-semibold">
            Quantity
          </h2>
          <h2 className="w-2/3 border-b-2 border-slate-200 text-center font-sans text-lg font-semibold">
            Total
          </h2>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-8">
          <div className="grid grid-cols-3 place-items-center">
            <Button
              onClick={() => handleMinus()}
              label={<Icon icon={faMinus} className="text-black" />}
              className={
                quantityCount > 1
                  ? 'h-8 w-8  bg-white  px-0 py-0 shadow-none'
                  : 'invisible h-8  w-8 bg-gray-200  px-0 py-0 shadow-none'
              }
            />
            <span className="font-sans text-lg">{quantityCount}</span>
            <Button
              onClick={() => handlePlus()}
              label={<Icon icon={faPlus} className="text-black" />}
              className="h-8 w-8 bg-white px-0 py-0 shadow-none"
            />
          </div>
          <p className="font-sans text-lg">£ {currentTotal}</p>
        </div>
      </div>
    </>
  );
}
