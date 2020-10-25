const express = require('express'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path')

const barcodeRouter = require('./routes/barcode');

const app = express();
app.use(logger('dev'))
    .use(cors({
        origin: 'http://localhost:3000'
    }))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
app.use(express.static(path.join('./', 'build')));
app.use('/barcode', barcodeRouter)

module.exports = app;
