
const express = require("express")

const router = express.Router()

const {
    stkPush,
    mpesaCallback
} = require("../controllers/paymentController")

const { protect } = require("../middlewares/protect")

router.post(
    "/stkpush",
    protect,
    stkPush
)

router.post(
    "/callback",
    mpesaCallback
)

module.exports = router