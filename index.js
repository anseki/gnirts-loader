'use strict';

var gnirts = require('gnirts');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  return gnirts.mangle(source + '');
};
