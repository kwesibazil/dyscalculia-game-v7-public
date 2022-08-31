const Game = require('../models/game-model')
const User = require('../models/user-model')

const {StatusCodes} = require('http-status-codes')
const {isEmpty} = require('../helpers/utilities')
const { findOneAndUpdate } = require('../models/game-model')

const fetchGames = async (req, res) =>{
  const result = await Game.find({}).select(['-_id']).limit()
  if(!isEmpty(result))
    res.status(StatusCodes.OK).json(result)
}


const fetchUserScores = async(req, res) => {
  const result = await User.find().select(['-_id', 'email', 'gameStats'])
  if(!isEmpty(result))

    res.status(StatusCodes.OK).json(result)
}


const saveScore = async(req, res) =>{
  const user = await User.findById(req.user._id)
  if(!isEmpty(user)){
      user.gameStats.totalUsageTime += req.body.minutes
      user.gameStats.highScore = req.body.highScore
      user.gameStats.days = req.body.days
  }
  user.markModified('gameStats')
  user.save()
  res.status(StatusCodes.OK).json({result: 'successfully saved'})

}


const controller = {fetchGames, saveScore, fetchUserScores}
module.exports = {controller}