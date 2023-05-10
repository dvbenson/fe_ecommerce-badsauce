import Stripe from 'stripe';

interface dataItems  {

}

interface data {

}

export async function POST(request, response) {
    const body = JSON.parse(request.body)
    if (body.lineItems.length === 0) {

    return new Response('HELLO', 403)
}

try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
        apiVersion: '2022-11-15',
      });
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
        line_items: body.lineItems,
        mode: 'payment',
    })
    return response.status(201.json({session}))

} catch (err) {
    
    console.log("ERROR")
}
}