const express = require("express")
const router = express.Router()
const { getLogs, deleteLogs } = require("../controllers/logsController")
const {protect} = require("../middlewares/protect")
const {adminOnly} = require("../middlewares/adminMiddleware")




router.get("/logs",protect,adminOnly, getLogs)
router.delete("/delete/logs", protect, adminOnly, deleteLogs)


module.exports = router