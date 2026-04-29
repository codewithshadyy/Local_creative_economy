const Creator = require("../models/Creator")
const Post  = require("../models/Post")

exports.getTimeLine = async (req, res) => {

    try {

        const currentCreator = await Creator.findById(req.creator.id)

        const users = [...currentCreator.following, req.creator.id]

        const posts = await Post.find({
            author:{$in:users} 
        })
         .populate("author", "username")
        .populate("replies.user", "username")
        .populate("likes", "username")
        .sort({ createdAt: -1 })
        .limit(20) 

        res.json(posts)
        
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}