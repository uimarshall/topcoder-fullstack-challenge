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

// @desc: Get All products/devices
// @route: /api/v1/products
// @access: public
exports.getAllProducts = async (req, res) => {
  try {
    await Product.find().exec((err, productsFound) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: getReasonPhrase(StatusCodes.BAD_REQUEST),
          status: FAIL,
        });
      }
      return res.status(StatusCodes.OK).json({
        data: productsFound,
        message: SUCCESS,
        count: productsFound.length,
      });
    });
  } catch (error) {
    if (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        status: FAIL,
      });
    }
  }
};
