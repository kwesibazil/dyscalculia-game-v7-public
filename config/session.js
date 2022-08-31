require('dotenv').config()
const MongoStore = require('connect-mongo')
const {connect} = require('../config/connect')

const sessionStore = MongoStore.create({
  clientPromise: connect,
  stringify: true,
  dbName: process.env.DATABASE,
  collectionName: 'sessions',
  ttl: 24 * 60 * 60,          //Each time an user interacts with the server, its session expiration date is refreshed
  touchAfter: 24 * 3600,     //updated only one time in a period of 24 hours, does not matter how many request's are made (with the exception of those that change something on the session data)
  autoRemove: 'disabled',   // set to disable in production environnement
  //autoRemoveInterval: 10,    //remove in  production environnement
  crypto: {secret: process.env.STORE}
})


const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    sameSite: "lax",                //research more into this   
    secure: false ,                 //change in production to true (https)
    maxAge: 1000 * 60 * 60  * 24    //1hrs  (1000mil =  1sec  * 60 = 1min * 60 = 24hrs)  current = 24hrs
  }
}

module.exports = {sessionOptions}


