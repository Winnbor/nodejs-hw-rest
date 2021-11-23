const { Schema, model } = require('mongoose')
const { regex, subscriptions } = require('../helpers')

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: regex.emailRegex
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6
    },
    subscription: {
      type: String,
      enum: [...subscriptions],
      default: 'starter'
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  }, {
    versionKey: false,
    timestamps: true
  }
)

const User = model('_user', UserSchema)

module.exports = User
