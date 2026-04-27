const express = require("express")

const Post = require("../models/Post")
const creator = require("../models/Creator")
const Profile = require("../models/Post")


// creating post route
exports.createPost = async (req,res) => {

    try {
        const {content} = req.body

        const post = await Post.create({
            author:req.creator.id,
            content})

        await Profile.findOneAndUpdate(
            {creator:req.creator.id},
            {$push:{posts:post._id}}
        )    

        res.status(201).json(post)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
    
}


// getting single post tied to username

exports.getSinglePost = async (req,res) => {

    try {

        const postId = req.params.postId
        const post = await Post.findOne({post:postId})
        .populate("author", "username")
        .populate("replies.user", "username")
        
        if(!post){
            return res.status(404).json({message:"Post not Found"})

        }

        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}


// getting all posts tied to their usernames

exports.getAllPost = async (req,res) => {

    try {
        const posts = await Post.find()
        .populate("author", "username")
        .populate("replies.user", "username")

        res.status(200).json(posts)
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}


// updating post

exports.updatePost = async (req,res) => {

    try {
        const postId = req.params.postId
        const post = await Post.findOne({post:postId})

        if(!post){
            res.status(404).json({mesage:"post not found"})
        }
     post.author = req.creator.id
     post.content = req.body.content || ""
      await  post.save()
        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json({message:error.message})

        
    }
    
}


// /delete post endpoint
exports.deletePost = async (req,res) => {

    try {
        
        const post = await Post.findByIdAndDelete(req.params.id)

        if(!post){
            res.status(404).json({message:"Post not found"})

        }else{
            if(!req.creator.id){
                res.status(400).json({message:"You are not a owner to this post"})
            }

            res.status(200).json({message:"Post deleted"})
        }
        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }
    
}

// like post
exports.likePost = async (req,res) => {
    try {
        const post =  await Post.findById(req.params.id)

        if(!post){
               return res.status(404).json({ message: "Post not found" })
        }

        const creatorId = req.creator.id
        const isLiked = post.likes.includes(creatorId)

        
        if(isLiked){

            // unlike
            post.likes =post.likes.filter((id) => id.toString() !==creatorId)
        } else{

            // like
            post.likes.push(creatorId)

        }
        await post.save()

          res.json({
            message: isLiked ? "Post unliked" : "Post liked",
            likes: post.likes.length
        })
        
    } catch (error) {

         return res.status(500).json({message:error.message})

        
    }
    
}


// replying to a post

exports.replyPost = async (req,res) => {

    try {

        const post = await Post.findById(req.params.id)
        .populate("replies.user", "username")
        if(!post){
            return res.status(404).json({message:"Ooops Post not Found!!"})
        }

        const reply = {
            user :req.creator.id,
            text :req.body.text

        }
        post.replies.push(post)
        await post.save()
        res.status(201).json(post.replies)
        
    } catch (error) {

         return res.status(500).json({message:error.message})
        
    }
    
}



