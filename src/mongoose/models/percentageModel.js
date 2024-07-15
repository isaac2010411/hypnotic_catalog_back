const mongoose = require('mongoose')

const percentageModel = mongoose.Schema(
  {
    type: {
      type: String,
    },
    percentage: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Percentage = mongoose.model('Percentage', percentageModel)

module.exports = Percentage
