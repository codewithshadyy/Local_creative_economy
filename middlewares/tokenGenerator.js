const creator = require("../models/Creator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const generateToken = async (creator) => {
    return jwt.sign({id:creator_.id}, process.env.SECRET_KEY, {expiresIn:"7d"})
    
}