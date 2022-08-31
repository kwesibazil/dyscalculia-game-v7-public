const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const GameSchema = new mongoose.Schema({
  title: {
    trim: true,
    index: true, 
    type: String,
    unique: true,
    required: true
  },
  urlToImg: {
    trim: true,
    type: String,
    required: true,
  },
  available:{
    type: Boolean,
    default: false
  }
},{timestamps: true, collection: "games"})

GameSchema.plugin(uniqueValidator)
module.exports =  mongoose.model('Game', GameSchema)