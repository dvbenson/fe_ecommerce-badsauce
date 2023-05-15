'use client';
import { useCart } from '../../app/store';
import { CardProps } from '../../app/store';
import ImageFrame from '../ImageFrame';
import { Product } from 'app/store';

export default function ProductCard({
  product_id,
  price_id,
  product_price,
  product_desc,
  product_name,
  product_img,
  metadata,
}: CardProps) {
  const [product, setProduct] = useCart((state) => [
    state.product,
    state.setProduct,
  ]);

  function onProductClick() {
    const newProduct: Product = {
      product_id,
      price_id,
      product_price,
      product_desc,
      product_name,
      product_img,
      metadata,
    };
    setProduct({ newProduct });
  }

  return (
    <div
      id="card-container"
      className="relative h-[300px] w-[300px]"
      onClick={() => {
        onProductClick();
      }}
    >
      <ImageFrame
        src={product_img[0]}
        alt={product_name}
        className="h-full w-full cursor-pointer items-center justify-center overflow-hidden shadow hover:shadow-lg"
        priority={true}
      />
    </div>
  );
}
