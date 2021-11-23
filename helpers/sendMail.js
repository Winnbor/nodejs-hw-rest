const sgMail = require('@sendgrid/mail')

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendMail = async (data) => {
  try {
    const mail = { ...data, from: 'n.shiller@qkodklan.ru' }
    await sgMail.send(mail)
    console.log('Email sent')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = sendMail
