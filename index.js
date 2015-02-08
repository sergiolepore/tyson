if (!global._6to5Polyfill) {
  require("6to5/polyfill"); // load polyfills and stuff
}

module.exports = require('./dist/tyson.js');
