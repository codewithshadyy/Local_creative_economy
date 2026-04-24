const express = require(express)
const bcrypt = require("bcrypt")
const Creator = require("../models/Creator")

exports.register = async (req, res) => {

    try {
        const {username, email, password} = req.body;
        hashedPassword  = await bcrypt.hash(password, 10)
        const creator = await Creator.create({
            username,
            email,
            password:hashedPassword
        })
        creator.save()

        res.status(201).json({"message":`${creator.username} created successfully`})


        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
    
}