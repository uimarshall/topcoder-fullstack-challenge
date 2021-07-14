const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    // amount: req.body.amount,
    amount,
    currency: 'usd',

    metadata: { integration_check: 'accept_a_payment' },
  });

  // STRIPE_SECRET_KEY is used in the backend
  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});

// STRIPE_API_KEY is used in the frontend
// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
