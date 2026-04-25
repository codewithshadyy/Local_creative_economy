

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