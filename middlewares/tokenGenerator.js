const creator = require("../models/Creator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


exports.generateToken = async (creator) => {
    return jwt.sign(
        {
            id:creator._id,
            role:creator.role,
             username:creator.username
            }, process.env.JWT_SECRET, {expiresIn:"14m"})
    
}

exports.generateRefreshToken = async (creator) => {

    return jwt.sign(
        {id:creator._id}, process.env.REFRESH_SECRET, {expiresIn:"7d"}
    )
}