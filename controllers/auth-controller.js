const User = require('../models/user-model')
const {StatusCodes} = require('http-status-codes')
const {genPassword}  = require('../helpers/password.js')
const {userData} = require('../helpers/utilities')
const { UnauthorizedError, ForbiddenError} = require('../errors')

const loginFailure = (req, res) =>{
  throw new ForbiddenError('Incorrect email or password')
}

const loginSuccess = async (req, res) => {
  res.status(StatusCodes.OK).json(userData(req.user))
}

const loginStatus = (req, res) =>{
  if(req.isAuthenticated) res.status(StatusCodes.OK).json({isAuthenticated: req.isAuthenticated()})
  else throw new UnauthorizedError('user not login')
}


const adminStatus = (req, res) =>{
  if(req.isAuthenticated) res.status(StatusCodes.OK).json((req.user.userRole == 'admin') ? true: false)
  else throw new UnauthorizedError('user not login')
}


const logout = (req, res) =>{
  try{
    req.session.destroy()
    res.status(StatusCodes.OK).json({'msg': 'logout successful'})
  }catch(err){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err: "User logout Failed"})
  }
}


const register = async (req, res) =>{
  const hash = await genPassword(req.body.pwd)
  const newUser = new User({
    email: req.body.email,
    hash: hash
  })
  newUser.save()
    .then(_ => res.status(StatusCodes.CREATED).json({msg: 'registration success'}))
    .catch(err => res.status(StatusCodes.CONFLICT).json({err: 'sorry, user already exist'}))
}



const controller = {register, loginFailure, loginSuccess, loginStatus, logout, adminStatus}
module.exports = controller
