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
} = require('../../controllers/userAuthController');

const { isAuthenticated } = require('../../middlewares/auth');

// Create/Register user
router.post('/register', registerUser);
// Login user
router.post('/login', loginUser);
// Currently Login user
router.get('/me', isAuthenticated, getUserProfile);
// Forgot password
router.post('/password/forgot', forgotPassword);
// Reset password
router.put('/password/reset/:token', resetPassword);
// Update password
router.put('/password/update', isAuthenticated, updatePassword);
// Logout user
router.get('/logout', logoutUser);

module.exports = router;
