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
    <div className="grid-col-1 grid max-w-[280px] items-center justify-center gap-2 sm:max-w-[0px]">
      <h1 className="w-full border-b-4 border-slate-200 font-sans text-2xl font-bold">
        {productName}
      </h1>
      <p className="font-sans text-lg font-medium">£ {productPrice / 100}</p>
      <p className="mb-2 font-sans text-lg sm:min-h-[80px] sm:min-w-[280px] sm:text-base">
        {productDescription}
      </p>
    </div>
  );
};

export default ProductDetails;
