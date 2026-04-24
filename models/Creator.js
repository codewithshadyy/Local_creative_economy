
const mongoose = require("mongoose")
const validator  = require("validator.js")


const creatorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail, "please provide a valid email"],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },

    password:{
        type:String,
        required:true,
        
    },
    profilePicture: { 
        type: String,
         default: "" 
        },
    followers: {
         type: Array,
          default: []
         },
    following: {
         type: Array,
          default: []
         },
    isAdmin: { 
        type: Boolean,
         default: false 
        },


})

const creator = mongoose.model("Creator", creatorSchema)

module.exports = creator