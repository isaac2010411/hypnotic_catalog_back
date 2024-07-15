const mongoose = require('mongoose')

const inventoryModel = mongoose.Schema(
  {
    product_code: {
      type: String,
    },
    total: {
      type: Number,
    },
    lotes: [
      {
        bill_code: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        provider_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Provider',
        },
        createdAt:{
          type:Date
        }
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Inventory = mongoose.model('Inventory', inventoryModel)

module.exports = Inventory
