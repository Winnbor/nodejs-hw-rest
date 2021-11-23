const { patchVerification } = require('../../model/auth')

const authVerifyResend = async (req, res, next) => {
  const data = await patchVerification(req.body)
  if (!data) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'User not found'
    })
  }
  if (data === 'Verification has already been passed') {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: data
    })
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      message: 'Verification email sent'
    }
  })
}

module.exports = authVerifyResend
