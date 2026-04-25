const express = require("express")

const Post = require("../models/Post")
const creator = require("../models/Creator")
const Profile = require("../models/Post")

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



