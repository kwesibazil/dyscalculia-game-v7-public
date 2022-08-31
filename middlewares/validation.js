const Joi = require('joi')
const {BadRequestError, ForbiddenError} = require('../errors')
const {sanitize} = require('./sanitize')


const validateRegistration = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'email must be a valid email',
      "any.required": "email is required!",
      'string.empty': 'email is not allowed to be empty',
    }),
    pwd: Joi.string().trim().min(8).max(30).regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\s@$!%*#^?&]{8,30}$/).required().messages({
      'string.max': 'Password length must be less than or equal to {{#limit}} characters long',
      'string.min': 'Password length must be at least {{#limit}} characters long',
      'string.empty': 'Password is not allowed to be empty',
      "any.required": "Password is required!",
      'string.pattern.base': 'Password must be 8-30 characters long, with at least one number, one lowercase and one uppercase letter.',
    }),
    userRole: Joi.string().trim().optional().valid('guest', 'admin').messages({
      "any.only": "Invalid input"
    })
  }).error(err => {
    if(err[0].code === 'object.unknown' || err[0].code === 'any.only')
      throw new BadRequestError('Registration Failed, Please Try Again.')
    else
      throw new BadRequestError(err)
  })

  await schema.validateAsync(req.body, {abortEarly: true})
    .then(data => sanitize(data))

  next()
}


const validateLogin = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    pwd: Joi.string().trim().min(8).max(30).regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\s@$!%*#^?&]{8,30}$/).required()
  }).error(_ => {throw new ForbiddenError('Incorrect email or password.')})

  await schema.validateAsync(req.body, {abortEarly: true})
    .then(data => sanitize(data))

  next()
}

const validateSaveScore = async (req, res, next) =>{
  const schema = Joi.object({
    days: Joi.array().items(Joi.object()),
    minutes: Joi.number(),
    highScore:Joi.number()
  })

  await schema.validateAsync(req.body, {abortEarly: true})
    .then(data => sanitize(data))
    .catch(data => res.status(200).json({msg: 'validation failed', data}))

  next()
}


module.exports = {validateRegistration, validateLogin, validateSaveScore }


