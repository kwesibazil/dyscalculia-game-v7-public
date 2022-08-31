const bcrypt = require('bcrypt')
const saltRounds = 10

const genPassword = (pwd) => bcrypt.hash(pwd, saltRounds)
const validPassword = (pwd, hash) => bcrypt.compareSync(pwd, hash)      
                                                                                                                                              
module.exports = {genPassword,validPassword}
