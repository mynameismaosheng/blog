'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API:'"http://192.168.0.188:6789/api/"'
  BASE_API:'"http://192.168.0.188:6789/"'
})
