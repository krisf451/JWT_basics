const CustomAPIError = require("../errors/custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
