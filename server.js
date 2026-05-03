//node.js modules and packages 
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const limitApplication = require("./security/limit")

// Routes
const creatorRoutes = require("./routes/creatorRoutes")
const postRoutes = require("./routes/postRoutes")
const profileRoutes = require("./routes/profileRoutes")
const tlRoutes = require("./routes/tlRoutes")
const swaggerDoc = require("./documentation/docs")
const swaggerUi = require('swagger-ui-express');

// env variables configuration
dotenv.config()


// middlewares
app.use(express.json())
app.use(limitApplication)


// db connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))



// docs configuration
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))



// routes configurations

app.use("/api/v1", creatorRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/profiles", profileRoutes)
app.use("/api/v1/feeds", tlRoutes)







// /port listening

app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})
