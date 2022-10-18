const nodemailer = require('nodemailer');

const sendMail = async (name, email, token) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "Reset Password", // Subject line
        text: "Hello world?", // plain text body
        html: '<p>Hi' + name + ',Please copy the link and <a href="http://localhost:5000/api/user/forget/password?token=' + token + '">reset password <a/>', // html body
    }, (error, data) => {
        if (error) {
            console.log(error.message)
        }
        else {
            console.log("Mail has seccessfully sent", data.response)
        }
    })
}


module.exports = sendMail;