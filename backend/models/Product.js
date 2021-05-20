/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: [true, 'Please enter a product name'],
    required: true,
    maxlength: [32, 'Product name must be at least 32 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a product description'],
    maxlength: 2064,
  },
  price: {
    type: Number,
    trim: true,
    required: [true, 'Please enter a product price'],
    maxlength: [5, 'Product price cannot exceed 5 characters'],
    default: 0.0,
  },
  stock: {
    type: Number,
    required: [true, 'Please enter the product stock'],
    maxLength: [5, 'Product stock cannot exceed 5 characters'],
    default: 0,
  },

  seller: {
    type: String,

    required: [true, 'Please enter a product seller'],
    maxlength: 64,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfRatings: {
    type: Number,
    default: 0,
  },
  // We will use cloudinary for storing the images
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      name: {
        required: true,
        type: String,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please select for this product'],

    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Home',
        'Outdoor',
        'Decorations',
      ],
      message: 'Please select the correct product category',
    },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('product', ProductSchema);
