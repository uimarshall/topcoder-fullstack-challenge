const express = require('express');

const router = express.Router();

const { createCategory } = require('../../controllers/categoryController');

// Create category
router.post('/create', createCategory);

module.exports = router;
