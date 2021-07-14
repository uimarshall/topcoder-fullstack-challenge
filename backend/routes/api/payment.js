const express = require('express');
const { processPayment } = require('../../controllers/paymentController');
const {
  isAuthenticated,
  isAuthorizedRoles,
} = require('../../middlewares/auth');

const router = express.Router();

// Create new payment
router.post('/payment/process', isAuthenticated, processPayment);
