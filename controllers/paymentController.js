const Transcation = require("../models/Transaction")
const getMpesaToken = require("../utils/mpesaToken")
const axios = require("axios")
const moment = require("moment")


exports.stkPush = async (req,res) => {

    
    try {
          const token = await getMpesaToken()
          const timestamp = moment().format("YYYYMMDDHHmmss")

          const password = Buffer.from(
            process.env.SHORTCODE +
            process.env.PASSKEY + 
            timestamp

            


          ).toString("base64")

          const response = await axios.get(
            "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
            {
                BusinessShortCode: process.env.MPESA_SHORTCODE,
                Password: password,
                Timestamp: timestamp,
                TransactionType: "CustomerPayBillOnline",
                Amount: 10,
                PartyA: req.body.phone,
                PartyB: process.env.MPESA_SHORTCODE,
                PhoneNumber: req.body.phone,
                CallBackURL: process.env.CALLBACK_URL,
                AccountReference: "SocialSphere",
                TransactionDesc: "Post Subscription"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
          )

          res.status(200).json(response.data)




        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}


exports.mpesaCallback = async (req, res) => {

    console.log(req.body)

    // verify transaction

    // update subscription

    // mark transaction success

    res.json({
        ResultCode: 0,
        ResultDesc: "Accepted"
    })
}