const express =require("express")

const router = express.Router()
const {metrics} = require("../middlewares/metrics")
const {metrics} = require("../controllers/metricController")


router.get("/metrics", metrics, metrics)