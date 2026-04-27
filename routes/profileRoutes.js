const express = require("express")
const router = express.Router()

const {protect} = require("../middlewares/protect")
const {createProfile, getMyProfile, getAnyUserProfile, updateProfile, followCreator} = require("../controllers/profileController")


router.post("/create", protect, createProfile)
router.get("/me",  protect, getMyProfile)
router.get("/:creatorId", protect, getAnyUserProfile)
router.put("/update/:id", protect, updateProfile)
router.put("/follow/:id", protect, followCreator)



module.exports = router


