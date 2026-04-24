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
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("Post", postSchema)