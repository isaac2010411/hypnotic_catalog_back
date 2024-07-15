const mongoose = require('mongoose')

const billModel = mongoose.Schema(
  {
    bill_code: {
      type: String,
    },
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
    },
    client_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    total: {
      type: Number,
    },
    bill_date: {
      type: Date,
    },  
    details: [
      {
        product_code: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        unit_price: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Bill = mongoose.model('Bill', billModel)

module.exports = Bill
