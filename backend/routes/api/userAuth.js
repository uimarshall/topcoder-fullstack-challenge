const express = require('express');

const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
} = require('../../controllers/userAuthController');

const {
  isAuthenticated,
  isAuthorizedRoles,
} = require('../../middlewares/auth');

// Create/Register user
router.post('/register', registerUser);
// Login user
router.post('/login', loginUser);
// Currently Login user-details or profile
router.get('/me', isAuthenticated, getUserProfile);
// Forgot password
router.post('/password/forgot', forgotPassword);
// Reset password
router.put('/password/reset/:token', resetPassword);
// Update password
router.put('/password/update', isAuthenticated, updatePassword);
// Update user profile or details
router.put('/me/update', isAuthenticated, updateProfile);
// Logout user
router.get('/logout', logoutUser);

// Admin routes

// Get all users - only admin can do this
router.get('/admin', isAuthenticated, isAuthorizedRoles('admin'), getAllUsers);
// Get single user details - only admin can do this
router.get(
  '/admin/:id',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  getUserDetails,
);

module.exports = router;
