const express = require('express');

const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../../controllers/userAuthController');

// Create/Register user
router.post('/register', registerUser);
// Login user
router.post('/login', loginUser);
// Login user
router.get('/logout', logoutUser);

module.exports = router;
