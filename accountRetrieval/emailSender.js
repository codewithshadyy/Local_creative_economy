const nodemailer = require("nodemailer")

const sendEmail = async (to, subject, text) => {

    const transporter  = nodemailer.createTransport({
        service:"gmail",
        auth:{
            email:process.env.Email,
            pass:process.env.pass
        }
    })

    await transporter.sendMail({
        to, 
        subject,
        text
    })
    
}
await sendEmail(user.email, "Password Reset", resetUrl)