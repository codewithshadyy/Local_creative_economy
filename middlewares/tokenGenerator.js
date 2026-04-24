const Creator = require("../models/Creator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const generateToken = async (req, res) => {
    return jwt.sign({id:UserActivation.id}, process.env.SECRET_KEY, {expiresIn:"7d"})
    
}