
const mongoose = require("mongoose")
const validator  = require("validator.js")
const crypto = require("crypto")


const creatorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    email : {
        type:String,
        required:true,
        unique:true,
        index:true,
        
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },

    password:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        enum :["creator", "admin"],
        default:"creator"
    },



    profilePicture: { 
        type: String,
         default: "" 
        },
    followers:[
         {type: mongoose.Schema.Types.ObjectId, ref: "Creator" }
    ],

    following: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Creator", index:true }
    ],

    isAdmin: { 
        type: Boolean,
         default: false 
        },

    resetPasswordToken: {
            type: String
        },
resetPasswordExpire: {
      type: Date
   },
   refreshToken:String    


}, {timestamps:true})











const creator = mongoose.model("Creator", creatorSchema)

module.exports = creator