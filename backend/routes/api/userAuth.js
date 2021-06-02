const express = require('express');

const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} = require('../../controllers/userAuthController');

// Create/Register user
router.post('/register', registerUser);
// Login user
router.post('/login', loginUser);
// Forgot password
router.post('/password/forgot', forgotPassword);
// Reset password
router.put('/password/reset/:token', resetPassword);
// Login user
router.get('/logout', logoutUser);

module.exports = router;
