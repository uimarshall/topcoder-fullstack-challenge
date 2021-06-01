const express = require('express');

const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require('../../controllers/userAuthController');

// Create/Register user
router.post('/register', registerUser);
// Login user
router.post('/login', loginUser);
// Login user
router.post('/password/forgot', forgotPassword);
// Login user
router.get('/logout', logoutUser);

module.exports = router;
