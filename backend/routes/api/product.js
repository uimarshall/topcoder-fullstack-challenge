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
router.post('/admin/new', createProduct);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', isAuthenticated, getAllProducts);

// Get Single Product
router.get('/:productId', getSingleProduct);
// Update Product
router.put('/admin/:productId', updateProduct);
// Delete Product
router.delete('/admin/:productId', deleteProduct);

module.exports = router;
