const mongoose = require('mongoose')

const transactionsModel = mongoose.Schema(
  {
    transaction_code: {
      type: String,
    },
    product_code: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    bill_code: {
      type: String,
    },
    type: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    unit_price: {
      type: Number,
    },
    comissionAmount: {
      type: Number,
    },
    cost_of_sale: {
      type: Number,
    },
    liquidated: {
      type: Boolean,
    },
    paymentMethod: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Transactions = mongoose.model('Transactions', transactionsModel)

module.exports = Transactions
