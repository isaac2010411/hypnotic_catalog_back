const { SELLER_ROLE } = require('../../config/users/roles/roles')
const Consignment = require('../../mongoose/models/consigmentModel')
const Inventory = require('../../mongoose/models/inventoryModel')
const Percentage = require('../../mongoose/models/percentageModel')
const User = require('../../mongoose/models/userModel')
const ObjectId = require('mongoose').Types.ObjectId
const Request = require('../../mongoose/models/requestModel')

const generate_request = async (req, res) => {
  const user_id = req.body.seller
  const { name } = await User.findOne({ _id: user_id }, { name: 1 })

  await new Request(req.body).save()

  res.json({ name })
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
