/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');
const Product = require('../models/Product');
const { errorHandler } = require('../utils/dbErrorHandler');
const StatusText = require('../lib/constants/constants');

const { ERROR, FAIL, SUCCESS } = StatusText;
const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// @desc: Create a new product/device
// @route: /api/v1/products/new
// @access: protected
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    const productCreated = await newProduct.save();
    return res.status(StatusCodes.CREATED).json({
      data: productCreated,
      message: SUCCESS,
    });
  } catch (error) {
    if (error) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: getReasonPhrase(StatusCodes.FORBIDDEN),
        status: FAIL,
      });
    }
  }
};
