const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost, updatePost, deletePost, replyPost, likePost} = require("../controllers/postController")
const {protect} = require("../middlewares/protect")
const postLimit = require("../security/postLimit")

router.post("/create",protect, postLimit,createPost)
router.get("/getPosts/:id", protect, getSinglePost)
router.get("/getPosts", protect, getAllPost)
router.put("/updatePosts/:id", protect,updatePost )
router.delete("/deletePost/:id", protect, deletePost)
router.post("/reply/:id", protect, replyPost)
router.post("/like/:id", protect, likePost)




module.exports =router

