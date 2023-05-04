import Stripe from 'stripe';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
      <NavBar />
      <main className="flex flex-col min-h-screen mx-auto p-4">
        <h1 className=" flex-grow">Home</h1>
      </main>
      <Footer />
    </div>
  );
}
