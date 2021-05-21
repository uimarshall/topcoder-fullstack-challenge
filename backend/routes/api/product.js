const express = require('express');

const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require('../../controllers/productController');

// Create product
router.post('/new', createProduct);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', getAllProducts);

module.exports = router;
