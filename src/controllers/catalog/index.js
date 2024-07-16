const { SELLER_ROLE } = require('../../config/users/roles/roles')
const Consignment = require('../../mongoose/models/consigmentModel')
const Inventory = require('../../mongoose/models/inventoryModel')
const Percentage = require('../../mongoose/models/percentageModel')
const User = require('../../mongoose/models/userModel')
const ObjectId = require('mongoose').Types.ObjectId

const Bill = require('../../mongoose/models/billModel')
const Product = require('../../mongoose/models/productModel')
const mongoose = require('mongoose')
const { makeid } = require('../../utils/commonFunctions')
const Transactions = require('../../mongoose/models/transactionModel')
const { ADMIN_ROLE } = require('../../config/users/roles/roles')
const Request = require('../../mongoose/models/requestModel')

const generate_request = async (req, res) => {
  const user_id = req.params.id
  const code = req.params.code
  console.log(req.body)
  await new Request(req.body).save()
  // const employeeId = new mongoose.Types.ObjectId(user_id) // Reemplaza 'employee_id_here' con el ID del empleado específico
  // const productsByCart = req.body.cart.map((i) => ({
  //   product_code: i.product_code,
  //   quantity: i.quantity,
  //   quantity: i.quantity,
  // }))

  // const { percentage } = await Percentage.findOne({ code })
  // const transaction_code = `${makeid(6)}-${makeid(6)}-${makeid(6)}`

  // const products = await Product.aggregate([
  //   {
  //     $match: { product_code: { $in: productsByCart.map((j) => j.product_code) } },
  //   },
  //   {
  //     $project: {
  //       _id: 1,
  //       image: 1,
  //       name: 1,
  //       product_code: 1,
  //       price: { $add: ['$price', { $multiply: ['$price', { $divide: [percentage, 100] }] }] },
  //       updatedAt: 1,
  //     },
  //   },
  // ])

  //   if (req.user.role === ADMIN_ROLE) {
  //     const inventories = await Inventory.find({ product_code: { $in: productsByCart.map((j) => j.product_code) } })

  //     let count = 0
  //     let maxCount = productsByCart.length
  //     while (count < maxCount) {
  //       const currentProductCode = productsByCart[count].product_code
  //       let quantityToDesasign = productsByCart[count].quantity
  //       const inventory = inventories.find((j) => j.product_code === currentProductCode)
  //       let lotes = inventory.lotes.sort((a, b) => a.createdAt - b.createdAt)
  //       const currentProduct = products.find((j) => j.product_code === currentProductCode)

  //       for (const lote of lotes) {
  //         if (quantityToDesasign === 0) break

  //         const billList = await Bill.findOne({ bill_code: lote.bill_code })
  //         const unit_price = billList.details.find((j) => j.product_code === currentProductCode).unit_price

  //         let desassignQuantity = Math.min(lote.quantity, quantityToDesasign)

  //         const transaction = new Transactions({
  //           transaction_code,
  //           product_code: currentProductCode,
  //           user_id: employeeId,
  //           bill_code: lote.bill_code,
  //           type: 'sell',
  //           quantity: desassignQuantity,
  //           amount: Number(parseFloat(desassignQuantity * currentProduct.price).toFixed(2)),
  //           comissionAmount: 0,
  //           cost_of_sale: Number(parseFloat(desassignQuantity * unit_price).toFixed(2)),
  //           unit_price: unit_price,
  //           liquidated: true,
  //         })
  //         await transaction.save()
  //         lote.quantity -= desassignQuantity
  //         quantityToDesasign -= desassignQuantity

  //         lotes = lotes.filter((lote) => lote.quantity > 0)

  //         await Inventory.updateOne(
  //           { product_code: currentProductCode },
  //           { $set: { lotes, total: (inventory.total -= desassignQuantity) } }
  //         )
  //       }

  //       count += 1
  //     }
  //   } else {
  //     const consigments = await Consignment.find({
  //       product_code: { $in: productsByCart.map((j) => j.product_code) },
  //     }).sort({ createdAt: 1 })

  //     let count = 0
  //     let maxCount = productsByCart.length
  //     while (count < maxCount) {
  //       const currentProductCode = productsByCart[count].product_code
  //       let quantityToDesasign = productsByCart[count].quantity

  //       const productConsigments = consigments.filter((j) => j.product_code === currentProductCode)
  //       const currentProduct = products.find((j) => j.product_code === currentProductCode)

  //       for (const consignment of productConsigments) {
  //         const billList = await Bill.findOne({ bill_code: consignment.bill_code })
  //         const unit_price = billList.details.find((j) => j.product_code === currentProductCode).unit_price

  //         let desassignQuantity = Math.min(consignment.quantity, quantityToDesasign)

  //         if (quantityToDesasign === 0) break

  //         const transaction = new Transactions({
  //           transaction_code,
  //           product_code: currentProductCode,
  //           user_id: employeeId,
  //           bill_code: consignment.bill_code,
  //           type: 'sell',
  //           quantity: desassignQuantity,
  //           amount: Number(parseFloat(desassignQuantity * currentProduct.price).toFixed(2)),
  //           comissionAmount: Number(parseFloat(desassignQuantity * currentProduct.price * 0.2).toFixed(2)),
  //           cost_of_sale: Number(parseFloat(desassignQuantity * unit_price).toFixed(2)),
  //           unit_price: unit_price,
  //           liquidated: false,
  //         })

  //         await transaction.save()
  //         consignment.quantity -= desassignQuantity
  //         quantityToDesasign -= desassignQuantity

  //         if (consignment.quantity < 1) {
  //           await Consignment.deleteOne({ _id: consignment._id })
  //         } else {
  //           await consignment.save()
  //         }
  //       }

  //       count += 1
  //     }
  //   }

  res.json({})
}

