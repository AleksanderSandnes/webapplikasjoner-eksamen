export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // events?price[gt]=? events?active=true
  filter() {
    const query = { ...this.queryStr };
    const removeFields = ['sort', 'q', 'fields', 'page', 'limit'];
    removeFields.forEach((el) => delete query[el]);
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  // Sort QueryObject (Event.find()) [{...}, {...}, {...}]
  // events?sort=-createdAt
  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(',').join(' ');
      this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-updated');
    }
    return this;
  }

  // events?q=string
  searchByQuery() {
    if (this.queryStr.q) {
      const term = this.queryStr.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${term}"` } });
    }
    return this;
  }

  // events?fields=?,?
  limitFields() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  // events?limit=2&page=4
  // limit => how to group events
  // page => what "group-selection" to return
  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 1;
    const limit = parseInt(this.queryStr.limit, 10) || 10;
    const skipResults = (page - 1) * limit;
    this.query = this.query.skip(skipResults).limit(limit);
    return this;
  }
}
