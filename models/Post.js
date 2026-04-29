const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator",
        required: true
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
            ref: "Creator"
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
                default: Date.now
            }
        }
    ]
}, { timestamps: true })

postSchema.index({ author: 1, createdAt: -1 })
postSchema.index({ createdAt: -1 })

const post = mongoose.model("Post", postSchema)

module.exports = post