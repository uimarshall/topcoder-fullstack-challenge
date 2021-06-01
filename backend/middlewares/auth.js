/* eslint-disable consistent-return */
/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');

// Check if user is authenticated or not
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    return next(
      new ErrorHandler('You need to login first to access this resource.', 401),
    );
  }

  // If token is present, verify/decode the user
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  console.log(`req.user: ${req.user}`);
  next();
});

// Handling user Roles

exports.isAuthorizedRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(
      new ErrorHandler(
        `Your Role (${req.user.role}) is forbidden from accessing this resource!`,
        403,
      ),
    );
  }
  next();
};