const getCatalogByCustomer = async (req, res) => {
  const id = req.params.id
  const code = req.params.code

  const { percentage } = await Percentage.findOne({ code })
  const { role, name } = await User.findOne({ _id: id })

  let marketData = []
  if (role === SELLER_ROLE) {
    marketData = await Consignment.aggregate([
      {
        $match: { employee: new ObjectId(id) },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'product_code',
          foreignField: 'product_code',
          as: 'producto',
        },
      },
      {
        $unwind: '$producto',
      },
      {
        $lookup: {
          from: 'inventories',
          localField: 'product_code',
          foreignField: 'product_code',
          as: 'inventario',
        },
      },
      {
        $unwind: '$inventario',
      },
      {
        $group: {
          _id: {
            employee: '$employee',
            product_code: '$product_code',
          },
          name: { $first: '$producto.name' },
          description: { $first: '$producto.description' },
          categoria_id: { $first: '$producto.categoria_id' },
          price: { $first: '$producto.price' },
          image: { $first: '$producto.image' },
          detalles: { $first: '$producto.detalles' },
          stock_asignado: { $sum: '$quantity' },
          stock_disponible: { $first: '$quantity' },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id.employee',
          foreignField: '_id',
          as: 'vendedor',
        },
      },
      {
        $unwind: '$vendedor',
      },
      {
        $project: {
          _id: 0,
          employee: '$_id.employee',
          name: '$vendedor.name',
          product_code: '$_id.product_code',
          name: 1,
          descripcion: 1,
          categoria_id: 1,
          price: { $add: ['$price', { $multiply: ['$price', { $divide: [percentage, 100] }] }] },
          image: 1,
          detalles: 1,
          stock_asignado: 1,
          stock_disponible: 1,
        },
      },
      {
        $sort: { employee: 1, name: 1 }, // Ordena por vendedor y por nombre del producto
      },
    ])
  } else {
    marketData = await Inventory.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_code',
          foreignField: 'product_code',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $project: {
          _id: 1,
          product_code: '$product.product_code',
          name: '$product.name',
          descripcion: '$product.description',
          categoria_id: 1,
          price: { $add: ['$product.price', { $multiply: ['$product.price', { $divide: [percentage, 100] }] }] },
          image: '$product.image',
          details: '$product.details',
          stock_asignado: '$total',
          stock_disponible: 1,
          employee: id,
        },
      },
    ])
  }
  console.log(marketData)

  res.json(marketData)
}

const getProductDetails = async (req, res) => {
  const employee = req.params.seller
  const product_code = req.params.id
  const code = req.params.code
  console.log(req.params)
  const { role } = await User.findOne({ _id: req.params.seller }, { role: 1 })

  let products

  const { percentage } = await Percentage.findOne({ code })

  if (role === SELLER_ROLE) {
    products = await Consignment.aggregate([
      { $match: { product_code, employee: new ObjectId(employee) } },
      {
        $lookup: {
          from: 'products',
          localField: 'product_code',
          foreignField: 'product_code',
          as: 'product',
        },
      },
      {
        $unwind: {
          path: '$product',
        },
      },
      {
        $group: {
          _id: '$product_code',
          product_code: { $first: '$product_code' },
          total: { $sum: '$quantity' },
          name: { $first: '$product.name' },
          image: { $first: '$product.image' },
          descripcion: { $first: '$product.descripcion' },

          price: {
            $first: { $add: ['$product.price', { $multiply: ['$product.price', { $divide: [percentage, 100] }] }] },
          },
        },
      },
    ])
  } else {
    products = await Inventory.aggregate([
      { $match: { product_code } },
      {
        $lookup: {
          from: 'products',
          localField: 'product_code',
          foreignField: 'product_code',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $project: {
          _id: 1,
          product_code: '$product.product_code',
          name: '$product.name',
          descripcion: '$product.description',
          categoria_id: 1,
          price: { $add: ['$product.price', { $multiply: ['$product.price', { $divide: [percentage, 100] }] }] },
          image: '$product.image',
          details: '$product.details',
          total: '$total',
          lotes: '$lotes',
          employee: employee,
        },
      },
    ])
  }

  res.json(products)
}

module.exports = {
  getCatalogByCustomer,
  getProductDetails,
  generate_request,
}
