'use client';
import { CardProps } from '../app/shop/page';
import { useRouter } from 'next/navigation';

export default function ProductCard({
  product_id,
  product_price,
  product_info,
}: CardProps) {
  const router = useRouter();

  function onProductClick() {
    router.push(`/shop/product?${product_id}`);
  }

  return (
    <div id="card-container" className="relative" onClick={onProductClick}>
      <div id="card" className="shadow hover:shadow-lg cursor-pointer">
        <img src={product_info.images[0]} alt={product_info.name} />
      </div>
      <div className="absolute right-0 top-0 p-2">
        <button disabled className="rounded-full bg-white p-2 shadow font-bold">
          {product_info.name}
        </button>
      </div>
    </div>
  );
}
