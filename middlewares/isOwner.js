
const Creator = require("../models/Creator")
const Post=require("../models/Post")

exports.isOwner = async (req,res,next) => {

   try {

     const creatorId  = req.Creator?.id
    const postOwner = req.Post?.Creator

    if (!creatorId) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    if(postOwner.toString() !== creatorId.toString()){
        return res.status(403).json({ message: "Not allowed to modify this post" });
    }

    next()
    
   } catch (error) {
    res.status(500).json({message:error.message})
    
   }
    
}