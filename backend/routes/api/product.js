const express = require('express');

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../../controllers/productController');

// Middlewares
const { isAuthenticated } = require('../../middlewares/auth');

// Create product
router.post('/admin/new', isAuthenticated, createProduct);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', getAllProducts);

// Get Single Product
router.get('/:productId', getSingleProduct);
// Update Product
router.put('/admin/:productId', isAuthenticated, updateProduct);
// Delete Product
router.delete('/admin/:productId', isAuthenticated, deleteProduct);

module.exports = router;
