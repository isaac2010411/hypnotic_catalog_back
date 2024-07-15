const User =require('../mongoose/models/userModel')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
  let token

  let authorization = req.headers.authorization && req.headers.authorization.startsWith('Bearer')

  if (authorization) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)


      req.user = await User.findOne({ _id: decoded._id })
      next()
    } catch (error) {
      res.status(401)
      throw new Error('No Autorizado, Token Requerido')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('No Autorizado para esta acción.')
  }
}


module.exports = {
    protect
};
