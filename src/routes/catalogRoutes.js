'use strict'

const express = require('express')
const router = express.Router()

const { getCatalogByCustomer, getProductDetails, generate_request } = require('../controllers/catalog')

router.route('/:id/:code').get(getCatalogByCustomer).post(generate_request)
router.route('/:id/:seller/:code').get(getProductDetails)

module.exports = router
