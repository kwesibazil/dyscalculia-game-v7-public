const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {validPassword} = require('../helpers/password')
const User = require('../models/user-model')

/**
 * @description custom Fields
 * @note passport.js expects username and password fields
 */
const customFields = {
  usernameField: 'email',
  passwordField: 'pwd'
}
/**
 * @description this function is called when the `passport.authenticate()` method is called the user login route.
 * @summary
 *    validates the user using the email and password provided
 *    if successful, attaches a passport property to the req.session object <req.session.passport>
 *    a passport internal callback is then called (`callback(null, user)`) with the user object that was fetch from the database. 
 *    The user object is then serialized with `passport.serializeUser() and added to <req.session.passport> object. 
 *    If fail at any step, returns null, false and an err msg 
 */ 
passport.use(new LocalStrategy(customFields,  function(email, password, callback){
  User.findOne({email: email})
    .then(user => {
      if(!user) return callback(null, false, {msg: 'Incorrect username or password'})
      const isValid = validPassword (password, user.hash)
      if(!isValid) return callback(null, false, {msg: 'Incorrect username or password'})
      return callback(null, user)
    })
    .catch(err => callback(err))
}))

/**
 * This function is used in conjunction with by the `passport.authenticate()` method defined on the registration route 
 * It is called by the internal passport function defined as callback function in the above ^^ passport.use(new LocalStrategy) function
 * Serializing a user determines which data of the user object should be stored in the session, in ths case the user id. 
 * When we serialize a user, Passport takes that user id and stores it internally on req.session.passport 
 */
passport.serializeUser((user, callback) => {
  callback(null, user.id)
})




/**
 * This function is used in conjunction with the `server.use(passport.session())` middleware
 * The deserializeUser() function uses the id to look up the User by the given ID in the database and return it
 */
passport.deserializeUser((userID, callback) => { 
  User.lastLogin(userID, (err, user) =>{
    if(err) return callback(err, null)

    User.findById(userID)
      .then(user => callback(null, user))
      .catch(err => callback(err))
  })
})


// passport.deserializeUser((userID, callback) => {
//   User.findById(userID)
//     .then(user => callback(null, user))
//     .catch(err => callback(err))
// })


