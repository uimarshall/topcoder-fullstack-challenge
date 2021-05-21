const express = require('express');

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require('../../controllers/productController');

// Create product
router.post('/admin/new', createProduct);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', getAllProducts);

// Get Single Product
router.get('/:productId', getSingleProduct);
// Update Product
router.put('/admin/:productId', updateProduct);

module.exports = router;
