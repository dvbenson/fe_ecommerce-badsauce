import { getStripeProducts, PriceWithProduct } from 'utils/stripe/getProducts';
import React from 'react';
import Link from 'next/link';
import DefaultLayout from '../../components/ui/DefaultLayout';
import ProductCard from '../../components/ui/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import { Product } from 'app/store';

export interface CardProps extends Product {
  product_id: string;
  price_id: string;
  product_price: number;
  product_desc: any;
  product_name: string;
  product_img: string[];
  metadata: object;
}

export default async function Shop() {
  const products: PriceWithProduct[] = await getStripeProducts();

  return (
    <DefaultLayout>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <section className="mt-24 flex-grow">
          <div className="">
            <ul className="grid w-full max-w-[1000px] list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => {
                const price_id = product.id;
                const product_price = product.unit_amount || 0;
                const product_info = product.product;
                const {
                  description: product_desc = '',
                  name: product_name = '',
                  id: product_id = '',
                  images: product_img = [],
                  metadata = {},
                } = product_info;
                return (
                  <li key={uuidv4()}>
                    <Link href={`/shop/products/${product_id}`}>
                      <ProductCard
                        key={uuidv4()}
                        product_id={product_id}
                        price_id={price_id}
                        product_price={product_price}
                        product_desc={product_desc}
                        product_name={product_name}
                        product_img={product_img}
                        metadata={metadata}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
