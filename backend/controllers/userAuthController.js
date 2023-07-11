/* eslint-disable no-unused-vars */

const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;

/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');
const User = require('../models/User');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const StatusText = require('../lib/constants/constants');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

const { ERROR, FAIL, SUCCESS } = StatusText;
const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// @desc: Register a new user
// @route: /api/v1/users/register
// @access: protected
exports.registerUser = catchAsyncErrors(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.body.avatar, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    avatar: { public_id: result.public_id, url: result.secure_url },
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

// @desc: Forgot Password
// @route: /api/v1/users/password/forgot
// @access: protected

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const userFound = await User.findOne({ email });
  if (!userFound) {
    return next(new ErrorHandler('User with this email not found', 404));
  }
  // Get reset token
  const resetToken = userFound.getResetPasswordToken();

  await userFound.save({ validateBeforeSave: false });

  // Create reset password url
  // req.protocol=https or http
  /* const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/password/reset/${resetToken}`; */

  const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  // Message to user
  const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it!`;

  try {
    await sendEmail({
      email: userFound.email,
      subject: 'Quint Password Recovery',
      message,
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: `Email sent to: ${userFound.email}`,
    });
  } catch (error) {
    userFound.resetPasswordToken = undefined;
    userFound.resetPasswordExpire = undefined;
    // We cannot save to db if error
    await userFound.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// @desc: Password Reset
// @route: /api/v1/users/password/reset/:token
// @access: protected

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Hash url token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  // Compare the hashed token to the one stored in the Db
  const userFound = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!userFound) {
    return next(
      new ErrorHandler('Password reset token is invalid or has expired', 400),
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler('Password does not match!', 400));
  }

  //  If user found - Setup new password
  userFound.password = req.body.password;
  // Destroy the token
  userFound.resetPasswordToken = undefined;
  userFound.resetPasswordExpire = undefined;

  await userFound.save();

  // Send token again
  sendToken(userFound, 200, res);
});

// @desc: Get currently loggged in user details
// @route: /api/v1/users/me
// @access: protected

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const userFound = await User.findById(req.user.id);

  res.status(StatusCodes.OK).json({
    success: true,
    data: userFound,
  });
});

// @desc: Update password
// @route: /api/v1/users/password/update
// @access: protected

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const userFound = await User.findById(req.user.id).select('+password');
  // Check previous user password
  const isMatch = await userFound.comparePassword(req.body.oldPassword);
  if (!isMatch) {
    return next(new ErrorHandler('Old Password is incorrect'));
  }
  // Set the new password to what is coming from the req body.
  userFound.password = req.body.password;
  await userFound.save();

  sendToken(userFound, 200, res);
});

// @desc: Update user profile/user-details
// @route: /api/v1/users/me/update
// @access: protected

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const { name, email } = req.body;
  const newUser = { name, email };

  // Update avatar: TODO
  if (req.body.avatar !== '') {
    const userFound = await User.findById(req.user.id);
    const image_id = userFound.avatar.public_id;
    const res = await cloudinary.uploader.destroy(image_id);
  }

  const result = await cloudinary.uploader.upload(req.body.avatar, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });

  newUser.avatar = {
    public_id: result.public_id,
    url: result.url,
  };

  const userFound = await User.findByIdAndUpdate(req.user.id, newUser, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(StatusCodes.OK).json({
    success: true,
  });

  sendToken(userFound, 200, res);
});

// Admin Routes

// @desc: Get all users- Only admin can get all users
// @route: /api/v1/users/admin
// @access: protected

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const usersFound = await User.find();
  res.status(StatusCodes.OK).json({
    count: usersFound.length,
    success: true,
    data: usersFound,
  });
});

// @desc: Get currently loggged in user details
// @route: /api/v1/users/admin/:id
// @access: protected

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const userFound = await User.findById(req.params.id);
  if (!userFound) {
    return next(
      new ErrorHandler(`User is not found with this id: ${req.params.id}`),
    );
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: userFound,
  });
});

// @desc: Update user profile/user-details
// @route: /api/v1/users/admin/update/:id
// @access: protected

exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
  const { name, email, role } = req.body;
  const newUserData = { name, email, role };

  const userFound = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(StatusCodes.OK).json({
    success: true,
  });
});

// @desc: Delete user
// @route: /api/v1/users/admin/:id
// @access: protected

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const userFound = await User.findById(req.params.id);
  if (!userFound) {
    return next(
      new ErrorHandler(`User is not found with this id: ${req.params.id}`),
    );
  }

  // Remove avatar from cloudinary: TODO
  await userFound.remove();

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User deleted successfully!',
  });
});
