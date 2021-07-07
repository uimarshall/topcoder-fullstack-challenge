/* eslint-disable no-console */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors');

// Handle uncaught exceptions error
// process.on('uncaughtException', (err) => {
//   console.log(`ERROR: ${err.stack}`);
//   console.log('Shutting down the server due to uncaughtException');
// });

// Load the environment variables
dotenv.config({ path: 'backend/config/.env' });
const connectDb = require('./config/db');
// Routes

const userAuthRoute = require('./routes/api/userAuth');
const categoryRoute = require('./routes/api/category');
const productRoute = require('./routes/api/product');
const orderRoute = require('./routes/api/order');

// Initialize app
const app = express();

// Connect Db
connectDb();

// Middleware
app.use(morgan('dev'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors()); // to handle request coming frm diff origins e.g.client will make req frm port 3000
app.use(fileUpload());

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Routes Middleware

app.use('/api/v1/users', userAuthRoute);
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1', orderRoute);

// Custom Error Middleware to handle error
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle UnhandledPromiseRejection error
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to UnhandledPromiseRejection');
  server.close(() => {
    process.exit(1);
  });
});
