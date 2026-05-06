const limiter  = require("express-rate-limit")


const postLimit = limiter({
    windowMs:15 * 60 * 1000,
    max:20,
    message: { error: 'Posting too fast, slow down' }
})



module.exports = postLimit