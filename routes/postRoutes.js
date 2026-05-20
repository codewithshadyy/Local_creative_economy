const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost, updatePost, deletePost, replyPost, likePost} = require("../controllers/postController")
const {protect} = require("../middlewares/protect")
const {isOwner} = require("../middlewares/isOwner")
const postLimit = require("../security/postLimit")

router.post("/create",protect, postLimit,createPost)
router.get("/Posts/:id", protect, getSinglePost)
router.get("/Posts", protect, getAllPost)
router.put("/Posts/:id", protect,isOwner,updatePost )
router.delete("/Posts/:id", protect, isOwner,deletePost)
router.post("/reply/:id", protect, replyPost)
router.post("/like/:id", protect, likePost)




module.exports =router

