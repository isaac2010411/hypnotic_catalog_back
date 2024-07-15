const mongoose = require('mongoose')

const buyPriceModel = mongoose.Schema(
  {
    product_code: {
      type: String,
    },
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
    },
    bill_code: {
      type: String,
    },
    unit_price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const BuyPrice = mongoose.model('BuyPrice', buyPriceModel)

module.exports = BuyPrice
