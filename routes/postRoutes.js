const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost} = require("../controllers/postController")
const {protect} = require("../middlewares/protect")

router.post("/create",protect, createPost)
router.get("/posts/:id", protect, getSinglePost)
router.get("/posts", protect, getAllPost)



module.exports =router

