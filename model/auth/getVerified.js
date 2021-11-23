const User = require('../../schemas/User')

const getVerified = async(req) => {
  const { verifyToken } = req.params
  const user = await User.findOne({ verifyToken })
  if (!user) {
    return null
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })

  return true
}

module.exports = { getVerified }
