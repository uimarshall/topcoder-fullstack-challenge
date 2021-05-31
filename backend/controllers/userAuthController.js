/* eslint-disable no-unused-vars */
const HttpStatus = require('http-status-codes');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const StatusText = require('../lib/constants/constants');

const { ERROR, FAIL, SUCCESS } = StatusText;
const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// @desc: Register a new user
// @route: /api/v1/products/new
// @access: protected
exports.registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    avatar: { public_id: 'https/avatar.png', url: 'https/avatar' },
  });
  const token = newUser.getJwtToken();
  return res.status(StatusCodes.CREATED).json({
    // data: newUser,
    message: SUCCESS,
    token,
  });
});
