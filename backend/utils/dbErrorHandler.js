/* eslint-disable no-restricted-syntax */

/**
 * Get unique error field name
 */
const uniqueMessage = (error) => {
  let output;
  try {
    const fieldName = error.message.substring(
      error.message.lastIndexOf('.$') + 2,
      error.message.lastIndexOf('_1'),
    );
    output = `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
    } already exists`;
  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

/**
 * Get the error message from error object from the <controllers> `~</controllers>a
 */
exports.errorHandler = (error) => {
  let message = '';

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (const errorName in error.errors) {
      if (error.errors[errorName].message) {
        message = error.errors[errorName].message;
      }
    }
  }

  return message;
};
