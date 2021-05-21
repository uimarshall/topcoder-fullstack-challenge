const express = require('express');

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require('../../controllers/productController');

// Create product
router.post('/new', createProduct);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', getAllProducts);

// Get Single Product
router.get('/:productId', getSingleProduct);

module.exports = router;
