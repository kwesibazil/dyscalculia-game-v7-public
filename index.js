require('dotenv').config()
require('express-async-errors')

const cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan')
const express = require('express')
const passport = require('passport')
const compression = require('compression');
const session = require('express-session')
const {corsOptions} = require('./config/cors.js')
const {sessionOptions} = require('./config/session')


//SERVER
const server = express()

//global middleware
// server.use(helmet({
//     contentSecurityPolicy:{

//       directives: {       
//         defaultSrc: ["'self'"],
//         styleSrc: ["'self'"],
//         imgSrc: 
//         [
//           "'self'", 
//           "data:",
//           "http://drive.google.com/uc?export=view&id=1UcULNan-3TcEj1pVGJlYtCffejkp4t7O",
//           "http://drive.google.com/uc?export=view&id=1uTX2xlW_tNGql7EIIJGLZSLtYKMyXTf1"
//         ],
//         scriptSrc: 
//         [
//           "'self'", 
//           'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
//           'https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.10/purify.min.js',
//           'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.core.min.js',
//           'https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js' 
//         ],
//         mediaSrc:["'self'",  "data:"]
//       }
//     }
// }));

server.use(compression());
server.use(express.json())
server.use(cors(corsOptions))
//server.use(morgan(':date[web'))
server.use(session(sessionOptions))

//passport setup
require('./config/passport')        //must come after session setup, since Passport relies on the `express-session` 
server.use(passport.initialize())   //on each request, checks if req.session.passport.user object exist, then save it to internal Passport method for later.
server.use(passport.session())      //uses the user property found on req.session.passport.user to re-initialize user via the passport.deserializeUser() 
                                    //then assigned the user object to the `req` object` to be can be accessed within the route 

//routes
server.use('/api/v3/auth', require('./routes/auth'))
server.use('/api/v3/game', require('./routes/games'))


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(__dirname + '/public/'));
  server.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//404 Error && error handling
server.use(require('./middlewares/not-found'))
server.use(require('./middlewares/error-handler'))


//server listening
server.listen(process.env.PORT, [process.env.IP_ADDRESS, 'localhost'], err =>{
    if(err)console.log(`Internal Server Error ${err.message}`)   
    console.log(`\nServer running on ${process.env.PORT}`)
})
