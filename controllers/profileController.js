

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


exports.getProfile = async (req,res) => {
    try {
        const profile  = await Profile.findOne({creator:req.creator.id})
                         .populate("creator", "username email")
                         .populate("posts")

        if(!profile){
            res.status(404).json({"message":"Profile does not exists"})
        }
        
        res.status(201).json(profile)
        
    } catch (error) {

        res.status(500).json({message:errorMonitor.message})
        
    }
    
}