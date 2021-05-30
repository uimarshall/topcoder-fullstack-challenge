/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  // Search thru a specified keyword in the query string (e.g. ?name=laptop)

  search(query) {
    const keyword = this.queryStr.keyword
      ? {
        // if a keyword exists, search it thru this regex.
        name: {
          $regex: this.queryStr.keyword,
          $options: 'i',
        },
      }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    console.log(queryCopy);
    // Removing fields from the query,bc this fields are not in our db schema
    const removeFields = ['keyword', 'limit', 'page'];
    removeFields.forEach((elem) => delete queryCopy[elem]);

    // Advance filters for price, ratings etc.
    let queryStr = JSON.stringify(queryCopy); // convert to object
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    console.log(queryCopy);
    console.log(queryStr);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}

module.exports = APIFeatures;
