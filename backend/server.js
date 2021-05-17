/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
// const connectDb = require('./config/db');

// Load the environment variables
dotenv.config({ path: 'backend/config/.env' });
const connectDb = require('./config/db');
// Initialize app
const app = express();

// Connect Db
connectDb();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); // to handle request coming frm diff origins e.g.client will make req frm port 3000

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode.`,
  );
});
