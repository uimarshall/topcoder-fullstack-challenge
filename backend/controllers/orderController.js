/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');

const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Order = require('../models/Order');
const Product = require('../models/Product');
const ErrorHandler = require('../utils/errorHandler');

const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// @desc: Create a new order
// @route: /api/v1/order/new
// @access: protected

exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  const orderCreated = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    // paidAt- This means as at the time of creating the order, the user has paid for that order.
    paidAt: Date.now(),

    user: req.user._id,
  });

  return res.status(StatusCodes.CREATED).json({
    success: true,
    data: orderCreated,
  });
});

// @desc: Get single order
// @route: /api/v1/order/:id
// @access: protected

exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const singleOrderFound = await Order.findById(req.params.id).populate(
    'user',
    'name email',
  );

  if (!singleOrderFound) {
    return next(new ErrorHandler('Order not found!', 404));
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: singleOrderFound,
  });
});

// @desc: Get all the orders of the logged in user.
// @route: /api/v1/order/me
// @access: protected

exports.myOrder = catchAsyncErrors(async (req, res, next) => {
  const myOrderFound = await Order.find({ user: req.user.id });

  res.status(StatusCodes.OK).json({
    count: myOrderFound.length,
    success: true,
    data: myOrderFound,
  });
});
