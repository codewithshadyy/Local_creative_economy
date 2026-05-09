const express = require("express")
const router = express.Router()
const loginLimiter = require("../security/loginRateLimit")
const {register, login, refresh, findCreators} = require("../controllers/creatorController")
const {protect} = require("../middlewares/protect")



router.post("/creator/register", register)
router.post("/creator/login", loginLimiter, login)
router.get("/creators",protect, findCreators)
router.post("/refresh",  refresh)


module.exports = router
