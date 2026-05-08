const express = require("express")
const router = express.Router()
const { getLogs, deleteLogs } = require("../controllers/logsController")


router.get("/logs", getLogs)
router.delete("delete/logs", deleteLogs)


module.exports = router