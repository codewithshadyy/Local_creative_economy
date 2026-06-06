
const express = require("express")
const router = express.Router()
const {protect} = require("../middlewares/protect")
const {getTimeLine} = require("../controllers/tlController")


router.get("/timeline", protect, getTimeLine)


module.exports = router

