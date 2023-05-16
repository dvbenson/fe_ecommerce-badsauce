import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 },
    );
  }

  const body = await request.json();

  if (body.lineItems.length === 0) {
    return NextResponse.json({ message: 'No line items' }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2022-11-15',
    });
    const session = await stripe.checkout.sessions.create({
      success_url: 'https://badsauce-frontend.vercel.app/success',
      cancel_url: 'https://badsauce-frontend.vercel.app/cancel',
      line_items: body.lineItems,
      mode: 'payment',
    });
    return NextResponse.json({ session }, { status: 201 });
  } catch (err) {
    console.log(err, 'ERROR');
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      {
        status: 500,
      },
    );
  }
}
