const {CustomError} = require('../errors')
const {StatusCodes}= require('http-status-codes')

const CustomErrorHandler = (err, req, res, next) => {

  if(err instanceof CustomError)
    return res.status(err.statusCode).json({err: err.message})
    
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err:' Oops, something went wrong Try refreshing the page or feel free to contact us if the problem persists'})
}

module.exports = CustomErrorHandler