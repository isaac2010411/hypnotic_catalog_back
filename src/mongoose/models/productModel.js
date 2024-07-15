const mongoose = require('mongoose')

const productModel = mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
      default: '/public/assets/img/avatars/avatar.jpg',
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    provider_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
    },
    subCategory: {
      type: String,
    },
    product_code: {
      type: String,
    },
    tags: {
      type: String,
    },
    price: {
      type: Number,
    },
    details: {
      peso: {
        type: String,
      },
      dimensiones: {
        type: String,
      },
      color: {
        type: String,
      },
      marca: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productModel)

module.exports = Product
