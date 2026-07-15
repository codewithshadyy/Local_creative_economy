
//node.js modules and packages 
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const limitApplication = require("./security/limit")
const morgan = require("morgan")
const accessLogStream = require("./logs/logger")



// Routes
const creatorRoutes = require("./routes/creators")
const postRoutes = require("./routes/posts")
const profileRoutes = require("./routes/profiles")
const tlRoutes = require("./routes/timeline")
const swaggerDoc = require("./documentation/docs")
const swaggerUi = require('swagger-ui-express');
const logRoutes = require("./routes/logs")
const metricsRoute = require("./routes/metrics")



// env variables configuration
dotenv.config()


// middlewares
app.use(express.json())



// db connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))



// vercel configuration 

app.set("trust proxy", 1)


// limit the application
app.use(limitApplication)


// morgan
morgan((tokens, req, res) => {
  return JSON.stringify({
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    responseTime: tokens["response-time"](req, res),
    date: tokens.date(req, res),
  });
});



app.use(morgan(
  "combined",
  {stream:accessLogStream}
))



  


// docs configuration
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))



// routes configurations
app.use("api/"  , limitApplication)
app.use("/api/v1", creatorRoutes)
app.use("/api/v1/admin", logRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/profiles", profileRoutes)
app.use("/api/v1/feeds", tlRoutes)
app.use("/api/v1/obs/", metricsRoute)











// /port listening

app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})


module.exports = app
