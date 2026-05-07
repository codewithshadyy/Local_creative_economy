const fs = require("fs")
const path = require("path")
const morgan = require("morgan")

const logsDir =path.join(process.cwd(), "logs")

if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir, { recursive: true })
}