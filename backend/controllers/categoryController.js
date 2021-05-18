/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const HttpStatus = require('http-status-codes');
const Category = require('../models/Category');
const { errorHandler } = require('../utils/dbErrorHandler');
const StatusText = require('../lib/constants/constants');

const { ERROR, FAIL, SUCCESS } = StatusText;
const {
  ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode,
} = HttpStatus;

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const newCategory = await new Category(req.body);
    const catgoryCreated = await newCategory.save();

    return res.status(StatusCodes.CREATED).json({
      data: catgoryCreated,
      message: SUCCESS,
    });
  } catch (err) {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: errorHandler(err),
        status: FAIL,
      });
    }
  }
};
