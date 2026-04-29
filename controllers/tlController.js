
const Creator = require("../models/Creator")
const Post  = require("../models/Post")


exports.getTimeLine = async (req, res) => {

    try {


        const page = parseInt(req.params.page) || 0
        const limit = 20
        const currentCreator = await Creator.findById(req.creator.id).select("following")

        const users = [...currentCreator.following, req.creator.id]

        const posts = await Post.find({
            author:{$in:users} 
        })
       .select("content author likes replies createdAt")
        .populate("author", "username profilePicture")
        .populate("likes", "username")
        .populate("replies.user", "username")
        .sort({ createdAt: -1 })
        .skip(page * limit)
        .limit(limit)
        .lean()

     

        res.json(posts)
        
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}