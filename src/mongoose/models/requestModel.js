const mongoose = require('mongoose')

const requestModel = mongoose.Schema(
  {
    cart: [
      {
        name: {
          type: String,
        },
        image: {
          type: String,
        },
        detalles: {
          type: String,
        },
        stock_asignado: {
          type: Number,
        },
        stock_disponible: {
          type: Number,
        },
        product_code: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    user: {
      name: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    total: {
      type: Number,
    },
    liquidated: {
      type: Boolean,
      default: false,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    delivered_date: {
      type: Date,
    },
    paymentMethod: {
      type: String,
    },
    reqType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Request = mongoose.model('Request', requestModel)

module.exports = Request
