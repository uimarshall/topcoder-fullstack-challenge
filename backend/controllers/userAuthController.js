/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const StatusText = require('../lib/constants/constants');
const sendToken = require('../utils/jwtToken');

const { ERROR, FAIL, SUCCESS } = StatusText;
const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// @desc: Register a new user
// @route: /api/v1/users/register
// @access: protected
exports.registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    avatar: { public_id: 'https/avatar.png', url: 'https/avatar' },
  });

  sendToken(newUser, 200, res);
  // let token = newUser.getJwtToken();
  // token = `Bearer ${token}`;

  // res.status(StatusCodes.CREATED).json({
  //   // data: newUser,
  //   message: SUCCESS,
  //   token,
  // });
});

// @desc: Login a user
// @route: /api/v1/users/login
// @access: protected

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // Check if email and password is entered in by user
  if (!email || !password) {
    return next(new ErrorHandler('Please enter email and password', 400));
  }

  // Find user in database
  const userFound = await User.findOne({ email }).select('+password');
  if (!userFound) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  // Check if password is correct or not
  const isPasswordMatched = await userFound.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  sendToken(userFound, 200, res);

  // let token = userFound.getJwtToken();
  // token = `Bearer ${token}`;
  // const { _id, name, role } = userFound;

  // return res.status(StatusCodes.OK).json({
  //   message: SUCCESS,
  //   token,
  //   userFound: {
  //     _id,
  //     email,
  //     name,
  //     role,
  //   },
  // });
});

// @desc: Logout a user
// @route: /api/v1/users/logout
// @access: protected

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  // To logout is to clear the cookie stored during login/sign up,
  // hence set token to 'null' and expires it immediately with Date.now()
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Logged out successfully',
  });
});
