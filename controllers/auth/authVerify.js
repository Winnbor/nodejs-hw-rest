const { getVerified } = require('../../model/auth')

const authVerify = async (req, res, next) => {
  const data = await getVerified(req)
  if (!data) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'User not found'
    })
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      message: 'Verification successful'
    }
  })
}

module.exports = authVerify
