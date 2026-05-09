
const creator = require("../models/Creator")

exports.isOwner = async (req,res,next) => {

    if(req.creator && req.creator.id){
        next
    }else{
        res.status(400).json({message:"Can't delete this post"})
    }
    
}