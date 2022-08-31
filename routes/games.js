const express = require('express')
const router = express.Router()
const { controller } = require('../controllers/game-controller')
const {checkLoggedIn}  = require('../middlewares/authentication')
const {validateSaveScore} = require('../middlewares/validation')

/** @route /api/v3/games */
router.get('/all',  checkLoggedIn, controller.fetchGames)
router.get('/users', checkLoggedIn, controller.fetchUserScores)
router.put('/save', checkLoggedIn, validateSaveScore, controller.saveScore)
module.exports = router

