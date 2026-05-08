const express = require("express")
const bcrypt = require("bcrypt")
const Creator = require("../models/Creator")
const generateToken = require("../middlewares/tokenGenerator")

exports.register = async (req, res) => {

    try {
        const {username, email, password} = req.body;

        creatorExists = await Creator.findOne({
            $or:[{email}, {username}]
        })

        if(creatorExists){
            return res.status(400).json({message:"Oops tryanother email,looks llike the one provided has been taken"})
        }


        hashedPassword  = await bcrypt.hash(password, 10)
        const creator = await Creator.create({
            username,
            email,
            password:hashedPassword
        })


        const token = generateToken(creator)
        

        res.status(201).json({
            message:`${creator.email} created successfully`,
            token,
            creator:{
                id:creator._id,
                username:creator.username,
                email:creator.email,


            }
        })


        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}



// user login endpoint

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body

        const creator = await Creator.findOne({username})
        if(!creator){
            return res.status(404).json({message:"Creator not Found"})
        }
        const passwordMatch = await bcrypt.compare(password, creator.password)

        if(!passwordMatch){
             return res.status(400).json({messAGE:"INVALID CREDENTIALS"})
        } 
        const token = await generateToken(creator)
        

        return res.status(200).json({
            message:`welcome back ${creator.username}`,
            token,
            creator: {
            id:creator._id,
            username:creator.username,
            email:creator.email

            }
            


        })
            
        
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
    
}

exports.findCreators = async (req, res) => {

    try {
        const creators = await Creator.find()
        .populate("username" ,"email")
        .populate("followers", "username")
        .select("-password")

        res.status(200).json(creators)
        
    } catch (error) {

         return res.status(500).json({error:error.message})

        
    }
    
}




