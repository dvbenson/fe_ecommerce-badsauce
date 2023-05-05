'use client';
import { CardProps } from '../app/shop/page';
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
  const router = useRouter();

  function onProductClick() {
    router.push(`/shop/product/${product_id}`);
  }

  return (
    <div
      id="card-container"
      className="relative h-[300px] w-[300px]"
      onClick={() => {
        onProductClick;
      }}
    >
      <div
        id="card"
        className="flex h-full w-full cursor-pointer items-center justify-center overflow-hidden shadow hover:shadow-lg"
      >
        <img
          src={product_info.images[0]}
          alt={product_info.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 p-2">
        <button disabled className="rounded-full bg-white p-2 font-bold shadow">
          {product_info.name}
        </button>
      </div>
    </div>
  );
}
