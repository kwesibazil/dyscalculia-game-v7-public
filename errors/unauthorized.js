const {StatusCodes} = require('http-status-codes')
const CustomError = require('./custom-error')

class UnauthorizedError extends CustomError {
  constructor(message = 'Unauthorized: Access is denied'){
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthorizedError
