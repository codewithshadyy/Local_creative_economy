const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator",
        required: true,
        index:true
    },
    content: {
       type: String,
       required:true
    }
        ,
    image: String,
    likes: [

        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Creator",
            
       }
    
    ],
    replies: [
        {
            
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Creator"
            },
            text: {
                type:String,
                
            },
            createdAt: {
                type: Date,
                default: Date.now,
                index:true
            }
        }
    ]
}, { timestamps: true })



const post = mongoose.model("Post", postSchema)

module.exports = post