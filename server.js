const express = require('express');

const app = express();
const stripe = require('stripe')('sk_test_51Ij1IsAClzkudXaowA7OO3trBZhzgZAZFJYTdV2bmRyCHl5b3qzfa0GDfJl3gFG01nh78apKVCoKEilNdWtGwCvD00xb5dXLH0');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          product: '{{PRODUCT_NAME}}',
          unit_amount: '{{PRODUCT_PRICE}}',
          currency: 'eur',
        },
        quantity: '{{PRODUCT_QTY}}',
      }],
    mode: 'payment',
    success_url: 'http://omedocs.herokuapp.com/',
    cancel_url: 'http://omedocs.herokuapp.com/cart',
  });

  res.json({ id: session.id });
});

app.listen(8080, () => console.log(`Listening on port ${8080}!`));
