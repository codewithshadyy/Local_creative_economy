const express = require("express")
const router = express.Router()

const {protect} = require("../middlewares/protect")
const {createProfile, getProfile} = require("../controllers/profileController")


router.post("/create", protect, createProfile)
router.get("/see",  protect, getProfile)



module.exports = router


