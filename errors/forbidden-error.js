const {StatusCodes} = require('http-status-codes')
const CustomError = require('./custom-error')

class ForbiddenError extends CustomError {
  constructor(message = 'Access is denied'){
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

module.exports = ForbiddenError


