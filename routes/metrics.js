const express =require("express")

const router = express.Router()
const {metrics} = require("../middlewares/metrics")
const {seeMetrics} = require("../controllers/metricController")


router.get("metrics/", metrics, seeMetrics)


module.exports = router