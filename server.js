const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()


const app = express()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))


app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})
