

const Profile = require("../models/profile")
const Post = require("../models/Post")
const mongoose = require("mongoose")
const Creator = require("../models/Creator")



// profile creation
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

// getting my profile
exports.getMyProfile = async (req,res) => {
    try {
        const profile  = await Profile.findOne({creator:req.creator.id})
                         .populate("creator", "username email followers")
                         .populate("posts")

        if(!profile){
            res.status(404).json({"message":"Profile does not exists"})
        }

        
       
        res.status(201).json(profile)

        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}


// getting anyusre profile
exports.getAnyUserProfile = async (req,res) => {

    try {

        const creatorId = req.params.creatorId
      

        const profile = await Profile.findOne({creator:creatorId})
        .populate("creator", "username email")
        .populate("posts", "[]")

        if(!profile){
            return res.status(404).json({message: "Profile not found"})
        }

        const posts = await Post.find({
            author: new mongoose.Types.ObjectId(creatorId)
        }).sort({ createdAt: -1 })

     


        res.status(200).json({
            profile,
            posts
        })
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
    
}


// updating my profile
exports.updateProfile = async (req,res) => {

    try {

        const profile = await Profile.findOne({creator:req.params.id})

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" })
        }

        profile.bio = req.body.bio || profile.bio
        profile.profilePic = req.body.profilePic || profile.profilePic

        await profile.save()

        res.json(profile)
        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }
    
}


// mutual build
exports.followCreator = async (req,res) => {

    
    try {

        const creatorToFollow = await Creator.findById(req.params.id)
        const currentCreator = await Creator.findById(req.creator.id)

        if(!creatorToFollow){
             return res.status(404).json({ message: "User not found" })
        }

        if(!currentCreator){
              return res.status(400).json({ message: "You can't follow yourself" })
        }

        const isFollowing = currentCreator.following.includes(req.params.id)

        if(isFollowing){
            //unfollow
            currentCreator.following = currentCreator.filter((id) => id.tostring() !== req.params.id)
            creatorToFollow.followers = creatorToFollow.filter((id) => id.tostring()!==req.creator.id)

             await currentCreator.save()
            await creatorToFollowToFollow.save()

            return res.json({ message: "Unfollowed user" })
        }else{
            // follow
            currentCreator.following.push(req.params.id)
            creatorToFollow.followers.push(req.creator.id)

               await currentCreator.save()
            await creatorToFollow.save()

            return res.json({ message: "Followed user" })
        }

        
    } catch (error) {

        return res.status(500).json({message:error.message})

        
    }
}