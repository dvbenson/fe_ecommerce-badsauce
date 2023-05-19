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
    <div className="grid-col-1 grid max-w-[280px] items-center justify-center gap-3 sm:max-w-[0px]">
      <h1 className="w-3/4 border-b-4 border-slate-200 font-sans text-2xl font-bold sm:text-3xl">
        {productName}
      </h1>
      <p className="font-sans text-lg font-normal  sm:text-xl">
        £ {productPrice / 100}
      </p>
      <p className="mb-2 font-sans font-light sm:min-h-[80px] sm:min-w-[280px] text-base sm:text-xl">
        {productDescription}
      </p>
    </div>
  );
};

export default ProductDetails;
