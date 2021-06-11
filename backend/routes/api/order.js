/* eslint-disable no-unused-vars */
const express = require('express');
const {
  createOrder,
  getSingleOrder,
  myOrder,
  allOrders,
  updateOrders,
} = require('../../controllers/orderController');
const {
  isAuthenticated,
  isAuthorizedRoles,
} = require('../../middlewares/auth');

const router = express.Router();

// Create new order
router.post('/order/new', isAuthenticated, createOrder);
// Get Single order
router.get('/order/:id', isAuthenticated, getSingleOrder);
// Get all the orders of the logged in user.
router.get('/orders/me', isAuthenticated, myOrder);
// Get all the orders- only by admin.
router.get(
  '/admin/orders',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  allOrders,
);
// Get all the orders- only by admin.
router.put(
  '/admin/order/:id',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  updateOrders,
);

module.exports = router;
