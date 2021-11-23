const User = require('../../schemas/User')
const { sendMail } = require('../../helpers')

const patchVerification = async(body) => {
  const { email } = body

  const user = await User.findOne({ email })

  if (!user) {
    return null
  }
  if (user.verify) {
    return 'Verification has already been passed'
  }
  const data = {
    to: email,
    subject: 'Resended email verification',
    text: 'Please, verify your email',
    html: `<p>Please, verify your email <a href="http://localhost:5000/api/v1/auth/verify/${user.verifyToken}">Link</a></p>`
  }
  await sendMail(data)
  return true
}

module.exports = { patchVerification }
