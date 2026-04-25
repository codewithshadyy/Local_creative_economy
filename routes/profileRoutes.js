const express = require("express")
const router = express.Router()

const {protect} = require("../middlewares/protect")
const {createProfile} = require("../controllers/profileController")


router.post("/create/profile", protect, createProfile)


