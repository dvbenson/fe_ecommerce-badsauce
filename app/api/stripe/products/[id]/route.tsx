// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';

// //need to debug this, getting null on insomnia
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id') as string;
//   const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
//     apiVersion: '2022-11-15',
//   });

//   const product = await stripe.products.retrieve(id);

//   return NextResponse.json({ product });
// }
