const corsOptions = {
  credentials: true,
  origin: true, //'http://192.168.0.103:8080',
  methods:  ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Credentials' ],
}

module.exports = {corsOptions}
