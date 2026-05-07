
const Log = require("../models/Log")

exports.getLogs  = async(req,res) => {
    try {
        const logs = await Log.find()

        res.status(200).json({
            data:logs
        })



        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}