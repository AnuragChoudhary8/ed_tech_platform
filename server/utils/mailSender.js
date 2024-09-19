const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    // CreateTraporter is an object that is used to send mails with all esential details like auth etc
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })
    // with the help of sendMail we can send mails with is body
    let info = await transporter.sendMail({
      from: `"Studynotion" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
