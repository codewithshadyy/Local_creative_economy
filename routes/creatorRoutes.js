const express = require("express")
const router = express.Router()
const {register, login} = require("../controllers/creatorController")


router.post("/creator/register", register)
router.post("/creator/login", login)



module.exports = router
