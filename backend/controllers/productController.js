/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');
const Product = require('../models/Product');
const ErrorHandler = require('../utils/errorHandler');
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
        return res.status(StatusCodes.NOT_FOUND).json({
          message: getReasonPhrase(StatusCodes.NOT_FOUND),
          status: FAIL,
        });
      }
      return res.status(StatusCodes.OK).json({
        count: productsFound.length,
        data: productsFound,
        message: SUCCESS,
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

// @desc: Get single products - For product details
// @route: /api/v1/products/:productId(This url has a parameter called 'productId')
// @access: public
/* The parameter name(productId) must be consistent with
what is passed into the route(router.get('/:productId', getSingleProduct);)
*/

/* exports.getSingleProduct = async (req, res) => {
  try {
    const singleProductFound = await Product.findById(req.params.productId);

    if (!singleProductFound) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
        status: FAIL,
      });
    }

    res.status(StatusCodes.OK).json({
      data: singleProductFound,
      message: SUCCESS,
    });
  } catch (error) {
    if (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        status: FAIL,
      });
    }
  }
}; */

exports.getSingleProduct = async (req, res, next) => {
  const singleProductFound = await Product.findById(req.params.productId);

  if (!singleProductFound) {
    return next(new ErrorHandler('Product not found!', 404));
  }

  res.status(StatusCodes.OK).json({
    data: singleProductFound,
    message: SUCCESS,
  });
  // } catch (error) {
  //   if (error) {
  //     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //       message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  //       status: FAIL,
  //     });
  //   }
  // }
};

// @desc:Update product
// @route: /api/v1/products/admin/:productId(This url has a parameter called 'productId')
// @access: private

exports.updateProduct = async (req, res) => {
  try {
    let productFound = await Product.findById(req.params.productId);

    if (!productFound) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
        status: FAIL,
      });
    }

    productFound = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      },
    );
    res.status(StatusCodes.OK).json({
      data: productFound,
      message: SUCCESS,
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
// @desc:Delete product
// @route: /api/v1/products/admin/:productId(This url has a parameter called 'productId')
// @access: private

exports.deleteProduct = async (req, res) => {
  try {
    const productFound = await Product.findById(req.params.productId);

    if (!productFound) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
        status: FAIL,
      });
    }

    await productFound.remove();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Device deleted successfully',
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
