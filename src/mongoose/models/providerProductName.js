const mongoose = require('mongoose')

const providerProductNameModel = mongoose.Schema(
  {
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
    },
    product_code: {
      type: String,
    },
    nameByProvider: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const ProviderProductName = mongoose.model('ProviderProductName', providerProductNameModel)

module.exports = ProviderProductName
