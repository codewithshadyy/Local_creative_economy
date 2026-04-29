const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const creatorRoutes = require("./routes/creatorRoutes")
const postRoutes = require("./routes/postRoutes")
const profileRoutes = require("./routes/profileRoutes")
const tlRoutes = require("./routes/tlRoutes")


dotenv.config()



app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))

app.use("/api/v1", creatorRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/profiles", profileRoutes)
app.use("/api/v1/feeds", tlRoutes)




app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})
