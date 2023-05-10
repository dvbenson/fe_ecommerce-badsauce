'use client';
import React from 'react';
import { useCart } from 'app/store';
import { v4 as uuidv4 } from 'uuid';
import ImageFrame from '@/components/ImageFrame';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ScrollArea() {
  const cart = useCart((state) => state.cart);
  const [selectedItemIndex, setSelectedItemIndex] = useCart((state) => [
    state.selectedItemIndex,
    state.setSelectedItemIndex,
  ]);
  const removeItemFromCart = useCart((state) => state.removeItemFromCart);
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
  //TODO: if item reduced to 0, remove item from cart
  const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity);

  const handleShowCartButtons = (index: number | null) => {
    if (selectedItemIndex === index) {
      setSelectedItemIndex({ itemIndex: null });
    } else {
      setSelectedItemIndex({ itemIndex: index });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="h-full max-h-[calc(100vh-16rem)] snap-proximity overflow-y-auto">
        {cart.length === 0 ? (
          <p className="mt-52 text-center text-lg text-slate-500">
            Your cart is currently empty
          </p>
        ) : (
          <ul className="flex list-none flex-col items-center justify-center gap-4 p-4">
            {cart.map((item: any, itemIndex: number) => (
              <li key={uuidv4()} className="snap-center">
                <div
                  className="flex items-center"
                  onClick={() => handleShowCartButtons(itemIndex)}
                >
                  <div className="mr-4 flex flex-col items-center gap-2">
                    <Button
                      className=" h-10 w-10 bg-black px-3 py-1 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        increaseItemQuantity({ itemIndex });
                      }}
                      label={<Icon icon={faPlus} className="" />}
                    />
                    <div className="pointer-events-none grid aspect-square h-10 w-10 place-items-center rounded-full  bg-slate-600 px-3 py-1  text-white shadow">
                      <span>{item.quantity}</span>
                    </div>
                    <Button
                      className="h-10 w-10 bg-black px-3 py-1 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        decreaseItemQuantity({ itemIndex });
                      }}
                      label={<Icon icon={faMinus} className="" />}
                    />
                  </div>
                  <div className="relative mr-8">
                    <ImageFrame
                      src={item.product_img[0]}
                      alt={item.price_id}
                      height={150}
                      width={150}
                      className={
                        typeof selectedItemIndex === 'number' &&
                        selectedItemIndex === itemIndex
                          ? 'opacity-25'
                          : ''
                      }
                    />

                    {selectedItemIndex === itemIndex && (
                      <div className="absolute inset-0 z-50 grid place-items-center bg-transparent">
                        <div className="grid-col-1 grid items-center justify-center p-4">
                          <Button
                            className="text-center font-semibold text-black"
                            label={
                              <Icon
                                icon={faTrashAlt}
                                className="text-6xl shadow-md"
                              />
                            }
                            onClick={() => {
                              removeItemFromCart({ itemIndex });
                              handleShowCartButtons(itemIndex);
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
