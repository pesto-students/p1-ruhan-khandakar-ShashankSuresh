/* eslint-disable no-param-reassign */
const { getStartDateEndDateByMonth } = require("../utils/utils");

const getDateFilterByMonth = (queryStr, type) => {
  if (queryStr[type] && Number(queryStr[type])) {
    const { startDate, endDate } = getStartDateEndDateByMonth(+queryStr[type]);
    queryStr[type] = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }
};

/**
 *
 * @param {Model} model
 * @param {String | Model Instance} populate
 * @details pagination, filters
 */
const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  //   loggedIn userId
  const userId = req.user.id;

  // copy query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // create operators ($gt, $lt, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  // Finding Resource
  queryStr = JSON.parse(queryStr);
  queryStr.user = userId;

  // if wealthDate provided and  value is number
  getDateFilterByMonth(queryStr, "wealthDate");
  // if fundDate provided and  value is number
  getDateFilterByMonth(queryStr, "fundDate");
  // if asset createdAt provided and  value is number
  getDateFilterByMonth(queryStr, "createdAt");

  query = model.find(queryStr);

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.replace(/,/g, " ");
    query = query.select(fields);
  }

  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.replace(/,/g, " ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  const results = await query;

  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

module.exports = advancedResults;
