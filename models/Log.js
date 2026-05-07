const mongoose = require("mongoose")
const  LogSchema = new mongoose.Schema({}, { strict: false })
const Log = mongoose.model('Log', LogSchema, 'user_logs');