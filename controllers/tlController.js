const Creator = require("../models/Creator")
const Post  = require("../models/Post")

exports.getTimeLine = async (req, res) => {

    try {


        const page = parseInt(req.params.page) || 0
        const limit = 5
        const currentCreator = await Creator.findById(req.creator.id)

        const users = [...currentCreator.following, req.creator.id]

        const posts = await Post.find({
            author:{$in:users} 
        })
        .populate("author", "username")
        .populate("replies.user", "username")
        .populate("likes", "username")
        .sort({ createdAt: -1 })
        .skip(page * limit)
        .limit(limit) 

        res.json(posts)
        
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}