'use client';
import { useState } from 'react';
import { CardProps } from '../app/shop/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export default function ProductCard({
  product_id,
  product_price,
  product_info,
}: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function onProductClick() {
    router.push(`/shop/product?${product_id}`);
  }

  return (
    <div
      id="card-container"
      className="relative w-[300px] h-[300px]"
      onClick={() => {
        {
          setShowModal(true);
          onProductClick();
        }
      }}
    >
      <div
        id="card"
        className="shadow hover:shadow-lg cursor-pointer flex justify-center items-center w-full h-full overflow-hidden"
      >
        <img
          src={product_info.images[0]}
          alt={product_info.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute right-0 top-0 p-2">
        <button disabled className="rounded-full bg-white p-2 shadow font-bold">
          {product_info.name}
        </button>
      </div>
    </div>
  );
}
