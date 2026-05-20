
const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator"
    },

    phone: String,

    amount: Number,

    transactionId: String,

    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending"
    }

}, { timestamps: true })

const Transcation = mongoose.model("Transactio", transactionSchema)

module.exports  = Transcation