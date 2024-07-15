const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { ALL_USER_ROLES, USER_ROLE } = require('../../config/users/roles/roles')

const userSchema = mongoose.Schema(
  {
    avatar: {
      type: String,
      default: '/public/assets/img/avatars/avatar.jpg',
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    payment_account: {
      type: String,

    },
    isDefaultPassword: {
      type: Boolean,

      default: true,
    },
    role: {
      type: String,
      enum: ALL_USER_ROLES,
      required: true,
      default: USER_ROLE,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

module.exports = User
