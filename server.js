const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const creatorRoutes = require("./routes/creatorRoutes")
const postRoutes = require("./routes/postRoutes")
dotenv.config()



app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))

app.use("/api/", creatorRoutes)
app.use("/api/posts", postRoutes)




app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})
