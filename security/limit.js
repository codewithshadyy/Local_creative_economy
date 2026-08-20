const limit = require("express-rate-limit")


const limitApplication = limit({
    windowMs:15 * 60 * 1000, 
    max:5,
    message: { error: 'Too many requests', retryAfter: '15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
})


module.exports = limitApplication
