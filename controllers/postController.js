const express = require("express")

const Post = require("../models/Post")
const creator = require("../models/Creator")

exports.createPost = async (req,res) => {

    try {
        const {content} = req.body

        const post = await Post.create({
            author:req.creator.id,
            content})

        res.status(201).json(post)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
    
}



