const mongoose = require('mongoose')

const consignmentModel = mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    bill_code: {
      type: String,
    },
    original_quantity: {
      type: Number,
    },
    product_code: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const Consignment = mongoose.model('Consignment', consignmentModel)

module.exports = Consignment
