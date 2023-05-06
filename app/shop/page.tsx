'use client';
import { useEffect } from 'react';
import { useCart } from 'src/store';
import Stripe from 'stripe';
import React from 'react';
import Link from 'next/link';
import DefaultLayout from '../../components/DefaultLayout';
import ProductCard from '../../components/ProductCard';
import uuid from 'react-uuid';

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15',
  });

  const res: Stripe.Response<Stripe.ApiList<Stripe.Price>> =
    await stripe.prices.list({
      expand: ['data.product'],
    });

  const prices = res.data;

  const pricesWithProduct: PriceWithProduct[] = prices.map((price) => ({
    ...price,
    product: price.product as Stripe.Product,
  }));

  return pricesWithProduct;
}

export interface CardProps {
  product_id: string;
  product_price: number | null;
  product_info: Stripe.Product;
}

interface PriceWithProduct extends Stripe.Price {
  product: Stripe.Product;
}

export default async function Shop() {
  const products: PriceWithProduct[] = await getStripeProducts();
  const [product, setProduct] = useCart((state) => [
    state.product,
    state.setProduct,
  ]);

  useEffect(() => {}, []);

  return (
    <DefaultLayout>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <section className="mt-24 flex-grow">
          <div className="grid w-full  max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product, productIndex) => {
              const product_id = product.product.id;
              const product_price = product.unit_amount;
              const product_info = product.product;
              return (
                <Link href={`/shop/products/${product_id}`}>
                  <ProductCard
                    key={uuid()}
                    product_id={product_id}
                    product_price={product_price}
                    product_info={product_info}
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
