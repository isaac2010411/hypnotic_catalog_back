'use strict'

const express = require('express')
const router = express.Router()

const catalog_routes = require('./catalogRoutes')


router.use('/catalog', catalog_routes)

module.exports = router
