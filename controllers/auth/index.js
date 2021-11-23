const authRegister = require('./authRegister')
const authLogin = require('./authLogin')
const authLogout = require('./authLogout')
const authCurrent = require('./authCurrent')
const authPatchSub = require('./authPatchSub')
const authPatchAvatar = require('./authPatchAvatar')
const authVerify = require('./authVerify')
const authVerifyResend = require('./authVerifyResend')

module.exports = {
  authRegister,
  authLogin,
  authLogout,
  authCurrent,
  authPatchSub,
  authPatchAvatar,
  authVerify,
  authVerifyResend
}
