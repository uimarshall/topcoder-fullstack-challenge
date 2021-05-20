const dotenv = require('dotenv');

/* eslint-disable no-console */
const Product = require('../models/Product');
const connectDb = require('../config/db');
const products = require('../data/products.json');

// Load the environment variables
dotenv.config({ path: 'backend/config/.env' });

connectDb();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products deleted successfully');
    await Product.insertMany(products);
    console.log('Products added successfully');
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
