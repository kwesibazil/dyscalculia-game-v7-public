const BadRequestError = require('./bad-request')
const ConflictError = require('./conflict-error')
const ConnectError = require('./connect-error')
const CustomError = require('./custom-error')
const ForbiddenError = require('./forbidden-error')
const NoContentError = require('./no-content-error')
const NotFoundError = require('./not-found')
const UnauthorizedError = require('./unauthorized')

module.exports = {
  BadRequestError,
  ConflictError,
  ConnectError,
  CustomError,
  ForbiddenError,
  NotFoundError,
  NoContentError,
  UnauthorizedError
}