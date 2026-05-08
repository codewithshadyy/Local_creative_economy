

const fs = require("fs")
const path = require("path")
exports.getLogs = async (req,res) => {

    try {
     const logsPath = path.join(__dirname, "../logs/userlogs/access.log")

     fs.readFile(logsPath, "utf8", (err, data) => {

      if(err){
        return res.status(500).json({
            success: false,
          message: "Failed to read logs",
          error: err.message,
        })
      }

      const logs = data
      .split("\n")
      .filter((line) => line.trim() !=="")

      res.status(200).json({
        success: true,
        total: logs.length,
        logs,
      })
    
     })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
        
    }
    
}