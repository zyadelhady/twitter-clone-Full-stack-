class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields', 'answered'];
    excludedFields.forEach(el => delete queryObj[el]);

    this.query.find(queryObj);

    return this;
  }

  sort() {
    this.query = this.query.sort('-createdAt');

    return this;
  }

  limitFields() {
    this.query = this.query.select('-__v');

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIFeatures;
