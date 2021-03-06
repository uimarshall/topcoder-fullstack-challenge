const express = require('express');

const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteProductReviews,
} = require('../../controllers/productController');

// Middlewares
const {
  isAuthenticated,
  isAuthorizedRoles,
} = require('../../middlewares/auth');

// Create product
router.post(
  '/admin/new',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  createProduct,
);
// Second method
// router.route('/new').post(createProduct);

// Get all products
router.get('/', getAllProducts);

// Get Single Product
router.get('/:productId', getSingleProduct);
// Update Product
router.put(
  '/admin/:productId',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  updateProduct,
);
// Delete Product
router.delete(
  '/admin/:productId',
  isAuthenticated,
  isAuthorizedRoles('admin'),
  deleteProduct,
);

// Update Product with Reviews
router.put('/review', isAuthenticated, createProductReview);
// Get Product Reviews
router.get('/reviews/:id', isAuthenticated, getProductReviews);
// Delete Product Reviews
router.delete('/reviews', isAuthenticated, deleteProductReviews);

module.exports = router;
