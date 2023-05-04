import Stripe from 'stripe';
import DefaultLayout from '@/components/DefaultLayout';

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15',
  });

  const res: Stripe.Response<Stripe.ApiList<Stripe.Price>> =
    await stripe.prices.list({
      expand: ['data.product'],
    });

  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  console.log(products);
  return (
    <div>
      <DefaultLayout>
        <main className="flex flex-col min-h-screen mx-auto p-4">
          <section id="home" className="flex-grow">
            <h1>Home</h1>
          </section>
          <section id="about" className="flex-grow">
            <h1>About</h1>
          </section>
          <section id="contact" className="flex-grow">
            <h1>Contact</h1>
          </section>
        </main>
      </DefaultLayout>
    </div>
  );
}
