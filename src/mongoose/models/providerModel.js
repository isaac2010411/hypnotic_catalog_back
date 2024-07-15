const mongoose = require('mongoose')

const providerModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    contact: {
      telefono: {
        type: String,
      },
      email: {
        type: String,
      },
      direccion: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
)

const Provider = mongoose.model('Provider', providerModel)

module.exports = Provider
