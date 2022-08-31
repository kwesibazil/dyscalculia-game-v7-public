const {UnauthorizedError} = require('../errors')

const checkLoggedIn = (req, res, next) =>{
  if(req.isAuthenticated())
    next()
  else
    throw new UnauthorizedError()
}

const checkAdmin = (req, res, next) => {
  if(req.isAuthenticated() && req.user.userRole == 'admin')
    next()
  else 
    throw new UnauthorizedError()
}

module.exports = {checkAdmin,  checkLoggedIn }