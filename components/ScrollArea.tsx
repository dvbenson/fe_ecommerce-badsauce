'use client';
import React from 'react';
import useHasHydrated from 'hooks/zustand';
import { useCart } from 'app/store';
import { v4 as uuidv4 } from 'uuid';
import ImageFrame from '@/components/ImageFrame';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ScrollArea() {
  const hasHydrated = useHasHydrated();
  const cart = useCart((state) => state.cart);
  const [selectedItemIndex, setSelectedItemIndex] = useCart((state) => [
    state.selectedItemIndex,
    state.setSelectedItemIndex,
  ]);
  const removeItemFromCart = useCart((state) => state.removeItemFromCart);
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
  //TODO: Make middle of button span unclickable to cursor events to stop triggering delete item
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
          <p className="mt-52 text-center font-sans text-base text-slate-500">
            Your cart is currently empty
          </p>
        ) : (
          <ul className="flex list-none flex-col items-center justify-center gap-4 p-4">
            {hasHydrated &&
              cart.map((item: any, itemIndex: number) => (
                <li key={uuidv4()} className="snap-center">
                  <div
                    className="mr-4 flex flex-col items-center justify-center gap-2"
                    onClick={() => handleShowCartButtons(itemIndex)}
                  >
                    <div className="relative">
                      <div className="pointer-events-none relative shadow">
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
                            <div className="grid-col-1  grid items-center justify-center p-4">
                              <div
                                className="pointer-events-auto"
                                onClick={() => {
                                  removeItemFromCart({ itemIndex });
                                  handleShowCartButtons(itemIndex);
                                }}
                              >
                                <Icon
                                  icon={faTrashAlt}
                                  className="pointer-events-auto text-6xl"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 flex w-[120px] -translate-y-1 translate-x-4 transform flex-row place-items-center justify-between rounded-full bg-neutral-300 opacity-50 shadow hover:opacity-100">
                        <Button
                          className="pointer-events-auto h-6 w-10 border-r-2 px-0 py-0 text-black shadow-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.quantity === 1) {
                              removeItemFromCart({ itemIndex });
                            } else {
                              decreaseItemQuantity({ itemIndex });
                            }
                          }}
                          label={<Icon icon={faMinus} className="" />}
                        />
                        <div className="pointer-events-auto grid aspect-square h-6 w-24 place-items-center bg-neutral-200 p-0 font-sans  font-medium  text-black shadow-inner ">
                          <span className="pointer-events-auto">
                            {item.quantity}
                          </span>
                        </div>

                        <Button
                          className="pointer-events-auto h-6 w-10  border-l-2 px-0 py-0 text-black shadow-none"
                          onClick={(e) => {
                            e.stopPropagation();
                            increaseItemQuantity({ itemIndex });
                          }}
                          label={<Icon icon={faPlus} className="" />}
                        />
                      </div>
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
