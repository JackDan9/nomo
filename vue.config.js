'use strict';
const path = require('path');
const defaultSettings = require('./src/settings.js');

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nomo/" : "/",
};