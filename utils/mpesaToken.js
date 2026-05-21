
const axios  = require("axios")
require("dotenv").config()


const getMpesaToken = async () => {

    const auth = Buffer.from(
        `${process.env.Consumer_Key}:${process.env.CONSUMER_SECRET}`
    ).toString("base64")

    const response = await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",

        {
            headers:{
                Authorization:`Basic ${auth}`
            }
        }
    )
return  response.data.access_token
    
}

module.exports  = getMpesaToken