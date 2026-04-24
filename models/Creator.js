
const mongoose = require("mongoose")
const validator  = require("validator.js")
const crypto = require("crypto")


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
        
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },

    password:{
        type:String,
        required:true,
        
    },
    profilePicture: { 
        type: String,
         default: "" 
        },
    followers:[
         {type: mongoose.Schema.Types.ObjectId, ref: "Creator" }
    ],

    following: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Creator" }
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
   }    


})

creatorSchema.methods.getResetPasswordToken = () => {
     const resetToken = crypto.randomBytes(20).toString("hex")

    
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

    return resetToken
}







const creator = mongoose.model("Creator", creatorSchema)

module.exports = creator