const express = require("express")
const router = express.Router()
const loginLimiter = require("../security/loginRateLimit")
const {register, login} = require("../controllers/creatorController")


router.post("/creator/register", register)
router.post("/creator/login", loginLimiter, login)



module.exports = router
