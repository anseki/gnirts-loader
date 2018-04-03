'use strict';

var gnirts = require('gnirts');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  return content != null ? gnirts.mangle(content + '') : content;
};
