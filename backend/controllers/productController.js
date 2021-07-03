/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const HttpStatus = require('http-status-codes');
const Product = require('../models/Product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const StatusText = require('../lib/constants/constants');

const { ERROR, FAIL, SUCCESS } = StatusText;
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } =
  HttpStatus;

// @desc: Create a new product/device
// @route: /api/v1/products/admin/new
// @access: protected
exports.createProduct = catchAsyncErrors(async (req, res) => {
  // Add the user creating the product to the request body
  req.body.user = req.user.id;
  const newProduct = await new Product(req.body);
  const productCreated = await newProduct.save();
  return res.status(StatusCodes.CREATED).json({
    data: productCreated,
    message: SUCCESS,
  });
});

// exports.createProduct = async (req, res) => {
//   try {
//     const newProduct = await new Product(req.body);
//     const productCreated = await newProduct.save();
//     return res.status(StatusCodes.CREATED).json({
//       data: productCreated,
//       message: SUCCESS,
//     });
//   } catch (error) {
//     if (error) {
//       return res.status(StatusCodes.FORBIDDEN).json({
//         // message: getReasonPhrase(StatusCodes.FORBIDDEN),
//         status: FAIL,
//         message: error,
//       });
//     }
//   }
// };

// @desc: Get All products/devices
// @route: /api/v1/products?keyword=phone
// @access: public
// Product.find() = query
// req.query = queryStr
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHandler('Errorful', 400));
  const resPerPage = 8;
  // Count total number of documents in the Db
  const productsCount = await Product.countDocuments();
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  await apiFeatures.query.exec((err, productsFound) => {
    if (err) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: getReasonPhrase(StatusCodes.NOT_FOUND),
        status: FAIL,
      });
    }
    return res.status(StatusCodes.OK).json({
      count: productsFound.length,
      productsCount,
      data: productsFound,
      message: SUCCESS,
    });
  });
});

// exports.getAllProducts = async (req, res) => {
//   try {
//     await Product.find().exec((err, productsFound) => {
//       if (err) {
//         return res.status(StatusCodes.NOT_FOUND).json({
//           message: getReasonPhrase(StatusCodes.NOT_FOUND),
//           status: FAIL,
//         });
//       }
//       return res.status(StatusCodes.OK).json({
//         count: productsFound.length,
//         data: productsFound,
//         message: SUCCESS,
//       });
//     });
//   } catch (error) {
//     if (error) {
//       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//         message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
//         status: FAIL,
//       });
//     }
//   }
// };

// @desc: Get single products - For product details
// @route: /api/v1/products/:productId(This url has a parameter called 'productId')
// @access: public
/* The parameter name(productId) must be consistent with
what is passed into the route(router.get('/:productId', getSingleProduct);)
*/

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const singleProductFound = await Product.findById(req.params.productId);

  if (!singleProductFound) {
    return next(new ErrorHandler('Product not found!', 404));
  }

  res.status(StatusCodes.OK).json({
    data: singleProductFound,
    message: SUCCESS,
  });
});

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

// @desc:Update product
// @route: /api/v1/products/admin/:productId(This url has a parameter called 'productId')
// @access: private

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let productFound = await Product.findById(req.params.productId);

  if (!productFound) {
    return next(new ErrorHandler('Product not found!', 404));
    // return res.status(StatusCodes.NOT_FOUND).json({
    //   message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
    //   status: FAIL,
    // });
  }

  productFound = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(StatusCodes.OK).json({
    data: productFound,
    message: SUCCESS,
  });
});

// exports.updateProduct = async (req, res) => {
//   try {
//     let productFound = await Product.findById(req.params.productId);

//     if (!productFound) {
//       return res.status(StatusCodes.NOT_FOUND).json({
//         message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
//         status: FAIL,
//       });
//     }

//     productFound = await Product.findByIdAndUpdate(
//       req.params.productId,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       }
//     );
//     res.status(StatusCodes.OK).json({
//       data: productFound,
//       message: SUCCESS,
//     });
//   } catch (error) {
//     if (error) {
//       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//         message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
//         status: FAIL,
//       });
//     }
//   }
// };

// @desc:Delete product
// @route: /api/v1/products/admin/:productId(This url has a parameter called 'productId')
// @access: private

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const productFound = await Product.findById(req.params.productId);

  if (!productFound) {
    return next(new ErrorHandler('Product not found!', 404));
    // return res.status(StatusCodes.NOT_FOUND).json({
    //   message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
    //   status: FAIL,
    // });
  }

  await productFound.remove();
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Device deleted successfully',
  });
});

// @desc:Create product Review
// @route: /api/v1/products/review
// @access: private

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  // If the user has already reviewed product, then update the review.
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    // update numOfReviews
    product.numOfReviews = product.reviews.length;
  }
  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(StatusCodes.OK).json({
    success: true,
  });
});

// @desc:Get product Reviews
// @route: /api/v1/products/reviews/:id
// @access: private

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const productFound = await Product.findById(req.params.id); // pass id in the query str

  res.status(StatusCodes.OK).json({
    success: true,
    reviews: productFound.reviews,
  });
});

// @desc:Delete product Reviews
// @route: /api/v1/products/reviews/:id
// @access: private

exports.deleteProductReviews = catchAsyncErrors(async (req, res, next) => {
  const productFound = await Product.findById(req.query.productId);
  // Filter/return the reviews that we don't want to delete,
  //  i.e. the ones not passed in query string
  const reviews = productFound.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    productFound.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    { new: true, runValidators: true, useFindAndModify: false }
  );
  res.status(StatusCodes.OK).json({
    success: true,
  });
});

// exports.deleteProduct = async (req, res) => {
//   try {
//     const productFound = await Product.findById(req.params.productId);

//     if (!productFound) {
//       return res.status(StatusCodes.NOT_FOUND).json({
//         message: `Product ${getReasonPhrase(StatusCodes.NOT_FOUND)}`,
//         status: FAIL,
//       });
//     }

//     await productFound.remove();
//     res.status(StatusCodes.OK).json({
//       success: true,
//       message: 'Device deleted successfully',
//     });
//   } catch (error) {
//     if (error) {
//       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//         message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
//         status: FAIL,
//       });
//     }
//   }
// };
