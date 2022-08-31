const express = require('express')
const router = express.Router()
const passport = require('passport')

//middleware
const {validateRegistration, validateLogin} = require('../middlewares/validation')
const {checkLoggedIn}  = require('../middlewares/authentication')
const controller = require('../controllers/auth-controller')


/** @router {api/v3/auth} */
router.get('/login-status', controller.loginStatus)
router.get('/login-success', controller.loginSuccess)
router.get('/login-failure', controller.loginFailure)
router.get('/logout', checkLoggedIn, controller.logout)
router.post('/register', validateRegistration, controller.register)
router.get('/privilege', checkLoggedIn, controller.adminStatus)
router.post('/login', validateLogin,  passport.authenticate('local', { failureRedirect: 'login-failure', successRedirect: 'login-success'}))

module.exports = router