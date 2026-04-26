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

        res.status(200).json(posts)
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}


// updating post

exports.updatePost = async (req,res) => {

    try {

        const post = await Post.findOne({postId:req.params.id})

        if(!post){
            res.status(404).json({mesage:"post not found"})
        }

        post.content = req.body.content || ""
      await  post.save()
        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json({message:error.message})

        
    }
    
}



