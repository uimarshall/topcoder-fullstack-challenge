const express = require('express');

const router = express.Router();

const { createProduct } = require('../../controllers/productController');

router.post('/new', createProduct);
// Second method
// router.route('/new').post(createProduct);

module.exports = router;
