const { formatCurrencyToNum } = require('./formatters')

const amountReducer = (amounts) => {
  return amounts
    .map((item) => formatCurrencyToNum(item.publicPrice) * item.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

const generateCode = () => {
  const number = ()=> Math.floor(Math.random() * 9)
  return `A${number()}${number()}${number()}`
}

const changeProductFields = (productsRecords, productsRequired) => {
  return productsRecords.map((product) => {
    return {
      _id: product._id,
      category: product.category.name,
      brand: product.brand.name,
      description: product.description,
      title: product.name,
      publicPrice: product.publicPrice,
      quantity: productsRequired.find((item) => item._id === product._id.toString()).quantity,
      image: product.image,
    }
  })
}

const sumProductsAndShippingAmounts = (productAmount, shippingAmount) => {
  productAmount = typeof productAmount === 'string' ? formatCurrencyToNum(productAmount) : productAmount
  shippingAmount = typeof shippingAmount === 'string' ? formatCurrencyToNum(shippingAmount) : shippingAmount

  const sum = productAmount + shippingAmount

  return sum
}
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
module.exports = {
  makeid,
  amountReducer,
  changeProductFields,
  sumProductsAndShippingAmounts,generateCode
}
