import Stripe from 'stripe';
import DefaultLayout from '../../components/DefaultLayout';
import ProductCard from '../../components/ProductCard';

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

  return (
    <DefaultLayout>
      <main className="flex flex-col min-h-screen p-4">
        <section className="flex-grow mt-24">
          <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, productIndex) => {
              const product_id = product.product.id;
              const product_price = product.unit_amount;
              const product_info = product.product;

              return (
                <ProductCard
                  key={productIndex}
                  product_id={product_id}
                  product_price={product_price}
                  product_info={product_info}
                />
              );
            })}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
