/* eslint-disable func-names */
/* eslint-disable  no-underscore-dangle */

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const validator = require('validator');

const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    maxlength: [32, 'Your name must not exceed 32 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password must be at least 6 characters'],
    select: false, // Don't display the password along the user info
  },

  // Store avatar info in cloudinary
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    //   Roles will either be admin or regular user, 'user' for regular user,for validation
    type: String,
    default: 'user',
  },
  createdAt: { type: Date, default: Date.now },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypt password before saving user to database
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
UserSchema.methods.comparePassword = async function (currEnteredPassword) {
  const passwordMatch = await bcrypt.compare(
    currEnteredPassword,
    this.password,
  );
  return passwordMatch;
};

// Return JWT token
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });
};

module.exports = mongoose.model('User', UserSchema);
