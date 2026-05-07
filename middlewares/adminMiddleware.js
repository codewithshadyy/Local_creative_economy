
exports.adminOnly = async (req,res,next) => {

    if(req.creator && req.creator.role === "admin"){
        next()
    }else{
        return res.status(400).json({message:"Access denied"})
    }
    
}

