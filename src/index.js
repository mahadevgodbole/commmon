// export * from "./errors/bad-request-error";
// export * from "./errors/custom-error";
// export * from "./errors/database-connection-errors";
// export * from "./errors/not-authorized-error";
// export * from "./errors/not-found-error";
// export * from "./errors/request-validation-errors";



// export * from "./middleware/currentuser";
// export * from "./middleware/error-handler";
// export * from "./middleware/require-auth";
// export * from "./middleware/validation-request"

// index.js
const {BadRequestError} = require("./errors/bad-request-error");
const {CustomError} = require("./errors/custom-error");
const {DatabaseConnectionError} = require("./errors/database-connection-errors");
const {NotAuthorizedError} = require("./errors/not-authorized-error");
const {NotFoundError} = require("./errors/not-found-error");
const {RequestValidationError} = require("./errors/request-validation-errors");

const {currentUser} = require("./middleware/currentuser");
const {errorHandler} = require("./middleware/error-handler");
const {requireAuth} = require("./middleware/require-auth");
const {validateRequest} = require("./middleware/validation-request");

module.exports = {
  BadRequestError,
  CustomError,
  DatabaseConnectionError,
  NotAuthorizedError,
  NotFoundError,
  RequestValidationError,
  currentUser,
  errorHandler,
  requireAuth,
  validateRequest
};

