

const Profile = require("../models/profile")


exports.createProfile = async (req,res) => {
    try {
        const existing = await Profile.findOne({creator:req.creator.id})

        if(existing){
            res.status(400).json({message:"Ooops Profile xists"})
        }
        const profile = await Profile.create({
            creator:req.creator.id,
            bio:req.body.bio || "",
            profilePic:req.body.profilePic || ""
            

        })

        res.status(201).json(profile)
        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }
    
}


exports.getMyProfile = async (req,res) => {
    try {
        const profile  = await Profile.findOne({creator:req.creator.id})
                         .populate("creator", "username email followers")
                         .populate("posts", "author content replies likes")

        if(!profile){
            res.status(404).json({"message":"Profile does not exists"})
        }
        
        res.status(201).json(profile)
        
    } catch (error) {

        res.status(500).json({message:errorMonitor.message})
        
    }
    
}

exports.getAnyUserProfile = async (req,res) => {

    try {
        const userProfile = await Profile.findById(req.params.id)

        if(!userProfile){
            return res.status(404).json({"message":"User id not found"})
        }

        res.status(200).json(userProfile)
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}