/**
 * @author: Ankit Prakash
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  LOG.debug('Request to /')
  res.render('index.ejs', { title: 'Express App' })
})

// Defer path requests to a particular controller
router.use('/customer', require('../controllers/customer.js'))
router.use('/order', require('../controllers/order.js'))
router.use('/order-line', require('../controllers/orderline.js'))
router.use('/product', require('../controllers/product.js'))
router.use('/about', require('../controllers/about.js'))

LOG.debug('END routing')
module.exports = router