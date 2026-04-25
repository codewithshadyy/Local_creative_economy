const express = require("express")
const router = express.Router()

const {protect} = require("../middlewares/protect")
const {createProfile, getMyProfile, getAnyUserProfile} = require("../controllers/profileController")


router.post("/create", protect, createProfile)
router.get("/me",  protect, getMyProfile)
router.get("/:creatorId", protect, getAnyUserProfile)



module.exports = router


