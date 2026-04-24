const express = require("express")
const router = express.Router()
const {createPost} = require("../controllers/postCreator")
const {protect} = require("../middlewares/protect")

router.post("/create",protect, createPost)



module.exports =router

