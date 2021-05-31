const express = require('express');

const router = express.Router();

const { registerUser } = require('../../controllers/userAuthController');

// Create user
router.post('/register', registerUser);

module.exports = router;
