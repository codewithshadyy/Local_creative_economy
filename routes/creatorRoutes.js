const express = require("express")
const router = express.Router()
const {register} = require("../controllers/creatorController")


router.post("/creator/register", register)



module.exports = router
