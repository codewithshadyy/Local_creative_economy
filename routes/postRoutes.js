const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost, updatePost} = require("../controllers/postController")
const {protect} = require("../middlewares/protect")

router.post("/create",protect, createPost)
router.get("/getPosts/:id", protect, getSinglePost)
router.get("/getPosts", protect, getAllPost)
router.put("/updatePosts/:id", protect,updatePost )



module.exports =router

