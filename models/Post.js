const mongoose = require("mongoose")
const { string } = require("zod")

const postSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Creator"
    },
    content:{
        type:string,
        
    },
    image:{
        type:string
        
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]
})

const post = mongoose.model("Post", postSchema)