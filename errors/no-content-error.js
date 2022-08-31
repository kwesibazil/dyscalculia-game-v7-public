const {StatusCodes} = require('http-status-codes')
const CustomError = require('./custom-error')

class NoContentError extends CustomError {
  constructor(message = 'No files Found'){
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

module.exports = NoContentError



