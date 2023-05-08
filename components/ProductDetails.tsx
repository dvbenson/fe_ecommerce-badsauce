import React from 'react';

interface ProductDetailsProps {
  productName: string;
  productDescription: string;
  productPrice: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productName,
  productDescription,
  productPrice,
}: ProductDetailsProps) => {
  return (
    <div className="grid-col-1  grid max-w-[275px] items-center justify-center">
      <h1 className="text-2xl font-bold">{productName}</h1>
      <p className="text-lg">£ {productPrice / 100}</p>
      <p className="text-lg">{productDescription}</p>
    </div>
  );
};

export default ProductDetails;
