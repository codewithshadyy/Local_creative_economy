const bcrypt = require("bcrypt")
const Creator = require("../models/Creator")
const jwt = require("jsonwebtoken")

exports.protect = async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startswith("Bearer")){
        token = req.headers.authorization.split("")[1]
    }

    if(!token){
        res.status(401).json({message:"invalid token"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.creator = await Creator.findById(decoded.id).select("-password")
        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }

    
}