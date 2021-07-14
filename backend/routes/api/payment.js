const express = require('express');
const {
  processPayment,
  sendStripApi,
} = require('../../controllers/paymentController');
const {
  isAuthenticated,
  isAuthorizedRoles,
} = require('../../middlewares/auth');

const router = express.Router();

// Create new payment
router.post('/payment/process', isAuthenticated, processPayment);
// Get/send stripe api key
router.get('/stripeapi', isAuthenticated, sendStripApi);

module.exports = router;
