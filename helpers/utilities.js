const { NoContentError } = require("../errors")

const isEmpty = result =>  {
  if (result == null) 
    throw new NoContentError()
  else
    return false
}


const userScores = days =>{
  const temp = []

  days.forEach(day => {
    temp.push({
      date: day.date,
      scores: day.scores, 
    })
  })
  return temp
}


const lastLoginDate = user =>{
  const date =  new Date(user.last_login_date)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return {
    date: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  }
}

const gameAttempt = (today, days) =>{
  let num = null
  const current = `${today.date} ${today.month}, ${today.year}`

  days.forEach(index => {
    if(index.date == current)
      num = index.scores.length
  })

  return num
}



const userData = (user) => {
  const today = lastLoginDate(user)
  const days = userScores(user.gameStats.days)
  return {
    days,
    today,
    attempts: gameAttempt(today, days),
    username: user.email,
    status: user.prognosis,
    highScore: user.gameStats.highScore,
  }

}             


module.exports = {isEmpty, userData }

