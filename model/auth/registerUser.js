const User = require('../../schemas/User')
const { sendMail } = require('../../helpers')

const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid')

const registerUser = async (body) => {
  try {
    const { email, password, subscription, token } = body
    const user = await User.findOne({ email })
    if (user) {
      return null
    }
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const defaultAvatar = gravatar.url(email, { s: '250', d: 'retro' })
    const verifyToken = uuidv4()

    const data = {
      to: email,
      subject: 'Email verification',
      text: 'Please, verify your email',
      html: `<p>Please, verify your email <a href="http://localhost:5000/api/v1/auth/verify/${verifyToken}">Link</a></p>`
    }
    await sendMail(data)
    return await User.create({ email, password: hashedPassword, subscription, token, avatarURL: defaultAvatar, verifyToken })
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { registerUser }
