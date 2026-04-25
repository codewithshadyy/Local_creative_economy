
const mongoose =  require("mongoose")

const profileSchema = new mongoose.Schema({

    creator:{


        type:mongoose.Schema.Types.ObjectId,
        ref:"Creator",
        required:true,
        unique:true



    },
   
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
         ref:"Post"
        }
    ],
    

    bio:{
        type:String,
        default:""

    },

    profilePic:{
        type:String,
        default:"",


    },

}, {timestamps:true})

const profile = mongoose.model("Profile", profileSchema)

module.exports = profile

