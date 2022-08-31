const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema  = mongoose.Schema


const DailySchema = new mongoose.Schema({
  date: {
    trim: true,
    type: String,
  },
  scores: {
    type: [Number],
  }
},{timestamps:false })


const StatsSchema = new mongoose.Schema({
  totalUsageTime:{
    default: 0,
    type: Number,
    required: true,
  },
  highScore:{
    type: Number,
    default: 0,
  },

  days:{
    type: [DailySchema]
  },
},{_id: false, timestamps:false })


const UserSchema = new mongoose.Schema({
  email:{
    trim: true,
    index:true,
    type: String,
    unique: true,
    required: true
  },
  hash:{
    trim: true,
    type: String,
    minLength: 8,
    required: true
  },
  userRole:{
    trim: true,
    type: String,
    required:true,
    default: 'guest',
    enum: ['guest', 'admin']
  },
  prognosis:{
    trim: true,
    index: true,
    type: String,
    required: true,
    default: 'untested',
    enum: ['Not Dyscalculic', 'Low Dyscalculic', 'Moderate Dyscalculic', 'High Dyscalculic', 'untested'],
  },
  last_login_date: {
    type: Date,
    default: Date.now
  },
  gameStats: {
    type: StatsSchema,
    default: ()=>({})
  },
  
},{timestamps:false, collection: 'users'})


UserSchema.statics.lastLogin= function(id, callback) {
  return this.findByIdAndUpdate(id, { 'last_login_date' : Date.now() }, callback)
};


UserSchema.plugin(uniqueValidator, {message: 'sorry, user already exist.'})

module.exports = mongoose.model('User', UserSchema)