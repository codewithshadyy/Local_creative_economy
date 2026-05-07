
//node.js modules and packages 
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const limitApplication = require("./security/limit")
const morgan = require("morgan")
const mongooseMorgan = require("mongoose-morgan")
const accessLogStream = require("./logger")



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



// db connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database connected successfullly"))
.catch((error) => console.log(error.message))



// vercel configuration 

app.set("trust proxy", 1)


// limit the application
app.use(limitApplication)

// adding morgan for logs


morgan.token("creator", (req) => {
  return req.creator?.username || "Guest";
});

app.use(
  morgan(":method :url :status :response-time ms :user", {
    stream: accessLogStream,
  })
);



//    app.use(morgan("combined", {stream:accessLogStream})) 


// docs configuration
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))



// routes configurations
app.use("api/"  , limitApplication)
app.use("/api/v1", creatorRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/profiles", profileRoutes)
app.use("/api/v1/feeds", tlRoutes)


// getting lgs route
app.get("/api/logs", async (req, res) => {
  try {
    const logsPath = path.join(logsDir, "access.log");

    const logs = fs.readFileSync(logsPath, "utf8");

    res.status(200).json({
      success: true,
      logs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});







// /port listening

// app.listen(process.env.PORT, ()=>{console.log(`http://localhost:${process.env.PORT}`)})


module.exports = app
