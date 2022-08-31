const mongoose = require('mongoose')
const Schema  = mongoose.Schema



const DaySchema = new mongoose.Schema({
  scores: [Number],
  day: {
    type: Date,
    default: Date.now
  },
  minutesPlayed: {
    trim: true,
    type: String,
    required: true,
    default: '0 minutes'
  }
})


const StatsSchema = new mongoose.Schema({
  user_id:{ 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },

  totalUsageTime:{
    trim: true,
    type: String,
    required: true,
    default: '0 minutes'
  },
  highScore:{
    type: Number,
    default: 0,
  },

  scores:{
    type: [DaySchema ],
    default: ()=>({})
  },
})


module.exports = mongoose.model('Stats', StatsSchema)