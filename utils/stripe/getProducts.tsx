import Stripe from 'stripe';

export async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15',
  });

  const res: Stripe.Response<Stripe.ApiList<Stripe.Price>> =
    await stripe.prices.list({
      expand: ['data.product'],
    });

  const prices = res.data.reverse();

  const pricesWithProduct: PriceWithProduct[] = prices.map((price) => ({
    ...price,
    product: price.product as Stripe.Product,
  }));

  return pricesWithProduct;
}

export interface PriceWithProduct extends Stripe.Price {
  product: Stripe.Product;
}
