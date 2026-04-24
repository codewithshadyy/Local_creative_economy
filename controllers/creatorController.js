const express = require("express")
const bcrypt = require("bcrypt")
const Creator = require("../models/Creator")
const tokenGenerator = require("../middlewares/tokenGenerator")

exports.register = async (req, res) => {

    try {
        const {username, email, password} = req.body;

        creatorExists = await Creator.findOne({
            $or:[{email}, {username}]
        })

        if(creatorExists){
            return res.status(400).json({message:`${creatorExists.email} exists`})
        }


        hashedPassword  = await bcrypt.hash(password, 10)
        const creator = await Creator.create({
            username,
            email,
            password:hashedPassword
        })


        const token = tokenGenerator(creator)
        

        res.status(201).json({
            message:`${creator.email} created successfully`,
            token,
            user:{
                id:user._id,
                username:creator.username,
                email:creator.email,


            }
        })


        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}