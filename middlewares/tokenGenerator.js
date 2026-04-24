const creator = require("../models/Creator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const generateToken = async (creator) => {
    return jwt.sign({id:creator._id, username:creator.username}, process.env.JWT_SECRET, {expiresIn:"7d"})
    
}

module.exports = generateToken