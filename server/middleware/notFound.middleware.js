const createError = require("http-errors");

function NotFound(req, res, next) {
  next(createError(404));
}

module.exports = NotFound;
