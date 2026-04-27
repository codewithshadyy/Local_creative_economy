const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost, updatePost, deletePost, replyPost} = require("../controllers/postController")
const {protect} = require("../middlewares/protect")

router.post("/create",protect, createPost)
router.get("/getPosts/:id", protect, getSinglePost)
router.get("/getPosts", protect, getAllPost)
router.put("/updatePosts/:id", protect,updatePost )
router.delete("/deletePost/:id", protect, deletePost)
router.post("/reply/:id", protect, replyPost)




module.exports =router

