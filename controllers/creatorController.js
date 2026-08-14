const express = require("express")
const bcrypt = require("bcrypt")
const Creator = require("../models/Creator")
const { generateToken, generateRefreshToken} = require("../middlewares/tokenGenerator")


exports.register = async (req, res) => {

    try {
        const {username, email, password} = req.body;

        creatorExists = await Creator.findOne({
            $or:[{email}, {username}]
        })

        if(creatorExists){
            return res.status(400).json({message:"Oops try another email,looks llike the one provided has been taken"})
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
        const accessToken = await generateToken(creator)
        const refreshToken = await generateRefreshToken(creator)

        creator.save()

        res.cookie("refreshToken", refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:"Strict"
        })
        

        return res.status(200).json({
            message:`welcome back ${creator.username}`,
            accessToken,
            refreshToken,
            creator: {
            id:creator._id,
            username:creator.username,
            email:creator.email

            }
            


        })
            
        
        
    } catch (error) {
         console.log(error)
        return res.status(500).json({error:error.message})
       
        
    }
    
}



exports.refresh = async (req,res) => {

    try {
        const token = req.cookies.refereshToken

        if(!token){
            res.status(401).json({message:"Uauthorzed"})
        }

        const creator = await Creator.findOne({
            refreshToken:token
        })

        if(!creator){
            res.status(403).json({message:"Forbidden"})
        }

        jwt.verify(
            token,
            process.env.REFRESH_SECRET,
            (err,data) =>{
                if(err){
                    res.status(403).json({message:"Forbidden"})
                }

                const accessToken = generateToken(creator)
                res.json(accessToken)
            }
        )




        
    } catch (error) {
        res.status(500).json({message:error.message})
        
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




