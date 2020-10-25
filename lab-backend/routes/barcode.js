const express = require('express'),
  router = express.Router(),
  { comparePrice } = require('../controllers/barcode.controllers')

router.post('/compareprice', comparePrice)

module.exports = router;
